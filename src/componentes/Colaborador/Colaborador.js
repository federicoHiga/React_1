import "./Colaborador.css"
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai"//icon de la libreria interna de react

const Colaborador=(props)=>{

/**
 * destructurando en un objeto las props 
 */
    const {nombre, foto, puesto, equipo, id, fav}=props.datos
    const {colorPrimario, eliminarColaborador, like}=props

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={()=>eliminarColaborador(id)}/>{/*este es el fin del recorrido del la funcion "eliminarColaborador", queda linkeada a un icon/span/button lo q sea con un onCLick={laFunction}*/ /*primero se llma a travez de una arrow para q solo se ejecute cuando se le da click, de otra manera react llama a la function de una al renderizar el elemento*/}
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={()=>like(id)}/> : <AiOutlineHeart onClick={()=>like(id)} />}{/*estructura ternario para el "like".Si fav es true (?) dame el corazon rojo sino (:) dame el otro*/}
        </div>
    </div>
}

export default Colaborador