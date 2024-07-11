import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import Send from "./Pages/Send"
import Sign from "./Pages/Sign"
import PrivateRoute from "./component/PrivateRoute"
function App() {

  return (
    <div >
    
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Sign></Sign>}></Route>
        <Route path="/Signup" element={<Sign></Sign>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
         <Route  path="/Send" element={
          <Send></Send>
          
          }></Route>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
