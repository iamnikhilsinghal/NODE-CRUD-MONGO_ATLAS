import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [nam, setNam] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    console.log("submit form", nam, brand, quantity);
    const data = {
      name: nam,
      brand,
      quantity,
    };
    axios
      .post(`${process.env.REACT_APP_BASE_PATH}/api/post`, data)
      .then((resp) => {
        console.log("resp", resp);
        navigate("/");
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
        <h4 className="text-center">Create Page</h4>
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
