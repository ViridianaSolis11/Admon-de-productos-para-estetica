import SideBar from '../SideBar';
import Item from './Item';
import {useState, useEffect} from "react";
import Axios from 'axios'

export default function Inventory(){

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

//  // CRUD CATEGORIES 

//   const addCategory = () => {
//     Axios.post('http://localhost:3001/createCategory', {
//       name: categoryName, 
//     }).then(() => {
//       getCategories();
//     });
//   };

  const getCategories = () => {
    Axios.get('http://localhost:3001/getCategories').then((response) => {
      setCategoryList(response.data);
      console.log(response);
    });
  };

//   const updateCategory = (id) => {
//     Axios.put('http://localhost:3001/updateCategory', {
//       name: newCategoryName, 
//       idcategory: id,
//     }).then(() => {
//       alert("actualizado!!");
//       getCategories();
//     });
//   };

//   const deleteCategory = (id) => {
//     Axios.delete(`http://localhost:3001/deleteCategory/${id}`).then(()=> {
//       getCategories();
//     });
//   };

// // CRUD BRANDS

//   const addBrand = () => {
//     Axios.post('http://localhost:3001/createBrand', {
//       name: brandName, 
//     }).then(() => {
//       getBrands();
//     });
//   };

  const getBrands = () => {
    Axios.get('http://localhost:3001/getBrands').then((response) => {
      setBrandList(response.data);
      console.log(response);
    });
  };

//   const updateBrand = (id) => {
//     Axios.put('http://localhost:3001/updateBrand', {
//       name: newBrandName, 
//       idbrand: id,
//     }).then(() => {
//       alert("actualizado!!");
//       getBrands();
//     });
//   };

//   const deleteBrand = (id) => {
//     Axios.delete(`http://localhost:3001/deleteBrand/${id}`).then(()=> {
//       getBrands();
//     });
//   };

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
        <div class="min-h-screen bg-gray-100">
            <div class = "place-content-start flex flex-rows gap-10">
                <SideBar />
                <div class = "h-fit items-start text-old-lavender flex flex-col w-11/12 my-5 ">
                    <div class="flex flex-row ml-12 self-center w-10/12 my-5 ">
                        <div class = "m-3 h-fit w-10 px-2 self-start border-solid flex flex-auto"> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            <h1 class="cursor-pointer text-3xl font-bold">Inventario</h1>
                        </div>
                        <div class = "mr-28 my-3 h-fit w-fit self-end border-solid flex">
                            <form action="" class="relative mx-auto w-max">
                                <input type="search" 
                                    class="peer cursor-pointer relative z-10 h-10 w-10 rounded-full border border-old-lavender bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-persian-pink focus:pl-16 focus:pr-4" />
                                <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-old-lavender stroke-old-lavender px-3.5 peer-focus:border-persian-pink peer-focus:stroke-persian-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </form>
                        </div>
                    </div>
                    
                    <div class="flex flex-row ml-52 pl-3 mb-5 gap-4 self-start w-4/12">
                        <select id="filter" class="bg-gray-50 border-2 border-old-lavender text-old-lavender text-sm  focus:ring-old-lavender focus:border-old-lavender block w-full p-2.5">
                            <option selected>Seleccione un filtro</option>
                            <option value="1">Filtro 1</option>
                            <option value="2">Filtro 2</option>
                            <option value="3">Filtro 3 </option>
                        </select>
                        <select id="order" class="bg-gray-50 border-2 border-old-lavender text-old-lavender text-sm  focus:ring-old-lavender focus:border-old-lavender block w-full p-2.5">
                            <option selected>Ordenar Por...</option>
                            <option value="1">Orden 1</option>
                            <option value="2">Orden 2</option>
                            <option value="3">Orden 3 </option>
                        </select>
                    </div>

                    <div class="flex flex-row my-2 gap-3 self-center w-9/12">
                            <input id="floating_name" class="border-2 border-old-lavender text-old-lavender text-sm  focus:ring-old-lavender focus:border-old-lavender block w-80 p-2.5" type="text" placeholder="Nombre del Producto"/>
                            <select id="category" class="border-2 border-old-lavender text-old-lavender text-sm  focus:ring-old-lavender focus:border-old-lavender block w-44 p-2.5">
                                <option selected>Categoria</option>
                                <option value="1">Categoria 1</option>
                                <option value="2">Categoria 2</option>
                                <option value="3">Categoria 3 </option>
                            </select>
                            <select id="brand" class="border-2 border-old-lavender text-old-lavender text-sm  focus:ring-old-lavender focus:border-old-lavender block w-44 p-2.5">
                                <option selected>Linea</option>
                                <option value="1">Linea 1</option>
                                <option value="2">Linea 2</option>
                                <option value="3">Linea 3 </option>
                            </select>
                            <input class="border-2 border-old-lavender text-old-lavender text-sm  focus:ring-old-lavender focus:border-old-lavender block w-44 p-2.5" type="number" placeholder="$Precio"/>
                            <input class="border-2 border-old-lavender text-old-lavender text-sm  focus:ring-old-lavender focus:border-old-lavender block w-44 p-2.5" type="number" placeholder="Cantidad"/>
                            <button type="submit" class="border-2 border-old-lavender text-old-lavender bg-white hover:bg-old-lavender hover:text-pale-pink focus:ring-4 focus:ring-pale-pink font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                    Aceptar
                                </svg>
                            </button>
                    </div>

                    <div class = "self-center flex flex-col my-5 w-9/12">
                        {productList.map((val, key) => {
                            <h1>{val.name}</h1>
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}