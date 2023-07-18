import Header from "./components/header/Header";
import Main from "./components/main/main";
import Navbar from "./components/navbar/Navbar";
import data from "./helper/data"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Main data={data}/>
    </div>
  );
}

export default App;
