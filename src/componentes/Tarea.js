import React, { useState } from "react";
import "../App.css";

const Tarea = (props) => {
  const [modoEdit, setModoEdit] = useState(false);//funcion que usaremos para editar
  const [editText, setEditText] = useState("");//fun que usaremos para editar el texto escrito

  const edita = () => {
    setModoEdit(true);
    //damos valor inicial serModoEdit(true) para luego llamarlo
  };

  const manejarEdit = (event) => {
    setEditText(event.target.value);//target retorna el .valor de setEditText
  };

  const submitEdit = (event) => {//no recargar pagina
    event.preventDefault();
    props.editar(props.id, editText);//editame el texto que tenga un id
    setEditText("");
    setModoEdit(false);//debe ser falsa para que cierre el input 
  };

  const borrarTarea = () => {//lo enlazamos con el props, para luego llamarlo al onClick={borrarTarea}
    props.borrar(props.id);
  };

  const comple = () => {//lo enlazamos con el props, para luego llamarlo al onClick={borrarTarea}
    props.completado(props.id);
  };
  

  return (
    <div>
      {!modoEdit ? (
        <div className="tarea">
          <span>{props.tarea.name}</span>
         {/*{props.echo ?<button onClick={edita} className="button">Editar</button> : null}*/}
         {props.echo ? <button onClick={edita} className="button">Editar</button> : null}
          <button onClick={borrarTarea} className="button">Borrar</button>
          <button onClick={comple} className="button">completado</button>

        </div>
      ) : (
        <form className="formEdit" onSubmit={submitEdit}>
          <input value={editText} onChange={manejarEdit} />{" "}
          <button>Guardar</button>
        </form>
      )}
    </div>
  );
};

export default Tarea;
