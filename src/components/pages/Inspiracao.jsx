import "./Index.css"
import "./Inspiracao.css"
import truck from "../../img/truck.png.png"
function Inspiracao() {
  return (
    <main className="fundopreto">
            
        
    <div className="inspiracao">
     <h1 className="insp">Inspiração</h1>
     <h2 className="referencia">-Referencia-</h2>
    <div className="video1">
             <iframe width="617" height="347" src="https://www.youtube.com/embed/k4Vk04Mcr0Q" title="How to Make Anti Sleep Glasses" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

             <h3 className="t3">
            Ao assistir o vídeo acima, deparei-me com um valioso tutorial educativo que aborda a criação artesanal de um óculos anti-sono, notavelmente eficaz. Embora o conteúdo esteja completamente em inglês, encarei o desafio com determinação e empenho. Com dedicação, consegui reproduzir o projeto proposto, o que demonstra a importância do esforço e da perseverança no processo de aprendizado e criação. Este episódio serviu como um lembrete do quão gratificante pode ser o resultado de nossos esforços quando aplicamos nossa energia de maneira focada e dedicada.
             </h3>

     
    </div>

    <div className="textoca">
      <h3>Compreendendo a realidade logística brasileira, conforme dados da Confederação Nacional dos Transportes, mais de 60% das mercadorias produzidas e consumidas em nosso país são transportadas por meio do modal rodoviário. Infelizmente, isso resulta em um índice significativamente elevado de acidentes, com os caminhões representando uma parcela considerável, totalizando 17,6% dos casos registrados em 1 de fevereiro de 2021, em um período de quatro minutos de leitura.

Embora seja essencial notar que nem todos os acidentes são ocasionados por fatores como a sonolência ou fadiga, é inegável que uma porcentagem considerável desses incidentes de trânsito tem relação com esses elementos. Com base nesse cenário, optei por empreender a replicação e aprimoramento do projeto dos óculos, com o objetivo de preservar vidas nas vias. Além dos 60% de acidentes envolvendo caminhões nas estradas, não podemos desconsiderar a presença significativa de taxistas e motoristas de aplicativos que movem tanto as metrópoles quanto as pequenas cidades. Muitos desses profissionais enfrentam jornadas de trabalho exaustivas, que frequentemente ultrapassam 12 horas. Nesse contexto, é humanamente impossível não experimentar a fadiga.

Se o meu projeto obtivesse um patrocínio, eu o conceberia de forma a torná-lo acessível a todos os públicos de motoristas. Até mesmo a possibilidade de elaborar uma proposta de lei que tornasse obrigatória a utilização do dispositivo para motoristas que ultrapassem 12 horas de condução poderia ser considerada. Dessa maneira, ao soar o terceiro aviso, o motorista seria compelido a fazer uma pausa de 30 minutos. Tal iniciativa, sem dúvida, contribuiria para a segurança e bem-estar de todos os envolvidos no trânsito.</h3>

<div className="caminhao">
  <img src={truck} alt="caminhao" />
</div>
    </div>
    
    <div className="Rodape">

<h2 className="rodapein">Email: lucasleandro.viana@gmail.com</h2>
<img src="src/img/gmail.png" alt="gmail.png" className="gmail" />

<div id="chart">
  <div id="responsive-chart"></div>
</div>


<h2 className="alerta">Evite acidente nas estradas: Não mexa no celular, não dirija com sono, se for dirigir não beba ou utilise qualquer substancia que intorpeça ou afete os sentidos. </h2>
</div>
    </main>
  )
}

export default Inspiracao