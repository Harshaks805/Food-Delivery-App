import './App.css';
import About from './Component/About';
import Body from './Component/Body';
import Header from './Component/Header';
import {createBrowserRouter} from "react-router-dom"


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Body></Body>
    </div>
  );
}


const appRouter=createBrowserRouter([

  {
    element:<About></About>,
    path:"/"
  }
])



export default App;
