import "./App.css";
import { Link, Route, Switch } from "wouter";
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
    <>
      <Switch>
        <Route path="/">
          <Link href="/about">
            <a>About</a>
          </Link>
          <Home />
        </Route>
        <Route path="/about">
          <Link href="/">
            <a>Home</a>
          </Link>
          <About />
        </Route>
      </Switch>
    </>
  );
}

export default App;
