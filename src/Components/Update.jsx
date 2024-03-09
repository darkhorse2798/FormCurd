import React, { useEffect, useState } from "react";
import style from "../Style/Create.module.css";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";
function Update() {
  const navigate = useNavigate();
 const[id,setId]= useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
     setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setCity(localStorage.getItem("city"));
  }, []);

  const handleUpdate=(event)=> {
    event.preventDefault();
    axios
      .put(
        `https://65e8067153d564627a8fabbf.mockapi.io/curdapi/StuDetails/${id}`,
        {
          name: name,
          email: email,
          city: city,
        }
      )
      .then(() => {
        navigate("/read");
      }).catch(error => {
        console.error("Error updating data:", error);
      });
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Update</h2>

      <form className={` ${style.content}`}>
        <div className="mb-3 align-items-center">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
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
            value={email}
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
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
            type="text"
            className="form-control  "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          onClick={handleUpdate}
          style={{ margin: "10px" }}
          className="btn btn-primary"
        >Update
        </button>
        <Link to="/read">
          <button className={"btn btn-success m-3"}>Back</button>
        </Link>
      </form>
    </div>
  );
}

export default Update;
