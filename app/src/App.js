import './App.css';
import {useState, useEffect} from "react";
import Axios from 'axios'

function App() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const [productList, setProductList] = useState([]);
  
  const addProduct = () => {
    Axios.post('http://localhost:3001/create', {
      name: name, 
      price: price, 
      stock: stock,
    }).then(() => {
      console.log('successfully added');
    });
  };

  const getProducts = () => {
    Axios.get('http://localhost:3001/getProducts').then((response) => {
      setProductList(response.data);
    });
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <div className="App">
      <label>Nombre:</label>
      <input type="text" onChange={(event) => {setName(event.target.value);}}/>
      <label>Precio:</label>
      <input type="number" onChange={(event) => {setPrice(event.target.value);}}/>
      <label>Stock:</label>
      <input type="number" onChange={(event) => {setStock(event.target.value);}}/>
      <button onClick={addProduct}> Añadir producto </button>

      <div>
        {productList.map((val, key) => {
        return <div> {val.name} {val.precio} {val.stock} </div>
        })}
      </div>

    </div>
  );
}

export default App;
