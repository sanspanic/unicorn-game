import Routes from "./Routes/Routes";
import "./App.css";
import GameContextProvider from "./Context/GameContextProvider";
import MoveContextProvider from "./Context/MoveContextProvider";

function App() {
  return (
    <div className="App p-5">
      <GameContextProvider>
        <MoveContextProvider>
          <Routes />
        </MoveContextProvider>
      </GameContextProvider>
    </div>
  );
}

export default App;
