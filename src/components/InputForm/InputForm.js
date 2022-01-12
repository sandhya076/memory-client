import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {createMemorie} from "../../actions/memories";
export default function InputForm() {
  const[memorie ,setMemorie] = useState({
    title: "",
    moment:"",
    day :"",
    hashtag: "",
  });
  const dispatch = useDispatch();
  const submitHandler = (e) =>{
    e.preventDefault();
  
  if(
    memorie.title !== ""&&
    memorie.moment !== ""&&
    memorie.day !== ""&&
    memorie.hashtag !==""
  ){
    dispatch(createMemorie(memorie));
    alert("Your Memorie added SUccessfully😊");
    setMemorie({title:"",moment:"",day:"",hashtag:"" });
  }
  else{
    alert("Enter Your Memories!!!!!")
  }
  };

  return (
    <>
    <div className="container">
        <center><h1><b>ADD YOUR MEMORY HERE</b></h1></center>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Give title to your memorie"
            required
            onChange={(e) => setMemorie({...memorie,title:e.target.value})}
            value={memorie.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Moment</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            minLength={100}
            placeholder="Describe about your memorie"
            required
            onChange={(e) => setMemorie({...memorie,moment:e.target.value})}
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
            onChange={(e) => setMemorie({...memorie,day:e.target.value})}
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
            onChange={(e) => setMemorie({...memorie,hashtag:e.target.value})}
            value={memorie.hashtag}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={(e) => {submitHandler(e)}}>
          Add new memory
        </button>
      </form>
    </div>
    </>
  );
  }
