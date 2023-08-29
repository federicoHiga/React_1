import "./MiOrg.css"



const MiOrg = (props)=>{
    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/> {/* recibiendo el switch */}
    </section>
}

export default MiOrg