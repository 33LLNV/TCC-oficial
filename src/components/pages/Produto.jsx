import "./Index.css"
import "./Produto.css"
import fotocaminhao from "../../img/caminhao.jpeg.jpg"
import eu from "../../img/estrada-eu.jpg"
import email from '../../img/gmail.png'

function Produto() {
    return (
        <main>
<h3 className="textoinicial">
  <strong> Foto do Produto final</strong> 
</h3>
<div className="fotocamiao1">
    <img src={fotocaminhao} alt="Foto do camiao" />
</div>

<div className="estrada-eu">
    <img src={eu} alt="Desenvolvedor usando o Oculos" />

    



</div>



<div className="Rodape">

    <h2 className="rodapep">Email: lucasleandro.viana@gmail.com</h2>
    <img src={email} alt="gmail.png" className="gmail" />
    
</div>
        </main>
    )
}

export default Produto

