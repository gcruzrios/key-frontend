
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Index from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/Error404";

const estaAutenticado = () => {
  const token = localStorage.getItem("Token");
  const estado = localStorage.getItem("Estado");

  if (token && estado) {
    return <Navigate to="/" replace />;
  } else {
    return false;
  }
};


function App() {
  return (
    <Router>
    <div>
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" exact element={<Login />} />

        <Route path="/index" exact element={estaAutenticado() ? <Index /> : <Navigate to="/" />} />

               
       

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
