import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Changepass from "./pages/Changepass/Changepass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./components/Protected";
import ComplaintList from "./pages/ComplaintList/ComplaintList";
import BasicTable from "./components/table/Table";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route exact path="dashboard" element={<Dashboard />}></Route>
            <Route exact path="login" element={<Login />}></Route>
            <Route exact path="changepass" element={<Changepass />}></Route>
            <Route exact path="list" element={<ComplaintList />}></Route>
            <Route exact path="table" element={<BasicTable />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
