import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddEdit() {
  const [nam, setNam] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_PATH}/api/getOne/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        const { name, brand, quantity } = resp.data;
        setNam(name);
        setBrand(brand);
        setQuantity(quantity);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [id]);

  const submit = (e) => {
    e.preventDefault();
    const data = {
      name: nam,
      brand,
      quantity,
    };

    id
      ? axios
          .put(`${process.env.REACT_APP_BASE_PATH}/api/update/${id}`, data)
          .then((resp) => {
            console.log("resp", resp);
            navigate("/", { state: "edit" });
          })
          .catch((err) => {
            console.log("error is", err);
          })
      : axios
          .post(`${process.env.REACT_APP_BASE_PATH}/api/post`, data)
          .then((resp) => {
            console.log("resp", resp);
            navigate("/", { state: "add" });
          })
          .catch((err) => {
            console.log("error is", err);
          });
    setNam("");
    setBrand("");
    setQuantity("");
  };

  return (
    <div className="container">
      <form onSubmit={(e) => submit(e)}>
        <h4 className="text-center">{id ? "Update" : "Add"} Page</h4>
        <div className="row mb-3">
          <label className="col-sm-2" htmlFor="nam">
            Name-
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              value={nam}
              name="nam"
              onChange={(e) => setNam(e.target.value)}
            />
          </div>
        </div>

        <div className="row  mb-3">
          <label className="col-sm-2" htmlFor="brand">
            Brand-
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              value={brand}
              name="brand"
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-2" htmlFor="quantity">
            Quantity-
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              value={quantity}
              name="quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <button type="submit" className="btn btn-primary">
              Submit Form
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
