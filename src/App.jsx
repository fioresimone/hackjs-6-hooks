import "./App.css";
import Debounce from "./Components/Debounce";
import Fetch from "./Components/Fetch";
import Hover from "./Components/Hover";
import LocalStorage from "./Components/LocalStorage";
import Toggle from "./Components/Toggle";

function App() {
  return (
    <>
      <div>
        <Debounce />
      </div>
      <div>
        <LocalStorage />
      </div>
      <div>
        <Fetch />
      </div>

      <div>
        <Toggle />
        <Toggle />
        <Toggle />
        <Toggle />
      </div>
      <div>
        <Hover />
        {/*   <Hover />
        <Hover />
        <Hover />
        <Hover /> */}
      </div>
    </>
  );
}

export default App;
