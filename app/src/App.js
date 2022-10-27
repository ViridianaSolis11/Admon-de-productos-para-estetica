import './App.css';
import {useState, useEffect} from "react";
import Axios from 'axios'

function App() {

  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [debt, setDebt] = useState("");

  //variables for update
  const [newName, setNewName] = useState("");
  const [newFirstname, setNewFirstname] = useState(0);
  const [newPhone, setNewPhone] = useState(0);
  const [newDebt, setNewDebt] = useState("");

  const [clientList, setClientList] = useState([]);
  
  useEffect(() => {
    getClients();
  }, []);

 // CRUD CLIENTS 

  const addClient = () => {
    Axios.post('http://localhost:3001/createClient', {
      name: name,
      firstname: firstname,
      phone: phone,
      debt: debt 
    }).then(() => {
      getClients();
    });
  };

  const getClients = () => {
    Axios.get('http://localhost:3001/getClients').then((response) => {
      setClientList(response.data);
      console.log(response);
    });
  };

  const updateClient = (id) => {
    Axios.put('http://localhost:3001/updateClient', {
      name: newName,
      firstname: newFirstname,
      phone: newPhone,
      debt: newDebt,
      idclient: id
    }).then(() => {
      alert("actualizado!!");
      getClients();
    });
  };

  const deleteClient = (id) => {
    Axios.delete(`http://localhost:3001/deleteClient/${id}`).then(()=> {
      getClients();
    });
  };

  return (
    <div className="App">

      <div><h3>CLIENTES</h3></div>
      <label>Nombre:</label>
      <input type="text" onChange={(event) => {setName(event.target.value);}}/>
      <label>Apellido:</label>
      <input type="text" onChange={(event) => {setFirstName(event.target.value);}}/>
      <label>Telefono:</label>
      <input type="text" onChange={(event) => {setPhone(event.target.value);}}/>
      <label>Deuda:</label>
      <input type="text" onChange={(event) => {setDebt(event.target.value);}}/>
      <button onClick={addClient}> Añadir Cliente </button>

      <br></br><br></br><br></br>

      {clientList.map((val, key) => {
        return <div>
              <div>
                <input type="text" placeholder={val.name} onChange={(event) => {setNewName(event.target.value);}}/>
                <input type="text" placeholder={val.firstName} onChange={(event) => {setNewFirstname(event.target.value);}}/>
                <input type="text" placeholder={val.phone} onChange={(event) => {setNewPhone(event.target.value);}}/>
                <input type="text" placeholder={val.debt} onChange={(event) => {setNewDebt(event.target.value);}}/>
                <button onClick={ () => {updateClient(val.idclient);}}>Editar</button>
                <button  onClick={ () => {deleteClient(val.idclient);}}>Eliminar</button>
              </div>
            </div>
      })}

    </div>
  );
}

export default App;
