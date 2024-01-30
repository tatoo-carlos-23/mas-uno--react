import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterIndex from "./core/router/RouterIndex";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterIndex />
      </BrowserRouter>
    </div>
  );
}

export default App;
