import './App.css';
import {useState, useEffect} from "react";
import Axios from 'axios'

function App() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState(0);
  const [brand, setBrand] = useState(0);

  const [categoryName, setCategoryName] = useState("");
  const [brandName, setBrandName] = useState("");

  //variables for update
  const [newName, setNewName] = useState("");
  const [newStock, setNewStock] = useState(0);
  const [newPrice, setNewPrice] = useState(0);

  const [newCategoryName, setNewCategoryName] = useState("");
  const [newBrandName, setNewBrandName] = useState("");

  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  
  useEffect(() => {
    getProducts();
    getCategories();
    getBrands();
  }, []);

 // CRUD CATEGORIES 

  const addCategory = () => {
    Axios.post('http://localhost:3001/createCategory', {
      name: categoryName, 
    }).then(() => {
      getCategories();
    });
  };

  const getCategories = () => {
    Axios.get('http://localhost:3001/getCategories').then((response) => {
      setCategoryList(response.data);
      console.log(response);
    });
  };

  const updateCategory = (id) => {
    Axios.put('http://localhost:3001/updateCategory', {
      name: newCategoryName, 
      idcategory: id,
    }).then(() => {
      alert("actualizado!!");
      getCategories();
    });
  };

  const deleteCategory = (id) => {
    Axios.delete(`http://localhost:3001/deleteCategory/${id}`).then(()=> {
      getCategories();
    });
  };

// CRUD BRANDS

  const addBrand = () => {
    Axios.post('http://localhost:3001/createBrand', {
      name: brandName, 
    }).then(() => {
      getBrands();
    });
  };

  const getBrands = () => {
    Axios.get('http://localhost:3001/getBrands').then((response) => {
      setBrandList(response.data);
      console.log(response);
    });
  };

  const updateBrand = (id) => {
    Axios.put('http://localhost:3001/updateBrand', {
      name: newBrandName, 
      idbrand: id,
    }).then(() => {
      alert("actualizado!!");
      getBrands();
    });
  };

  const deleteBrand = (id) => {
    Axios.delete(`http://localhost:3001/deleteBrand/${id}`).then(()=> {
      getBrands();
    });
  };

// CRUD PRODUCTS

  const addProduct = () => {
    Axios.post('http://localhost:3001/createProduct', {
      name: name, 
      price: price, 
      stock: stock,
      category: category,
      brand: brand,
    }).then(() => {
      getProducts();
    });
  };

  const getProducts = () => {
    Axios.get('http://localhost:3001/getProducts').then((response) => {
      setProductList(response.data);
      getCategories();
      console.log(response);
    });
  };

  const updateProduct = (id) => {
    Axios.put('http://localhost:3001/updateProduct', {
      name: newName, 
      price: newPrice, 
      stock: newStock,
      category: category,
      brand: brand,
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

      <div><h3>CATEGORIAS</h3></div>
      <label>Nombre:</label>
      <input type="text" onChange={(event) => {setCategoryName(event.target.value);}}/>
      <button onClick={addCategory}> Añadir Categoria </button>

      <br></br><br></br><br></br>

      {categoryList.map((val, key) => {
        return <div>
              <div>
                <input type="text" placeholder={val.name} onChange={(event) => {setNewCategoryName(event.target.value);}}/>
                <button onClick={ () => {updateCategory(val.idcategory);}}>Editar</button>
                <button  onClick={ () => {deleteCategory(val.idcategory);}}>Eliminar</button>
              </div>
            </div>
      })}

      <div><h3>LINEAS</h3></div>

      <label>Nombre:</label>
      <input type="text" onChange={(event) => {setBrandName(event.target.value);}}/>
      <button onClick={addBrand}> Añadir Linea </button>

      <br></br><br></br><br></br>

      {brandList.map((val, key) => {
        return <div>
              <div>
                <input type="text" placeholder={val.name} onChange={(event) => {setNewBrandName(event.target.value);}}/>
                <button onClick={ () => {updateBrand(val.idbrand);}}>Editar</button>
                <button  onClick={ () => {deleteBrand(val.idbrand);}}>Eliminar</button>
              </div>
            </div>
      })}

      <div><h3>PRODUCTOS</h3></div>

      <label>Nombre:</label>
      <input type="text" onChange={(event) => {setName(event.target.value);}}/>
      <label>Precio:</label>
      <input type="number" onChange={(event) => {setPrice(event.target.value);}}/>
      <label>Stock:</label>
      <input type="number" onChange={(event) => {setStock(event.target.value);}}/>
      <label>Categoria:</label>
      <select  onChange={(event) => {setCategory(event.target.value);}}>
        {categoryList.map((val, key) => {
          return <option value={val.idcategory}>{val.name}</option>
        })}
      </select>
      <label>Linea:</label>
      <select onChange={(event) => {setBrand(event.target.value);}}>
        {brandList.map((val, key) => {
          return <option value={val.idbrand}>{val.name}</option>
        })}
      </select>
      <button onClick={addProduct}> Añadir producto </button>

      <br></br><br></br><br></br>

      {productList.map((val, key) => {
        return <div>
              <div>
                <input type="text" placeholder={val.name} onChange={(event) => {setNewName(event.target.value);}}/>
                <input type="number" placeholder={val.price} onChange={(event) => {setNewPrice(event.target.value);}}/>
                <input type="number" placeholder={val.stock} onChange={(event) => {setNewStock(event.target.value);}}/>
                <label>Categoria:</label>
                <select  value={val.idcategory} onChange={(event) => {setCategory(event.target.value);}}>
                  {categoryList.map((val, key) => {
                    return <option value={val.idcategory}>{val.name}</option>
                  })}
                </select>
                <label>Linea:</label>
                <select value={val.idbrand} onChange={(event) => {setBrand(event.target.value);}}>
                  {brandList.map((val, key) => {
                    return <option value={val.idbrand}>{val.name}</option>
                  })}
                </select>  
                <button onClick={ () => {updateProduct(val.idproducts);}}>Editar</button>
                <button  onClick={ () => {deleteProduct(val.idproducts);}}>Eliminar</button>
              </div>
            </div>
      })}

    </div>
  );
}

export default App;
