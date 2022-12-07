import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const [nam, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/getOne/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        const { name, brand, quantity } = resp.data;
        setName(name);
        setBrand(brand);
        setQuantity(quantity);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [id]);

  const submit = (e) => {
    e.preventDefault();
    console.log(nam, brand, quantity);
    const data = {
      name: nam,
      brand: brand,
      quantity: quantity,
    };
    axios
      .put(`http://localhost:8080/api/update/${id}`, data)
      .then((resp) => {
        console.log("resp", resp);
        navigate("/");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="container text-center">
      <h4>Update Page- {id}</h4>
      <form onSubmit={(e) => submit(e)}>
        <div className="row mb-3">
          <label className="col-sm-1" htmlFor="nam">
            Name-
          </label>
          <div className="col-sm-6">
            <input
              className="form-control"
              type="text"
              name="nam"
              value={nam}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-1" htmlFor="brand">
            Brand-
          </label>
          <div className="col-sm-6">
            <input
              className="form-control"
              type="text"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <label className="col-sm-1" htmlFor="quantity">
            Quantity-
          </label>
          <div className="col-sm-6">
            <input
              className="form-control"
              type="text"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit Data
        </button>
      </form>
    </div>
  );
}
