import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavBar from './NavBar/NavBar';
import CartWidget from './CartWidget/CartWidget';
import ItemListContainer from './ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer  greeting="¡Bienvenidos a Godclothes!" />
    </div>
  );
}

export default App;
