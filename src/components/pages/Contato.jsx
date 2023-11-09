import "./Index.css"
import "./Contato.css"
import eufoto from "../../img/eu.png"
import code1 from "../../img/QR-code01.jpg"
import code2 from "../../img/qr-whats.jpg"
import email from '../../img/gmail.png'

function Contato() {

  

  return (
    <div className="container">
      <div className="desenvolvedor">

        <h2 className="h2"><span className="textocontato"> Sobre o Desenvolvedor </span></h2>

        
        <div className="eufoto">
          <img src={eufoto} alt="eu" className="eu" />

          <h3 className="textop">Excelentíssimos colegas, professores, e todos os presentes,

            É com grande satisfação e um coração cheio de gratidão que me dirijo a vocês hoje. Chegamos ao fim de mais um projeto, um projeto que carregou consigo a responsabilidade de concluir o meu Trabalho de Conclusão de Curso de forma individual. No entanto, é importante ressaltar que esta jornada não foi percorrida completamente sozinho.

            Quero expressar minha profunda gratidão a todos aqueles que estiveram ao meu lado, orientando-me e oferecendo apoio durante todo o processo. Cada conselho, cada palavra de incentivo, foram como bússolas que me guiaram na direção certa. O sentimento que me preenche agora é, sem dúvida, de uma imensa gratidão.

            Além disso, não posso deixar de mencionar a importância da estrutura oferecida pela nossa respeitável instituição, a U.N.A.S.P. A qualidade do ambiente acadêmico, a excelência dos professores e o compromisso inabalável com o bem-estar dos alunos foram pilares fundamentais para o sucesso deste projeto.

            Gostaria também de prestar uma homenagem especial aos colegas que estiveram ao meu lado, colaborando ativamente no desenvolvimento deste trabalho. Pierre Silva de Sá, Nathan Brandão, Rafael Fiel, Pedro Dutra, Professor Marcio Marcal,  foram fontes de inspiração e suporte indispensáveis. Sei que, embora tenha conduzido o TCC individualmente, sem a orientação e direcionamento dessas pessoas excepcionais, teria sido uma jornada muito mais árdua e desafiadora.

            Assim, encerramos este ciclo com a certeza de que, juntos, somos capazes de superar desafios e alcançar resultados notáveis. Que este projeto sirva como um testemunho da nossa capacidade coletiva de alcançar o extraordinário.

            Muito obrigado a todos!</h3>
                     
           

        </div>

        <div className="QR">
        <img  className="qr1"  src={code1}  alt="QRCODE" />
        <img  className="whats"  src={code2} alt="QR-whats" />


        </div>  
        <div className="Rodape">
            
            
          <h2 className="rodapec">Email: lucasleandro.viana@gmail.com</h2>
          <img src={email} alt="gmail.png" className="gmail" />

        </div>

      </div>
    </div>

  )
}

export default Contato