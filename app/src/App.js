import './App.css';
import Inventory from './views/Inventory';

function App() {

  return (
    <div className="App">

      <Inventory />

      {/* <div><h3>CATEGORIAS</h3></div>
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
      })} */}

      {/* <div><h3>PRODUCTOS</h3></div>

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

      <br></br><br></br><br></br> */}

      {/* {productList.map((val, key) => {
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
      })} */}

    </div>
  );
}

export default App;
