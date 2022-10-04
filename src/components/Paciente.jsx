import Swal from 'sweetalert2';
const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
    
    const {nombre,propietario,email,fecha,sintomas,id} = paciente;

    const handleEliminar = () =>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: true
          })
          swalWithBootstrapButtons.fire({
            title: 'Desea Eliminar al Paciente?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true,
            allowOutsideClick: false

          }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id)
                swalWithBootstrapButtons.fire({
                position: 'top-center',
                icon: 'warning',
                title: 'Paciente Eliminado',
                showConfirmButton: false,
                timer: 1000
              }
                
              )
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Paciente Guardado',
                showConfirmButton: false,
                timer: 1000,
                allowOutsideClick: false
              }
                
                
              )
            }
          })
    }

    return ( 
        <div className='text-bg-light p-2 rounded-3 shadow mb-3'>
                <p className='text-uppercase fw-normal'>Nombre: <span className='fw-bold text-capitalize'>{nombre}</span></p>
                <p className='text-uppercase fw-normal'>Propietario: <span className='fw-bold text-capitalize'>{propietario}</span></p>
                <p className='text-uppercase fw-normal'>Contacto: <span className='fw-bold text-lowercase'>{email}</span></p>
                <p className='text-uppercase fw-normal'>Alta: <span className="fw-bold">{fecha}</span></p>
                <p className='text-uppercase fw-normal'>Sintomas: <span className='fw-bold text-capitalize'>{sintomas}</span></p>
                <div className='d-flex m-1'>
                    <button type="button" className="btn btn-primary m-1 text-uppercase" onClick={()=>setPaciente(paciente)}>Editar</button>
                    <button type="button" className="btn btn-danger m-1 text-uppercase" onClick={handleEliminar}>Eliminar</button>
                </div>
                

        </div>
     );
}
 
export default Paciente;