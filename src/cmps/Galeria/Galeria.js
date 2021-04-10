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
                    titulo="bby"
                    descripcion="hola mundo"
                />
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/firewal%20nova.jpg"
                    titulo="bby"
                    descripcion="hola mundo"
                />
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/firewal%20nova.jpg"
                    titulo="bby"
                    descripcion="hola mundo"
                />
            </div>

            <div className=" flex md:flex-row justify-items-center flex-col justify-between py-8 px-6">
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/firewal%20nova.jpg"
                    titulo="bby"
                    descripcion="hola mundo"
                />
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/firewal%20nova.jpg"
                    titulo="bby"
                    descripcion="hola mundo"
                />
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/firewal%20nova.jpg"
                    titulo="bby"
                    descripcion="hola mundo"
                />
            </div>

            <div className=" flex md:flex-row justify-items-center flex-col justify-between py-8 px-6">
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/firewal%20nova.jpg"
                    titulo="bby"
                    descripcion="hola mundo"
                />
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/firewal%20nova.jpg"
                    titulo="bby"
                    descripcion="hola mundo"
                />
                <Tarjeta
                    imagen="https://raw.githubusercontent.com/gustavo-exe/AppNASA/master/src/img/firewal%20nova.jpg"
                    titulo="bby"
                    descripcion="hola mundo"
                />
            </div>

            <Footer/>
        </div>
    )
}

export default Galeria;