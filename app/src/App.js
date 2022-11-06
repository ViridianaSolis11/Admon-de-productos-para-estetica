import './App.css';
import {useState, useEffect} from "react";
import Axios from 'axios'

function App() {

  const [id_ticket, setIdTicket] = useState('');
  const [amount_payed, setAmountPayed] = useState('');

  //variables for update
  const [newId_Ticket, setNewId_Ticket] = useState(0);
  const [NewAmount_Payed, setNewAmount_Payed] = useState(0);

  const [abonoList, setAbonoList] = useState([]);
  
  useEffect(() => {
    getAbonos();
  }, []);

 // CRUD ABONOS

  const addAbono = () => {
    Axios.post('http://localhost:3001/createAbonos', {
      id_ticket: id_ticket,
      amount_payed: amount_payed
    }).then(() => {
      getAbonos();
    });
  };

  const getAbonos = () => {
    Axios.get('http://localhost:3001/getAbonos').then((response) => {
      setAbonoList(response.data);
      console.log(response);
    });
  };

  const updateAbonos = (id) => {
    Axios.put('http://localhost:3001/updateAbonos', {
      id_ticket: id_ticket,
      amount_payed: amount_payed,
      idabonos: id
    }).then(() => {
      alert("actualizado!!");
      getAbonos();
    });
  };

  const deleteAbonos = (id) => {
    Axios.delete(`http://localhost:3001/deleteAbonos/${id}`).then(()=> {
      getAbonos();
    });
  };

  return (
    <div className="App">

      <div><h3>ABONOS</h3></div>
      <label>id Ticket:</label>
      <input type="text" onChange={(event) => {setIdTicket(event.target.value);}}/>
      <label>Cantidad pagada:</label>
      <input type="text" onChange={(event) => {setAmountPayed(event.target.value);}}/>
      <button onClick={addAbono}> Añadir Abono </button>

      <br></br><br></br><br></br>

      {abonoList.map((val, key) => {
        return <div>
              <div>
                <input type="text" placeholder={val.name} onChange={(event) => {setNewId_Ticket(event.target.value);}}/>
                <button onClick={ () => {updateAbonos(val.idabonos);}}>Editar</button>
                <button onClick={ () => {deleteAbonos(val.idabonos);}}>Eliminar</button>
              </div>
            </div>
      })}

    </div>
  );
}

export default App;
