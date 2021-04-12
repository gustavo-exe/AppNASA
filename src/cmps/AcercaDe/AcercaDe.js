import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Parrafo from './Parrafo';

function AcercaDe() {
    return(
    <div className="flex flex-col justify-between">
        <NavBar/>
            <div className="w-full flex flex-col items-center my-4" >
                <div className="font-bold text-4xl sm:text-6xl p-8 " >
                    1958-2021
                </div>

                <img src="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/images/Satelite.jpg" className="w-full"/>  

                <div className="p-8" >
                    <div className="flex flex-row w-full" >
                        <h1 className="font-bold text-2xl sm:text-4xl " >About NASA</h1>
                    </div>
                    <div>
                        <Parrafo 
                            texto="La Administración Nacional de Aeronáutica y del Espacio es el programa espacial civil de Estados Unidos y el líder mundial en exploración espacial. La agencia tiene una fuerza laboral diversa de poco menos de 18.000 funcionarios y trabaja con muchos más contratistas, instituciones académicas y socios comerciales e internacionales de EE. UU. Para explorar , descubrir y ampliar conocimientos en beneficio de la humanidad. Con un presupuesto anual
                            de $ 23,2 mil millones en el año fiscal 2021, que es menos del 0,5% del presupuesto federal general de los EE. UU., la NASA respalda más de 312,000 empleos en los Estados Unidos, generando más de $ 64,3 mil millones en producción económica total (año fiscal 2019) "
                        /> 
                        <Parrafo
                            texto="En sus 20 centros e instalaciones en todo el país, y el único Laboratorio Nacional en el espacio, la NASA estudia la Tierra, incluido su clima, nuestro Sol y nuestro sistema solar y más allá. Realizamos investigaciones, pruebas y desarrollo para promover la aeronáutica, incluida la propulsión eléctrica y vuelo supersónico. Desarrollamos y financiamos tecnologías espaciales que permitirán la exploración futura y beneficiarán la vida en la Tierra "
                        />
                        <Parrafo 
                            texto="
                            La NASA también lidera un enfoque de exploración de la Luna a Marte, que incluye trabajar con la industria estadounidense, socios internacionales y la academia para desarrollar nueva tecnología, y enviar investigación científica y pronto humanos para explorar la Luna en misiones Artemisa que ayudarán a prepararse para la exploración humana de la Tierra. Planeta rojo. Además de esas misiones importantes, la agencia comparte lo que aprende para que su información pueda mejorar la vida.
                            para personas de todo el mundo. Por ejemplo, las empresas utilizan los descubrimientos y tecnologías de la NASA para crear nuevos productos para el público. Para garantizar el éxito futuro de la agencia y la nación, la NASA también apoya los esfuerzos educativos en STEM con énfasis en aumentar la diversidad en nuestra fuerza laboral futura.
                            "
                        />
                    </div>
                </div>
            </div>
        <Footer/>
    </div>)
}
export default AcercaDe;