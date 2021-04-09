function DatoEstadistico({cantidad, descripcion}) {
    return(
        <div className="flex-1 my-10" >
            <span className="text-4xl sm:text-6xl " >{cantidad}</span> 
            <br></br>
            <p className="md:text-3xl" >{descripcion}</p>
        </div>
    )
}

export default DatoEstadistico;