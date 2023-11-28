import {useState} from "react"
import {v4 as uuid} from "uuid";
import './App.css';
import Header from './componentes/Header/Header'; // se importan todos los componenetes (pedacitos de codigo) y se reutilizan
// console.log (Header)// devuelve un objeto con el codigo html
import Form from './componentes/Form/Form';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from "./componentes/Equipo/Equipo";
import Footer from "./componentes/Footer/Footer";

function App() {
  
  /**
   * switch del form
   */
  const [mostrarForm, actualizarMostrar] = useState(false)//declarando el useState()
  const cambiarMostrar = ()=>{//declarando el actualizarMostrar dentro de una arrow a modo de switch
    actualizarMostrar(!mostrarForm)
  }



                                          //Array de Objetos
  //de esta manera tenemos los datos centralizados y los madnamos via "props" a los distintos componenetes


  /**
   * hook/useState() 
   * 1) es un objeto llamado "colaboradores" cuyo estado inicial es otro objeto vacio
   * 2) usamos un useState para q se pueda ir actualizando
   * 3) va a servir como contenedor de los datos del form, pero todava no esta conectado al form
   */
  const [colaboradores, setColaborador] = useState([//por el momento "colaboradores" esta hardcodeado pero en realidad lo q se manipula es el localStorage donde se guardan de manera permanente los cambios del setColaboradores
    {
      id: uuid(),
      equipo:"Devops",
      foto:"https://github.com/harlandlohora.png",
      nombre:"ASD",
      puesto:"ASD",
      fav: true
    },
    {
      id: uuid(),
      equipo:"Front End",
      foto:"https://github.com/harlandlohora.png",
      nombre:"ASD",
      puesto:"ASD",
      fav: false
    },
    {
      id: uuid(),
      equipo:"Móvil",
      foto:"https://github.com/harlandlohora.png",
      nombre:"ASD",
      puesto:"ASD",
      fav: false
    }              
  ])


  /**
   * hook de equipos
   */
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programacion",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    },
  ])


  /**
   * registrarColaborador 
   * 1) tiene como parametro "colaborador" el cual va a guardar los datos q le pasemos cuando la llamemos en el form
   * 2) al hacer la llamda de useState "setColaboradores" estamos ahora si conectado el hook con el form, lo q le pasesmos como parametro va a ser el nuevo estado del hook. En este caso lo q ya hubiese en el hook + "colaborador"
   * 2b) el metodo Spread operator "...variable-array-objeto" copia el contenido en este caso del hook "colaboradores" 
   * 3) asi la funcion se "completa" cuando se ejecuta el fomr, mas precisamente el manejarEnvio() q es donde se llama esta funcion
   */
  const registrarColaborador=(colaborador)=>{
    console.log("Nuevo colaborador",colaborador)
    setColaborador([...colaboradores, colaborador])
  }


  /**
   * eliminarColaborador
   * 1) se manda por props a los hijos de APP
   * 2) finalmente de conecta con el ultimo componente y se madna a llmar via onChange={elminarColaborador}
   * 3) tiene como parametro el id q se captura en el event, es decir el id donde hago click de cada colabrodaro
   * 4) y con un .filter recorro de nuevo el array, cada recorrido lo guardo en "colaborador" pero returna los q sean distintos del id q capture del onCLick (guardando ese return en nuevoColaboradores)  
   * 5) finalmete mandamos a llamr el setColaboradores() con el return actualizando el array "colaboradores" 
   */
  const eliminarColaborador=(id)=>{
    console.log("Eliminar", id)
    const nuevoColaboradores = colaboradores.filter((colaborador)=> colaborador.id !==id)
    setColaborador(nuevoColaboradores)
  }


  /**
   * actualizarColor
   */
  const actualizarColor=(color, id)=>{
    console.log("actualizar: ", color, id)
    
    const equipoActualizado=equipos.map((equipo)=>{
      if (equipo.id===id){
        equipo.colorPrimario=color
    }
      return equipo
    })

    setEquipos(equipoActualizado)
  }


  /**
   * crearEquipo
   */
  const crearEquipo=(nuevoEquipo)=>{
    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }


  /**
   * like
   * 1) recibe como param el id q del componente "colaborador" q se capturo en el icono del corazon
   * 2) en una nueva constante recorremos el array de colaboradores y si el id coincide con el capturado colaborador.fav va a ser distinto del q estaba. Es decir, el fav al ser un booleano, queda a modod de switch. Por ultimo retorna el colaborador
   * 3) finalmente hacemos la call del setColaborador con el colaborador Actualizado
   */
  const like=(id)=>{
    console.log("like ", id)
    const colaboradorActualizado = colaboradores.map((colaborador)=>{
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaborador(colaboradorActualizado)
  }
  

  return (
    <div>
      <Header />

      {/*A) estructura "ternario" es el if de react*/
        mostrarForm && <Form 
          equipos={equipos.map((equipo)=>equipo.titulo)}/*B) le damos como prop al Form "equipos={}" pasnadole el titulo del array*/ 
          registrarColaborador={registrarColaborador}/*C) le pasamos como prop la funcion de registrar para q viaje y pueda ser utilizada en el componente Form*/
          crearEquipo={crearEquipo}
          />
      } 

      <MiOrg cambiarMostrar={cambiarMostrar}/> {/*enviadno el switch como una prop hacia el componente MiOrg*/}
      
      {
        equipos.map((equipo)=>{
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter((colaborador)=>colaborador.equipo===equipo.titulo)}//.filter entre los dos objetos (equipos con la estrucutra de la card y colaboradoes con los values del form) para q no se repitan los colaboradores
          eliminarColaborador={eliminarColaborador}//le pasamos una function a modo de prop para q viaje por los hijos del APP hasta el componente q sea necesario
          actualizarColor={actualizarColor}
          like={like}
          />// equipos.map((equipo)=><Equipo datos={equipo} key={equipo.titulo} />) //si la arrow devuelve un solo resultado da por sentado el return y sus llaves pudiendo dejar la funcion en una sola linea
        })
      }

      <Footer />

    </div>
  );
}

export default App;
