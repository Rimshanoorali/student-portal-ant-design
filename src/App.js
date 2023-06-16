import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import View from "./components/student/View";
import Edit from "./components/student/Edit";
import './App.css';
import LoginForm from "./LoginForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
          <Route path="edit/:id" element={<Edit />}></Route>
          <Route path="login/:id" element={ <LoginForm/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}
export default App;