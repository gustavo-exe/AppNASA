import '../../css/Tarjeta.css';

function Tarjeta({imagen, titulo, descripcion}) {
    return(
        <div className="Tarjeta max-w-xs rounded overflow-hidden shadow-lg my-2 mx-2">
            <img className="w-full" src={imagen}></img>
            <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{titulo}</div>
                <p>
                    {descripcion}
                </p>
            </div>
            <div className="px-6 py-4">
            </div>
        </div>
    )
}

export default Tarjeta;