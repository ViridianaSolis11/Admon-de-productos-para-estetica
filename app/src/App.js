import './App.css';
import {useState, useEffect} from "react";
import Axios from 'axios'

function App() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  //variables for update
  const [newName, setNewName] = useState("");
  const [newStock, setNewStock] = useState(0);
  const [newPrice, setNewPrice] = useState(0);

  const [productList, setProductList] = useState([]);
  
  const addProduct = () => {
    Axios.post('http://localhost:3001/create', {
      name: name, 
      price: price, 
      stock: stock,
    }).then(() => {
      getProducts();
    });
  };

  const getProducts = () => {
    Axios.get('http://localhost:3001/getProducts').then((response) => {
      setProductList(response.data);
      console.log(response);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const updateProduct = (id) => {
    Axios.put('http://localhost:3001/updateProduct', {
      name: newName, 
      price: newPrice, 
      stock: newStock,
      idproducts: id,
    }).then(() => {
      alert("actualizado!!");
      getProducts();
    });
  };

  const deleteProduct = (id) => {
    Axios.delete(`http://localhost:3001/deleteProduct/${id}`).then(()=> {
      getProducts();
    });
  };

  return (

    <div className="App">
      <label>Nombre:</label>
      <input type="text" onChange={(event) => {setName(event.target.value);}}/>
      <label>Precio:</label>
      <input type="number" onChange={(event) => {setPrice(event.target.value);}}/>
      <label>Stock:</label>
      <input type="number" onChange={(event) => {setStock(event.target.value);}}/>
      <button onClick={addProduct}> Añadir producto </button>

      <br></br><br></br><br></br>

      {productList.map((val, key) => {
        return <div>
              <div>
                <input type="text" placeholder={val.name} onChange={(event) => {setNewName(event.target.value);}}/>
                <input type="number" placeholder={val.price} onChange={(event) => {setNewPrice(event.target.value);}}/>
                <input type="number" placeholder={val.stock} onChange={(event) => {setNewStock(event.target.value);}}/>  
                <button onClick={ () => {updateProduct(val.idproducts);}}>Editar</button>
                <button  onClick={ () => {deleteProduct(val.idproducts);}}>Eliminar</button>
              </div>
            </div>
      })}

    </div>
  );
}

export default App;
