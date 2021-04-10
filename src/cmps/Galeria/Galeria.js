import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Tarjeta from './Tarjeta';

function Galeria(){
    return(
        <div>
            <NavBar/>
            <div className=" flex md:flex-row justify-items-center flex-col justify-between py-8 px-6">
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/firewal%20nova.jpg"
                    titulo="Nova"
                    descripcion="Una nova es una explosión termonuclear causada por un desequilibrio entre la gravedad 
                    de una estrella y su combustible nuclear, hidrógeno; cuando la estrella agota el combustible nuclear 
                    que la mantiene estable, colapso que a su vez provoca una explosión de gran magnitud. "
                />
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/nebula.jpg"
                    titulo="Nebula"
                    descripcion="Una nebulosa es una nube gigante de polvo y gas en el espacio. Algunas nebulosas 
                    (más de una nebulosa) provienen del gas y el polvo arrojados por la explosión de una estrella 
                    moribunda, como una supernova. Otras nebulosas son regiones donde comienzan a formarse nuevas estrellas."
                />
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/saturn.jpg"
                    titulo="Saturno"
                    descripcion="Saturno es el sexto planeta desde el Sol y el segundo más grande del Sistema Solar.
                    después de Júpiter. Es un gigante gaseoso con un radio promedio de aproximadamente nueve veces el de la Tierra.
                    Solo tiene un octavo de la densidad promedio de la Tierra.
                    "
                />
            </div>

            <div className=" flex md:flex-row justify-items-center flex-col justify-between py-8 px-6">
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/scispace.jpg"
                    titulo="Espacio"
                    descripcion="Cuando miras hacia el cielo nocturno, ves estrellas y, a veces, la luna y
                    los planetas más brillantes. Lejos de las luces de la ciudad, en una noche clara, es posible que vea la hermosa banda
                    de la Vía Láctea, que se extiende por el cielo. "
                />
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/sol.jpg"
                    titulo="Llamarada Solar"
                    descripcion="Una llamarada solar es un destello repentino de mayor brillo en el Sol,
                    generalmente se observa cerca de su superficie y muy cerca de un grupo de manchas solares. Poderoso
                    los brotes a menudo, pero no siempre, van acompañados de una eyección de masa coronal. Incluso el mas
                    poderosas llamaradas son apenas detectables en la irradiancia solar total"
                />
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/station.jpg"
                    titulo="Estación Espacial Internacional"
                    descripcion="La Estación Espacial Internacional (ISS) es una estación espacial modular
                    (satélite artificial habitable) en órbita terrestre baja.
                    La estación sirve como laboratorio de investigación de microgravedad y medio ambiente espacial en el que científicos
                    La investigación se lleva a cabo en astrobiología, astronomía, meteorología, física y otros campos."
                    
                />
            </div>

            <div className=" flex md:flex-row justify-items-center flex-col justify-between py-8 px-6">
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/sun1.jpg"
                    titulo="El Sol"
                    descripcion="El Sol es la estrella en el centro del Sistema Solar. Es casi
                    esfera perfecta de plasma caliente, [18] [19] calentado hasta la incandescencia por fusión nuclear
                    reacciones en su núcleo, irradiando la energía principalmente como luz visible e infrarroja
                    radiación. Es, con mucho, la fuente de energía más importante para la vida en la Tierra.."
                />
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/debris.jpg"
                    titulo="Basura Espacial"
                    descripcion="Es objetos desaparecidos hechos por humanos en el espacio, principalmente en la órbita de la Tierra, que no
                    ya tienen una función útil. Estos incluyen naves espaciales abandonadas - naves espaciales no funcionales
                    y etapas de vehículos de lanzamiento abandonados: escombros relacionados con la misión, y particularmente numerosos en
                    Órbita terrestre, restos de fragmentación de la ruptura de cuerpos de cohetes y naves espaciales abandonados."
                />
                <Tarjeta
                    imagen="https://github.com/gustavo-exe/AppNASA/blob/master/src/img/titan.jpg?raw=true"
                    titulo="Eclipse"
                    descripcion="Un eclipse lunar es un evento astronómico que sucede cuando la Tierra se interpone entre el Sol 
                    y la Luna, generando un cono de sombra que oscurece a la Luna. Para que suceda un eclipse, los dos cuerpos celestes,
                    la Tierra y la Luna, y la estrella, el sol; deben estar exactamente alineados o muy cerca de estarlo, de tal modo 
                    que la Tierra bloquee los rayos solares que llegan al satélite, por eso los eclipses lunares solo pueden ocurrir 
                    en la fase de luna llena."
                />
            </div>

            <Footer/>
        </div>
    )
}

export default Galeria;