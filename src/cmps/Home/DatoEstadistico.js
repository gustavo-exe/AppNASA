function DatoEstadistico({cantidad, descripcion}) {
    return(
        <div className="flex-1 my-10" >
            <span className="text-4xl md:text-6xl " >{cantidad}</span> 
            <br></br>
            {descripcion}
        </div>
    )
}

export default DatoEstadistico;