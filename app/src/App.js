import './App.css';
import {useState, useEffect} from "react";
import Axios from 'axios'

function App() {

  const [id_prod, setIdProd] = useState('');
  const [id_itemticket, setIdItemTicket] = useState('');
  const [quantity, setQuantity] = useState('');

  //variables for update
  const [newId_Prod, setNewIdProd] = useState(0);
  const [newId_Itemticket, setNewIdItemTicket] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);

  const [abonoList, setAbonoList] = useState([]);
  
  useEffect(() => {
    getItemTicket();
  }, []);

 // CRUD Item Ticket

  const addItemTicket = () => {
    Axios.post('http://localhost:3001/createItemTicket', {
      id_prod: id_prod,
      id_itemticket: it_itemticket,
      quantity: quantity
    }).then(() => {
      getItemTicket();
    });
  };

  const getItemTicket = () => {
    Axios.get('http://localhost:3001/getItemTicket').then((response) => {
      setItemTicketList(response.data);
      console.log(response);
    });
  };

  const updateItemTicket = (id) => {
    Axios.put('http://localhost:3001/updateItemTicket', {
      id_prod: id_prod,
      id_itemticket: it_itemticket,
      quantity: quantity,
      iditem_ticket: id
    }).then(() => {
      alert("actualizado!!");
      getItemTicket();
    });
  };

  const deleteItemTicket = (id) => {
    Axios.delete(`http://localhost:3001/deleteItemTicket/${id}`).then(()=> {
      getItemTicket();
    });
  };

  return (
    <div className="App">

      <div><h3>ITEM TICKET</h3></div>
      <label>id Producto:</label>
      <input type="text" onChange={(event) => {setIdProd(event.target.value);}}/>
      <label>id Item Ticket:</label>
      <input type="text" onChange={(event) => {setIdItemTicket(event.target.value);}}/>
      <label>Quantity:</label>
      <input type="text" onChange={(event) => {setQuantity(event.target.value);}}/>
      <button onClick={addItemTicket}> Añadir Item Ticket </button>

      <br></br><br></br><br></br>

      {ItemTicketList.map((val, key) => {
        return <div>
              <div>
                <input type="text" placeholder={val.name} onChange={(event) => {setNewIdItemTicket(event.target.value);}}/>
                <button onClick={ () => {updateItemTicket(val.idabonos);}}>Editar</button>
                <button onClick={ () => {deleteItemTicket(val.idabonos);}}>Eliminar</button>
              </div>
            </div>
      })}

    </div>
  );
}

export default App;
