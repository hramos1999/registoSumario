import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import  Sumario from './components/Sumarios'
import { useState } from "react";
import AddSum from './components/AddSum'

function App() {
  const[showAddSumario,setShowAddSumario] = useState(false)
  const [sumarios, setSumarios] = useState([
    {
      id: 1,
      disciplina: 3,
      titulo: 'introduçao a programação',
      aula: 38,
      validate: true,
      data: '03/12/2021',
      descriçao: 'Estrutura de dados',
    },
    {
      id: 2,
      disciplina: 8,
      titulo: 'Intergação e derivadas',
      aula: 4,
      validate: true,
      data: '07/12/2021',
      descriçao: 'Integral Tripla',
    },
    {
      id: 3,
      disciplina: 1,
      titulo: 'Transformada de Laplace',
      aula: 1,
      validate: true,
      data: '6/12/2021',
      descriçao: 'Técnicas para o cálculo das transformadas de Laplace',
    },
    {
      id: 4,
      disciplina: 4,
      titulo: 'Transformadas de Fourier',
      aula: 23,
      validate: false,
      data: '6/4/2021',
      descriçao: 'Técnicas para o cálculo das transformadas Z',
    },
  ])

  //Criar Sumario
  const addSumario = (sumario) =>{
    const id = Math.floor(Math.random()*10000+1)
    const newSumario = {id,...sumario}
    setSumarios([...sumarios,newSumario])
  }

  //Abrir Sumario
  //Todo later
  //for now just console log the id of the item
  const openSumario = (id) =>{
    console.log('open',id)
  }

  //Deletar Sumario

  return (
    <Router>
      <div className="container">
        <Header onAdd={()=>setShowAddSumario(!showAddSumario)} showSumario={showAddSumario}/>
        {showAddSumario && <AddSum onAdd={addSumario}/>}
        <Route path='/' exact render={(props)=>(
            <>
            {sumarios.length > 0 ? <Sumario sumarios={sumarios}
              onOpen={openSumario} /> : 'Sem sumarios Registados'}
            </>
        
        )}/>  
      </div>
    </Router>

    
  );
}

export default App;
