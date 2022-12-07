import "./common.css";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmDialog from "./confirmDialog";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateDialog from "./createDialog";

export default function Show() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [updateList, setUpdateList] = useState(false);

  const onSearch = (e) => {
    e.preventDefault();
    console.log("val-", e.target.value);
    setSearchInput(e.target.value);
    fetchData(e.target.value);
  };

  useEffect(() => {
    fetchData(null);
  }, [updateList]);

  const fetchData = (searchInput) => {
    if (!searchInput) {
      axios
        .get(`http://localhost:8080/api/getAll`)
        .then((resp) => {
          console.log("data is", resp.data);
          setProducts(resp.data);
        })
        .catch((err) => {
          console.log("err is", err);
        });
    } else {
      axios
        .get(`http://localhost:8080/api/search/${searchInput}`)
        .then((resp) => {
          console.log("data is", resp.data);
          setProducts(resp.data);
        })
        .catch((err) => {
          console.log("err is", err);
        });
    }
  };

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/delete/${id}`)
      .then((resp) => {
        console.log("data is", resp.data);
        fetchData(null);
        toast.success("Record deleted", { autoClose: 4000 });
      })
      .catch((err) => {
        console.log("err is", err);
      });
  };

  return (
    <div className="container">
      <form>
        <div className="row m-3">
          <div className="col-sm-3">
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => onSearch(e)}
            />
          </div>
          <div className="col-sm-1">
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
          <div className="col-sm-6"></div>
          <div className="col-sm-2">
            {/* <button type="button" className="btn btn-primary addBtn">
              <Link to="/create">Add Record</Link>
            </button> */}
            <CreateDialog listUpdate={() => setUpdateList()} />
          </div>
        </div>
      </form>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Quantity</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.brand}</td>
              <td>{item.quantity}</td>
              <td className="text-center">
                <button type="button" className="btn btn-success">
                  <Link to={`/update/${item._id}`}>Edit</Link>
                </button>
              </td>
              <td className="text-center">
                {/* <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => onDelete(e, item._id)}
                >
                  Delete
                </button> */}

                <ConfirmDialog
                  btnText="Delete"
                  btnHeader="Delete Action"
                  btnBody="Do you want to delete the record?"
                  deleteIt={() => {
                    onDelete(item._id);
                  }}
                />
                <ToastContainer />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
