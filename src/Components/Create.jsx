import React, { useState } from "react";
import style from "../Style/Create.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Create() {
  //   const [id, setId] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const header = { "Access-Control-Allow-Origin": "*" };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://65e8067153d564627a8fabbf.mockapi.io/curdapi/StuDetails", {
        //   id: id,
        name: name,
        email: email,
        city: city,
        header,
      })
      .then((res) => {
        navigate("/read");
      });
  };

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "10px" }}>
        User Registration Form
      </h2>
      <div className="d-flex justify-content-end m-5"></div>
      <form className={style.content}>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            style={{ margin: "2px" }}
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            className="form-control "
            id="exampleInputPassword1"
          />
        </div>
        <div classNameName="mb-3">
          <label for="exampleInputEmail1" className="form-label  ">
            Email address
          </label>
          <input
            style={{ margin: "2px" }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            className="form-control  "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div classNameName="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            City
          </label>
          <input
            style={{ margin: "2px" }}
            onChange={(event) => {
              setCity(event.target.value);
            }}
            type="text"
            className="form-control  "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        {/* {name}{email}{id}{city} */}
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary px-4 my-3"
        >
          Add
        </button>
        <Link to="/read">
          <button className={"btn btn-success m-3"}>ShowUserData</button>
        </Link>
      </form>
    </>
  );
}

export default Create;
