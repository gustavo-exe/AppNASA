import '../../css/NavBar.css';

function NavBar() {
    return(
    <nav className=" flex-row justify-between p-2">
        
        <div  className="items-center hidden sm:flex flex-row justify-between px-2" >
            <a href="/"> <div className="LogoNasa  w-40 h-24 " ></div> </a>
            <div className="Paginas sm:w-60 sm:px-4 md:w-80  flex justify-between" >
                <a className="Opcion sm:text-lg md:text-2xl" >Acerca de la NASA</a>
                <a className="Opcion sm:text-lg md:text-2xl" >Galeria</a>
            </div>
        </div>

        <div className="sm:hidden items-center  flex flex-row justify-between p-2" id="mobile-menu">
            <div className="LogoNasa  w-20 h-12 " ></div>

            <div className="Dropdown ">
                <button className=" py-2 px-4 rounded inline-flex items-center">
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                </button>
                <ul className="DropdownMenu absolute hidden t-1">
                    <li><a className="DropdownOpcion rounded-t py-2 px-4 block whitespace-no-wrap" href="#">Acerca de la NASA</a></li>
                    <li><a className="DropdownOpcion py-2 px-4 block whitespace-no-wrap" href="#">Galeria</a></li>
                </ul>
            </div>
            
        </div>
    </nav>
    )
}

export default NavBar;