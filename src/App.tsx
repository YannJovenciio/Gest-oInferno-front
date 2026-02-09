import "./App.css";
import { Layot } from "./Layot/Layot";
import { Router } from "./Router/Router";

function App() {
  return (
    <div className="App">
      <Layot>
        <Router />
      </Layot>
    </div>
  );
}

export default App;
