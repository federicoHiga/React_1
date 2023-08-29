import { useState } from "react"
import "./Form.css"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

// al hacer la llmada del componente en este Form.js o en el .jxs principal (App.js) podemos agregarle las props como titulo o placeholder, puede recibir strings, numeros etc

const Form = (props)=>{

    const [nombre, setNombre] = useState("") //declaramos los estados de cada input
    const [puesto, setPuesto] = useState("") //declaramos los estados de cada input
    const [foto, setFoto] = useState("") //declaramos los estados de cada input
    const [equipo, setEquipo] = useState("")

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState ("")

    const {registrarColaborador, crearEquipo}=props //destructurando la function q llega via prop desde APP

    const manejarEnvio = (e)=>{//e=event/evento
        e.preventDefault()//reiniciamos el e
        let datosAEnviar = {//almacenamos los estados en un array, js linkea solo con los estados de arriba
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)// hacemos el call de la function enviadnole el array con los estados de los inputs para q los almacene en APP
    }

    const manejarEnvioEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">

        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingrese el nombre" 
                required
                value={nombre} //linkeamos el estado inicial del input via props
                setValor={setNombre} //linkeamos el estado actualizado (si no se actualiza queda el valor inicial)
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingrese el puesto" 
                required
                value={puesto}
                setValor={setPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingrese enlace de foto" 
                required
                value={foto}
                setValor={setFoto}
            />
            <ListaOpciones 
                value={equipo}
                setValor={setEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarEnvioEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingrese el titulo" 
                required
                value={titulo} //linkeamos el estado inicial del input via props
                setValor={setTitulo} //linkeamos el estado actualizado (si no se actualiza queda el valor inicial)
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingrese el color" 
                required
                value={color}
                setValor={setColor}
                type="color"
            />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Form