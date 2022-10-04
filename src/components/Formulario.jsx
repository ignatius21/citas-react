import  { useState, useEffect, useLayoutEffect } from "react";  
import Error from "./Error";



const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {
    const [nombre,setNombre] = useState('');
    const [propietario,setPropietario] = useState('');
    const [email,setEmail] = useState('');
    const [fecha,setFecha] = useState('');
    const [sintomas,setSintomas] = useState('');
    const [error,setError] = useState(false);

    // funcion para enviar los datos de los pacientes al formulario para edicion
    useEffect(()=>{
       if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
       }
    },[paciente]);

    // Generamos un id
    const generarId = ()=>{
      const random =  Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36);
      return fecha + random;
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        

        // validamos el formulario
        if([nombre,propietario,email,fecha,sintomas].includes('')){
            setError(true)
            return;
        }
        setError(false)

        // Objeto Pacientes
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }
        // Edicion de paciente
        if(paciente.id){
            // editando el registro
            objetoPaciente.id = paciente.id
            
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados);
            setPaciente({});
        }else{
            // nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes,objetoPaciente]);
        }
        
        // Reiniciamos el formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

        
    }
    
    return ( 
        <div className='container-fluid ms-3'>

            <h2 className='text-center fw-bold text-uppercase text-white'><em>Seguimiento Pacientes</em></h2>
            <p className='fw-bold text-center mt-3 text-white'>Añadir y <span className='text-info'>administrar Pacientes</span></p>


            <form onSubmit={handleSubmit} className='text-bg-light p-5 rounded-3 shadow mb-3'>
                {error && <Error><p className="alert alert-danger fw-bold">Todos los campos son obligatorios</p></Error>}
                

                <div className="mb-4">
                    <label htmlFor="mascota" className="block"><span className='fw-bold text-uppercase'><em>Nombre Mascota</em></span></label>
                    <input type="text" className="form-control" id="mascota" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="propietario" className="block"><span className='fw-bold text-uppercase'><em>Propietario</em></span></label>
                    <input type="text" className="form-control" id="propietario" value={propietario} onChange={(e)=> setPropietario(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block"><span className='fw-bold text-uppercase'><em>Email</em></span></label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block"><span className='fw-bold text-uppercase'><em>Alta</em></span></label>
                    <input type="date" className="form-control" id="alta" value={fecha} onChange={(e)=> setFecha(e.target.value)}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block"><span className='fw-bold text-uppercase'><em>Sintomas</em></span></label>
                    <textarea className="form-control" id="sintomas" placeholder='Describe los sintomas' value={sintomas} onChange={(e)=> setSintomas(e.target.value)}/>
                </div>
                {/* <div className="d-grid  mx-auto pt-4">
                    <button className="btn btn-primary" type="submit" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}><span className='fw-bold fs-5 cursor-pointer text-uppercase'>agregar paciente</span></button>
                </div>    */}
                <div className="d-flex">
                    <input type="submit" className="btn btn-primary text-uppercase fs-5 mx-auto fw-bold" value={paciente.id ? 'Guardar cambios' : 'Agregar Paciente'} />
                </div>
                
            </form>
        </div>
        
     );
}
 
export default Formulario;