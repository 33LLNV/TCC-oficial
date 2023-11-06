import { List, X } from "@phosphor-icons/react"
import { useState } from "react"
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
    const [abrirFechar, setAbrirFechar] = useState(false)

    function handleAbrirFecharMenu() {
        if(abrirFechar) {
            setAbrirFechar(false)
            return
        }

        setAbrirFechar(true)
    }

    return (
        <header>
        <div className="menu-mobile">
            <div className="botao-menu">
                <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <X size={32} /> : <List size={32} />}</button>
            </div>

            <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
            <nav className="btprincipa2">
                   
                <span><Link className="inicio01" to={'/'}>Inicio</Link></span>

            <span> <Link className="inicio01" to={'/Inspiracao'}>Inspiracao</Link></span> <span></span>

            <span><Link className="inicio01" to={'/Produto'}>Produto</Link></span> <span></span>

            <span><Link className="inicio01" to={'/Contato'}>Contato</Link></span> <span></span>
                </nav>
            </div>
        </div>
       

        <div className="menu-desktop">
             
            <nav className="btprincipal">
            <h1 className="titulo">Óculos Anti-Sono</h1>
            <span><Link to={'/'} >Inicio</Link></span>

            <span> <Link  to={'/Inspiracao'}>Inspiracao</Link></span> <span></span>

            <span><Link to={'/Produto'}>Produto</Link></span> <span></span>

            <span><Link to={'/Contato'}>Contato</Link></span> <span></span>
            </nav>
        </div>
    </header>
    )
}

export default Header