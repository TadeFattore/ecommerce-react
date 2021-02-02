import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {NavBar} from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer}from './components/ItemDetailContainer/ItemDetailContainer';
import Category from './components/Categories/CategoryContainer'
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <div className="home">
        <Switch>
            <Route exact path="/item/:itemId">
                <ItemDetailContainer />
            </Route>
            <Route exact path="/category/:categoryId">
                <ItemDetailContainer />
            </Route>
            <Route exact path="/categories">
                <Category />
            </Route>
            <Route exact path="/cart">
              <CartContainer />
            </Route>
            <Route exact path="/">
                <ItemListContainer initial={1} stock={5} />
            </Route>
        </Switch>
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
