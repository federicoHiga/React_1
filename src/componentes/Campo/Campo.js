import "./Campo.css"

const Campo = (props)=>{ // props=propiedades // lo componentes pueden recibir un objeteo como parametro en la llamda, es decir en el App.js y aca se puede acceder a cada uno con el .algo

    const palceholderModificado = `${props.placeholder}...`//modificando el placeholder sumando "..."
    const {type = "text"} = props //destructuramos todas las props de campoTexto en un type="text". Por default todos los types del los imputs van a ser texto. Asi para especificar un imput es mas facil
    const manejarCambio = (e)=>{
        props.setValor(e.target.value)
    }

/**
 * este return devuelve un div con sus hijos y sus props q llegan desde afuera (del form)
 */

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={palceholderModificado} 
            required={props.required} 
            value={props.value} //recibe la props.value inicial del fomr
            onChange={manejarCambio} //onChange=cada vez q cambia el input el event captura el value en tiempo real y ejecuta en este caso "manejarCambio" q refresca con (e.target.value) el value del input
            type={type}//seteamos por default todos los types
        />
    </div>
}

export default Campo