import { useState, useEffect } from 'react';
import Error from './Error';

  const Formulario = ({pacientes, setPacientes, paciente, setPaciente }) => {
   /*--Los hooks no se pueden registrar despues de un return Ni de forma condicional*/
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false)
                                     /*  useEffect */

  useEffect(() =>{
    if(Object.keys(paciente).length > 0 ) {

          setNombre(paciente.nombre)
          setPropietario(paciente.propietario)
          setEmail(paciente.email)
          setFecha(paciente.fecha)
          setSintomas(paciente.sintomas)
    }
    
  }, [paciente])
  /*      arrow function para generar Id unico en el registro de los pacientes*/
  const generarId = () =>{

    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return  random + fecha

  }/*      arrow function para generar Id unico en el registro de los pacientes*/
/*---------------------------------------------------------------------------*/
  
  const handleSubmit = (e) => {
      e.preventDefault();

      //Validacion del Formulario / espacios vacios

        if([nombre, propietario, email, fecha, sintomas].includes('') ){
          alert("hay al menos un campo vacio");

          setError(true)
          return;
        } 
          setError(false)

          //Obj de paciente

          const objetoPaciente = {
            nombre, 
            propietario, 
            email,
            fecha,
            sintomas,
            
          }

          if(paciente.id) {
           /*******************************/ //Editando registro*/
            objetoPaciente.id = paciente.id
            const pacientesAtualizados = pacientes.map((pacienteState) =>
              pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

              setPacientes(pacientesAtualizados)
              setPaciente({})

          }else{
            //Nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
          }

          //Reset form
          setNombre('')
          setPropietario('')
          setEmail('')
          setFecha('')
          setSintomas('')



      
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-9 shadow-lg rouded.lg ">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-purple-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error> <p> Todos los campos son obligatorios</p> </Error>}

        <div className="mb-5">
          <label
            htmlFor="Mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>

          {/* input mascota */}
          <input
            id="Mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} /* Evento onChange */
          ></input>
        </div>
        <div className="mb-5">
          <label
            htmlFor="Propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          {/* input propietario */}
          <input
            id="Propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          ></input>
        </div>

        <div className="mb-5">
          <label
            htmlFor="Email"
            className="block text-gray-700 uppercase
       font-bold"
          >
            Email
          </label>
          {/* input email */}
          <input
            id="Email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="mb-5">
          <label
            htmlFor="Alta"
            className="block text-gray-700 uppercase
       font-bold"
          >
            Alta
          </label>
          {/* input Alta*/}
          <input
            id="Alta"
            type="date"
            //placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          ></input>
        </div>
        {/* input sintomas*/}
        <div className="mb-5">
          <label
            htmlFor="Sintomas"
            className="block text-gray-700 uppercase
       font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="Sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-purple-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-purple-800 
    cursor-pointer transition-all"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
        />
      </form>
    </div>
  );
}

export default Formulario;