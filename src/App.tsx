import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Contact from "./components/Contact/Contact";

const Home = () => <div>Home Page</div>;
const Map = () => <div>Map Page</div>;

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">Header</header>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="map" element={<Map />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
