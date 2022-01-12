import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import InputForms from "./components/InputForm/InputForm";
import Home from "./components/Home/Home";
import UpdateForm from "./components/UpdateForm/UpdateForm1";
import { useDispatch } from "react-redux";
import { getMemorie } from "./actions/memories";
import UpdateForm1 from "./components/UpdateForm/UpdateForm1";

 function App() {
   const dispatch = useDispatch();
   dispatch(getMemorie());
  return (
<Router>
  <div>
    <Routes>
      <Route path= "/" exact element = {<Home/>}/>
      <Route path= "/InputForm" exact element ={<InputForms/>}/>
      <Route path="/UpdateForm1" exact element = {<UpdateForm1/>}/>
      </Routes>
      </div>

</Router>
  )
}
 export default App;
