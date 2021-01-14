import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {Home} from './components/Home/Home'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer initial={1} stock={5} />
      <Home/> 
    </div>
  );
}

export default App;
