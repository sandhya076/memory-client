import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { getMemorie } from "../../actions/memories";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteMemorie } from "../../actions/memories";

export default function Home() {
  const dispatch = useDispatch();
  console.log(dispatch(getMemorie()));
  const memories = useSelector((state) => state.memorie);

  return (
    <>
      {memories.length === 0 ? (
        <>
          <h1>Loading...</h1>
          <center>
                <Link to="/InputForm">
                  <button type="button" class="btn btn-success">
                    <b>ADD MEOMRY</b>{" "}
                  </button>
                </Link>
              </center>
        </>
      ) : (
        <>
          <div>
            <section id="team" className="pb-5">
              <div className="container">
                <h5 className="section-title h1">YOUR MEMORIES</h5>
                <div className="row">
                  {/* Team member */}
                  {memories.map((memorie) => (
                    <>
                      <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="image-flip">
                          <div className="mainflip flip-0">
                            <div className="frontside">
                              <div className="card">
                                <div className="card-body text-center">
                                  <p>
                                    <img
                                      className=" img-fluid"
                                      src="https://images.indianexpress.com/2018/07/parenting-820-thinkstock1.jpg"
                                      alt="card image"
                                    />
                                  </p>
                                  <h2 className="card-title">
                                    {memorie.title}
                                  </h2>
                                  <h3 className="card-text">
                                    #{memorie.hashtag}
                                  </h3>
                                  <p className="card-text">{memorie.day}</p>
                                 
                                </div>
                              </div>
                            </div>
                            <div className="backside">
                              <div className="card">
                                <div className="card-body text-center mt-4">
                                  {/* <h4 className="card-title">
                                    {memorie.hashtag}
                                  </h4> */}
                                  <p className="card-text">{memorie.moment}</p>
                                </div>
                                
                                <button type="button" class="btn btn-danger" onClick={() => {dispatch(deleteMemorie(memorie._id))}}>
                                  <b>Delete</b>{" "}
                                </button>
                                <Link to={{pathname : `/UpdateForm1?${memorie._id},`}}><button type="button" class="btn btn-primary">Update</button></Link>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                  ;
                </div>
              </div>
              <center>
                <Link to="/InputForm">
                  <button type="button" class="btn btn-success">
                    <b>ADD MEOMRY</b>{" "}
                  </button>
                </Link>
              </center>
            </section>
          </div>
        </>
      )}
    </>
  );
}
