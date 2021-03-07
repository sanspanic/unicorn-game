import Routes from "./Routes/Routes";
import "./App.css";
import GameContextProvider from "./Context/GameContextProvider";

function App() {
  return (
    <div className="App p-5">
      <GameContextProvider>
        <Routes />
      </GameContextProvider>
    </div>
  );
}

export default App;
