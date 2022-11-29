import React, { Fragment } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./common.css";
import { Link } from "react-router-dom";

export default function Show() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => [
    axios.get("http://localhost:8080/api/getAll").then((resp) => {
      setProducts(resp.data);
    }),
  ];

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/delete/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        fetchData();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-primary addBtn">
        <Link to="/create">Add</Link>
      </button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Quantity</th>
            <th rowSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.brand}</td>
              <td>{item.quantity}</td>
              <td>
                <button type="button" className="btn btn-success">
                  <Link to="/update">Edit</Link>
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    onDelete(item._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
