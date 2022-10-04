import React, { Fragment } from 'react';
import Paciente from "./Paciente";



const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {

    return ( 
        <div className='container  ms-5'>
            {pacientes && pacientes.length ? (
                <Fragment>
                    <h2 className='text-center fw-bold text-uppercase text-white'><em>Listado Pacientes</em></h2>
                    <p className='fw-bold text-center mt-3 text-white'>Informacion de tus <span className='text-info'>Pacientes</span></p>

                    {pacientes.map(paciente=>(
                        <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                    ))}
                </Fragment>

            ) : (
                <Fragment>
                    <h2 className='text-center fw-bold text-uppercase text-white'><em>Agrega Pacientes</em></h2>
                    <p className='fw-bold text-center mt-3 text-white'>Ve la informacion de tus <span className='text-info'>Pacientes</span></p>
                </Fragment>
                
            )}
                  
        </div>   
     );
}
 
export default ListadoPacientes;