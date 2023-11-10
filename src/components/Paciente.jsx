import { handler } from "tailwind-scrollbar-hide"

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  
    const {nombre, propietario, email, fecha, sintomas, id} = paciente 

    const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?');
    if(respuesta){
        eliminarPaciente(id)
    }
    }

    
  return (
    
    <div className="  mx-3 my-5  bg-white  px-5 py-5  rounded-xl   " >  
    
                <p className="font-bold mb-1  text-gray-700 uppercase">Nombre: {''}
                    <span className="font-nomal normal-case">{nombre}</span>

                </p>
                <p className="font-bold mb-1 text-gray-700 uppercase"> Propietario: {''}
                    <span className="font-nomal normal-case">{propietario} </span>

                </p>
                <p className="font-bold mb-1 text-gray-700 uppercase"> Email: {''}
                    <span className="font-nomal normal-case">{email}</span>

                </p>
                <p className="font-bold mb-1 text-gray-700 uppercase"> Fecha Alta: {''}
                    <span className="font-nomal normal-case"> {fecha}</span>

                </p>
                <p className="font-bold mb-1 text-gray-700 uppercase"> Sintomas : {''}
                    <span className="font-nomal normal-case"> {sintomas} </span>
                </p>
                
                <div className="flex justify-between mt-10 mb-4">
                    <button type="button"
                    className="py-2 px-10 bg-purple-600 hover:bg-purple-800 text-white
                    font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}  /*    on click en arrow */
                    > Editar</button>
                                   
                    <button type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white
                    font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                    > Eliminar</button>

                    
                    </div>
                    
                </div> 
            
  )
}

export default Paciente