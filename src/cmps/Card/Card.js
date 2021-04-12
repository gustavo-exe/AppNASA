function Card({imagen,titulo, descripcion}) {
    return(

<div className="flex flex-col md:flex-row p-4 items-center">

        <section className="flex w-full h-full  item-center">
                  <img alt="imagen no encontrada" src={imagen}/>
        </section>
        <div className="p-6">
          
          <h1 className="fond-bold text-2xl md:text-4xl">{titulo}</h1>
          <p className="text-xl"> {descripcion}</p>
        </div>

</div>


    )
}

export default Card