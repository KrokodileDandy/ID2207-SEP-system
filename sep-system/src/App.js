import './App.css';
import { BrowserRouter } from "react-router-dom";
import SepContainer from "./components/SepContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SepContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
