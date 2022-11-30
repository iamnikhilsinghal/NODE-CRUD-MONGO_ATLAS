import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./common.css";
import { Link, useLocation } from "react-router-dom";
import ConfirmDialog from "./confirmDialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Show() {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state === "add") {
      toast.success("Record Added", { autoClose: 1000 });
    } else if (location.state === "edit") {
      toast.success("Record edited", { autoClose: 1000 });
    }
    fetchData();
  }, [location.state]);

  const fetchData = () => [
    axios.get(`${process.env.REACT_APP_BASE_PATH}/api/getAll`).then((resp) => {
      setProducts(resp.data);
    }),
  ];

  const onDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BASE_PATH}/api/delete/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        fetchData();
        toast.success("Record deleted", { autoClose: 1000 });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="container">
      {products.length ? (
        <div>
          <button type="button" className="btn btn-primary addBtn">
            <Link to="/addEdit">Add</Link>
          </button>

          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>S No</th>
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
                  <td className=" text-center">
                    <button type="button" className="btn btn-success">
                      <Link to={`/addEdit/${item._id}`}>Edit</Link>
                    </button>
                  </td>
                  <td className="text-center">
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
      ) : (
        <div className="text-center">Problem in Loading data..</div>
      )}
    </div>
  );
}
