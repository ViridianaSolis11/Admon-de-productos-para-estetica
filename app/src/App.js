import './App.css';
import {useState, useEffect} from "react";
import Axios from 'axios'

function App() {

  const [id_client, setIdClient] = useState('');
  const [total_cost, setTotal_Cost] = useState('');
  const [payed, setPayed] = useState('');

  //variables for update
  const [newId_Client, setNewId_Client] = useState(0);
  const [newTotal_Cost, setNewTotal_Cost] = useState(0);
  const [newPayed, setNewPayed] = useState("");

  const [ticketList, setTicketList] = useState([]);
  
  useEffect(() => {
    getTickets();
  }, []);

 // CRUD TICKETS

  const addTicket = () => {
    Axios.post('http://localhost:3001/createTickets', {
      id_client: id_client,
      total_cost: total_cost,
      payed: payed
    }).then(() => {
      getTickets();
    });
  };

  const getTickets = () => {
    Axios.get('http://localhost:3001/getTickets').then((response) => {
      setTicketList(response.data);
      console.log(response);
    });
  };

  const updateTickets = (id) => {
    Axios.put('http://localhost:3001/updateTickets', {
      id_client: id_client,
      total_cost: total_cost,
      payed: payed,
      idTicket: id
    }).then(() => {
      alert("actualizado!!");
      getTickets();
    });
  };

  const deleteTickets = (id) => {
    Axios.delete(`http://localhost:3001/deleteTickets/${id}`).then(()=> {
      getTickets();
    });
  };

  return (
    <div className="App">

      <div><h3>TICKETS</h3></div>
      <label>id Cliente:</label>
      <input type="text" onChange={(event) => {setIdClient(event.target.value);}}/>
      <label>Costo total:</label>
      <input type="text" onChange={(event) => {setTotal_Cost(event.target.value);}}/>
      <label>Pagado:</label>
      <input type="text" onChange={(event) => {setPayed(event.target.value);}}/>
      <button onClick={addTicket}> Añadir Ticket </button>

      <br></br><br></br><br></br>

      {ticketList.map((val, key) => {
        return <div>
              <div>
                <input type="text" placeholder={val.name} onChange={(event) => {setNewId_Client(event.target.value);}}/>
                <button onClick={ () => {updateTickets(val.idTicket);}}>Editar</button>
                <button  onClick={ () => {deleteTickets(val.idTicket);}}>Eliminar</button>
              </div>
            </div>
      })}

    </div>
  );
}

export default App;
