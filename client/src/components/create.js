import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create(props) {
  const [nam, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (nam === null || nam === "") {
      document.getElementById("nameErr").innerHTML = "Name can't be blank";
      return false;
    } else {
      document.getElementById("nameErr").innerHTML = "";
    }
    if (brand === null || brand === "") {
      document.getElementById("brandErr").innerHTML = "Brand can't be blank";
      return false;
    } else {
      document.getElementById("brandErr").innerHTML = "";
    }
    console.log("quantity", quantity);
    if (quantity === null || quantity === "") {
      document.getElementById("qntyErr").innerHTML = "Quantity can't be blank";
      return false;
    } else {
      document.getElementById("qntyErr").innerHTML = "";
    }
    return true;
  };

  const submit = (e) => {
    e.preventDefault();
    const res = validateForm();
    if (res) {
      const data = {
        name: nam,
        brand: brand,
        quantity: quantity,
      };
      axios
        .post(`http://localhost:8080/api/post`, data)
        .then((resp) => {
          console.log("resp", resp);
          props.handleClose();
          navigate("/");
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  return (
    <div className="container text-center">
      <h4>Create Page</h4>
      <form onSubmit={(e) => submit(e)}>
        <div className="row mb-3">
          <label className="col-sm-1" htmlFor="nam">
            Name-
          </label>
          <div className="col-sm-4">
            <input
              className="form-control"
              type="text"
              name="nam"
              value={nam}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <span id="nameErr" className="red"></span>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-1" htmlFor="brand">
            Brand-
          </label>
          <div className="col-sm-4">
            <input
              className="form-control"
              type="text"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <span id="brandErr" className="red"></span>
          </div>
        </div>

        <div className="row">
          <label className="col-sm-1" htmlFor="quantity">
            Quantity-
          </label>
          <div className="col-sm-4">
            <input
              className="form-control"
              type="text"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <span id="qntyErr" className="red"></span>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit Data
        </button>
      </form>
    </div>
  );
}
