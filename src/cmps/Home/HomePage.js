import DatoEstadistico from './DatoEstadistico';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

import '../../css/HomePage.css';


function HomePage() {
    return(
        <div className="ContenedorConImagen flex flex-col justify-between" >
            <NavBar/>

            <div style={{minHeight:"100vh"}} className="p-10   md:py-20 sm:py-10 flex flex-col justify-between" >
                <p className="w-90 sm:w-100 font-bold text-4xl sm:text-8xl uppercase" >
                Administración Nacional de 
                Aeronáutica y el Espacio
                </p>

                <div className="w-40 my-10  flex flex-wrap sm:w-80 " >
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
            <Footer/>
        </div>
    )
}

export default HomePage;