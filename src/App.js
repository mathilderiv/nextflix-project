import "./App.css";

import Header from "./components/Header";
import Section from "./components/Section";
import Category from "./components/Category";
import pictures from "./listOfFilms.json";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="section">
        <Section />

        <div className="category">
          <Category />
        </div>
      </div>
    </div>
  );
}

export default App;
