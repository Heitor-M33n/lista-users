import { useState } from 'react'
import { useEffect } from 'react';
import './App.css';

import User from './components/User';

function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://dummyjson.com/users')
    .then((resposta) => resposta.json())
    .then((dados) => setUsers(dados.users));
  }, []);

  return (
    <div className='app'>
      <h1>Lista de usuários</h1>

      <hr className='app-divider'/>

      {users.map((user) => (
        <User image={user.image} firstName={user.firstName} lastName={user.lastName} age={user.age}
          gender={user.gender} email={user.email} phone={user.phone} companyName={user.company.name}
          companyTitle={user.company.title} adressCity={user.address.city} adressStateCode={user.address.stateCode} />
        ))}

    </div>
  )
}

export default App;