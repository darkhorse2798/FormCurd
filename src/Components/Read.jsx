import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://65e8067153d564627a8fabbf.mockapi.io/curdapi/StuDetails")
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getData();
  useEffect(() => {
    getData();
  }, []);
  function handleDelete(id) {
    axios
      .delete(`https://65e8067153d564627a8fabbf.mockapi.io/curdapi/StuDetails/${id}`)
      .then(() => {
        getData();
      }).catch((error) => {
        console.log(error);
      });
  }
  function setToLocalSto(id,name,email,city){
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("city",city);

  }
  return (
    <div>
        <div className="d-flex justify-content-between m-3 ">
        <h2>Read Operation</h2>
      <Link to="/">
          <button className={"btn btn-secondary mx-5 px-4"}>Create</button>
        </Link>
        </div>
   
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        {data.map((eachData,key) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{key+1}</td>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.city}</td>
                  <td>
                    <Link to="/update">
                    <button
                    onClick={()=>{setToLocalSto(eachData.id,eachData.name,eachData.email,eachData.city)}}
                      style={{ margin: "5px" }}
                      type="button"
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                    </Link>
                  
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(eachData.id);
                      }}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
            
                  </td>
                </tr>
              </tbody>
        
            </>
          );
        })}
      </table>
     
    </div>
  );
}

export default Read;
