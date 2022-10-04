import { useState, useEffect } from 'react';
import Formulario from "./components/Formulario"
import Header from "./components/Headers"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes,setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente,setPaciente] = useState({});

  // Agregando LocalStorage
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  // Eliminando Paciente
  const eliminarPaciente = id =>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="App">
      <Header/>
      <div className="mt-5 d-flex gap-3">
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}/>
        
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}/>
      </div>
      
    </div>
  )
}

export default App
