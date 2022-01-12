import React, { useState } from "react";
import { updateMemorie } from "../../actions/memories";
import { useDispatch } from "react-redux";
export default function UpdateForm({uMemorie}) {
  const [memorie, setMemorie] = useState(uMemorie);
  console.log(uMemorie);
   const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateMemorie(memorie._id, memorie));
    alert("Updated successfully")
  };
  
  return (
    <>
      <div className="container">
        <center>
          <h1>
            <b>UPDATE YOUR MEMORY HERE</b>
          </h1>
        </center>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Give title to your memorie"
              required
              onChange={(e) =>
                setMemorie({ ...memorie, title: e.target.value })
              }
              value={memorie.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Moment</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Describe about your memorie"
              required
              onChange={(e) =>
                setMemorie({ ...memorie, moment: e.target.value })
              }
              value={memorie.moment}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Day</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your memorie day"
              required
              onChange={(e) => setMemorie({ ...memorie, day: e.target.value })}
              value={memorie.day}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Hashtag</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Hashtag your memorie"
              required
              onChange={(e) =>
                setMemorie({ ...memorie, hashtag: e.target.value })
              }
              value={memorie.hashtag}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              submitHandler(e);
            }}
          >
            Update new memory
          </button>
        </form>
      </div>
    </>
  );
}
