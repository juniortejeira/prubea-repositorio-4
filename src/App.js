import React, { useState } from "react";
import TareaForm from "./componentes/TareaForm";
import Tarea from "./componentes/Tarea";
import "./App.css";

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  const[tareasCompletadas, setTareasCompletadas] = useState([])

  const nuevaTarea = (tarea) => {//importamos de TareaForm
    setListaTareas([tarea, ...listaTareas]);//agregale todos los datos que escribamos en tarea y agregalos a los que ya tenia listaTareas
  };

  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);//es para que muestre todo menos el id que precionamos
    setListaTareas(listaFiltrada);//estamos igualando setListaTareas = listaFiltrada para actualizar el useState
  };


  const actualizarTarea = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) => {//filtrar cuando se edita un elemento
      if (index === id) {
        e = tarea;
        console.log(e)//mostramos en consola lo que editamos
      }

      return e;
    });

    setListaTareas(listaActualizada);
  };


  const completado =(tareaId) =>{
   
    // const copiaDeTareas = [...listaTareas]
    // {name: inputText , complete : false}
    // copiaDeTareas[tareaId].completado = true
    // setListaTareas(copiaDeTareas)


    const accionTerminada = listaTareas[tareaId]

    // const accionTerminada = listaTareas.find(e => e === tareaId);
    
    setTareasCompletadas([accionTerminada, ...tareasCompletadas]);
    

    const listaIncompleta = listaTareas.filter((tarea, indice) => indice !== tareaId);//probando
    setListaTareas(listaIncompleta); 
  }

  console.log(tareasCompletadas)
  console.log(tareasCompletadas)

  
  

  return (
    <div className="App">
      <TareaForm nuevaTarea={nuevaTarea} /> {/*retorname setListaTareas(nuevaTarea), es el (input)*/}

      <div className="lista">
        {listaTareas.map((e, index) => (
          <Tarea
            tarea={e}
            borrar={borrar}
            completado={completado}
            id={index}
            editar={actualizarTarea}
            echo={true}
            
          />
        ))}
      </div>
         {/*  {.map((e, index) => (
          <Tarea
            completado={completado}
            
            
          />
        ))} */}
        
      <div>
      
      </div>
    </div>
  );
}

export default App;
