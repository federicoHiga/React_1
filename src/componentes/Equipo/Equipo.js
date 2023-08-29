import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from 'hex-to-rgba';
import "./Equipo.css"


const Equipo = (props)=>{

    /**
     * Destructuracion
     * limpiamos el codigo para no tener q estar poniendo en cada llamada de prop: props.datos.titulo o props.datos.colorSecundario. para eso definimos las props en una const  
     * en el caso de las props q significan estilos (borderColor, backgroundColor etc) una vez definida la prop en una const hacemos lo mismo pero con la propiedad q vamos a utilizar
     */

    //destructuramos las props
    const {titulo, colorPrimario, colorSecundario, id}=props.datos //en este caso se indica el nombre con el q se definio la prop (datos={equipo}) en el componente padre porq se trata de un arreglo y va todo junto
    const {colaboradores, eliminarColaborador, actualizarColor, like}=props //estas props pueden ir juntas porq no son un array. se trata de un useState y de funciones

    const sectionCss = {//definimos las props de estilos
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const h3Css = {//definimos las props de estilos
        borderColor: colorPrimario
    }

    return <>
        {
            colaboradores.length > 0 && //esta logica es para q solo los componentes "equipo" con "colaboradoes" se muestren
            <section className="equipo" style={sectionCss}>
                <input //input type="color" para poder cambiar el color de manera dinamica
                    className="input-color"
                    type="color"
                    value={hexToRgba(colorPrimario, 0.6)}
                    onChange={(evento)=>{//con la prop onChange podemos capturar el event cuando cambia (en este caso de color) en la variable "evneto" de la arrow, especificando event.target.value 
                        actualizarColor(evento.target.value, id)//fin del recorrido del actualizarColor recibiendo los dos parametros: evente.target.value(color) y el titulo
                    }}
                />
                <h3 style={h3Css}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaboradores, index)=>{//el .map recorre el array y recibe dos parametros. En el primero guarda los datos de cada recorrido, y el segundo por defecto funciona como "i" osea itera y va sumando, es por eso q lo podemos utilizar para la key de componente a modod de id
                            return <Colaborador 
                            datos={colaboradores} 
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                            />
                        })
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo