import "./ListaOpciones.css"

//*************************************function depurada*********************************************/

const ListaOpciones = (props)=>{

    const manejarCambio= (e)=>{
        props.setValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select
            onChange={manejarCambio} 
            value={props.valor}>{/*A) truquin para agregar un placeholder al tag option*/}

            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>{/*B) truquin para agregar un placeholder al tag option*/}
            {props.equipos.map((equipo, index)=>{ //abrimos llaves {} y ejecutamos codigo js en este caso .map()  
                return <option key={index} value={equipo}>{equipo}</option>   
            })}
        </select>
    </div>
}

export default ListaOpciones

//*************************************function hardcodeada*********************************************/

//los datos del tag option primero estan hardcodedas y segudno no siempre vamos a tener dichos datos, por lo genreal te llegan mediante un fetch, es decir en un objeto. 

//los objetos o arreglos en react no se recorren con un forEach sino con .map()

// const ListaOpciones = ()=>{
//     return <div className="lista-opciones">
//         <select>
//             <option>Programación</option>
//             <option>Front End</option>
//             <option>Data Science</option>
//             <option>Devops</option>
//             <option>UX y Diseño</option>
//             <option>Móvil</option>
//             <option>Innovación y  Gestión</option>
//         </select>
//     </div>
// }

/**
 * .map()
 * 1) recorre un arreglo u objeto corte forEach
 * 2) en este caso recibe dos parametros: "equipo" (del arreglo "equipos") e "index" (la i de cada elemto)
 * 3) en .map() react necesita q cada tag del return se identifique de alguna manera unica mediante la palabra reservada key=, corte id. enteonces se lo designamos con el parametro "index"
 */