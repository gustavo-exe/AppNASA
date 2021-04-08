import DatoEstadistico from './DatoEstadistico';
import '../../css/HomePage.css';
function HomePage() {
    return(
        <div className="ContenedorConImagen flex flex-col" >
            <div style={{height:"10vh", width:"100vw"}} >
                <p>Header</p>
            </div>

            <div  style={{width:"100vw", minHeight:"90vh"}} className="p-10 flex flex-col justify-between" >
                <p className="w-90 md:w-100 font-bold text-4xl md:text-8xl uppercase" >
                Administración Nacional de 
                Aeronáutica y el Espacio
                </p>

                <div className="w-40 my-10 flex flex-wrap md:w-80 " >
                    <DatoEstadistico
                        cantidad="17,219"
                        descripcion="Empleados"
                    />
                    <DatoEstadistico
                        cantidad="22,629"
                        descripcion="Millones en presupuesto"
                    />
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;