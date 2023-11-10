import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
 
  return (
    
    <div className="md:w-1/2 lg:w-3/5   ">
      <h2 className="font-black text-3xl text-center ">Listado De Pacientes</h2>
  <p className="text-xl mt-5 mb-7 text-center ">
        Administra Sus {''}
          <span className="text-purple-600 font-bold ">Pacientes y Citas</span>
                </p>

      <div className= " scbar md:h-screen overflow-y-scroll rounded-lg py-10 px-5 mt-20 mb-20 " >
  
          
     
        
        {pacientes && pacientes.length ? (
            <>
                
        
        
        { pacientes.map( paciente => (
          
  
               <Paciente
                key={paciente.id}
                 paciente={paciente} 
                 setPaciente ={setPaciente}
                 eliminarPaciente ={eliminarPaciente}
                 />
        
           ) ) }
      </>
      ) : (
        <>
            <h2 className="font-black text-3xl text-center mt-1">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10  text-center ">
              Comienza agregando pacientes {""}
            <span className="text-purple-600 font-bold  "> Pacientes y Citas</span>
            </p>

        </>
      ) }</div>
</div> 
  )
}

export default ListadoPacientes;
