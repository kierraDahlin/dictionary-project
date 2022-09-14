import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container main-content">
        <header className="App-header">
          <h1>What's on your mind?</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            Coded by Kierra Dahlin -{" "}
            <a href="https://github.com/kierraDahlin/dictionary-project">
              Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
