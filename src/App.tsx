import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Button } from "antd";

const Home = () => (
  <div>
    <h2>Home</h2>
    <Button type="primary">Primary button</Button>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <Button>Default button</Button>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
