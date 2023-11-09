import "./Index.css"
import bart from '../../img/image-23.png'
import oculosArduino from '../../img/oculosarduino.jpeg'



function Index() {

  return (
    <main>
            <div className="capa">
            <img src={bart} alt="fotoprincipal" />
        </div>

        <div className="textofoto">
        <h1>Lucas Leandro</h1>
        <h2>Apresento, <span className="textocolorido">Óculos Anti-Sono</span> </h2>

        </div>
        <div className="sobre">
            <h1>sobre</h1>
           
        </div>
        <div className="objetivo">
        <p >Objetivo do Projeto</p>
        </div>
        <div className="oculosarduino">
          <img src={oculosArduino} alt="Foto de um oculos arduino" />
        </div>

        <div className="aluno"> <br /><h2>Aluno da instituição U.N.A.S.P. Óculos Anti-Sono</h2>
         <p className="textogrande">Aluno da Instituição Adventista, atualmente cursando o terceiro 
            ano do ensino médio, onde é proposto a todos os alunos dessa série a realização do 
            projeto do Trabalho de Conclusão de Curso (TCC), com o objetivo de criar ou recriar projetos 
            utilizando a plataforma Arduino, a fim de facilitar o dia a dia ou proporcionar acessibilidade 
            para pessoas com deficiência física. Meu nome é Lucas Leandro e venho apresentar o meu projeto
             em Arduino com o propósito de ajudar motoristas em geral, mas principalmente aqueles que conduzem caminhões,
              Ubers e prestadores de serviços semelhantes. Embora seja um protocolo de segurança do Ministério da Saúde, em conjunto com 
              o Departamento Nacional de Trânsito (Denatran), a campanha (Não dê carona ao sono) alerta sobre os
               riscos de dirigir cansado e incentiva
               os motoristas a fazerem pausas a cada 3 ou 4 horas de viagem para descansar. Entretanto, no Brasil pode-se perceber 
               que essas recomendações não são exatamente 
               respeitadas, promovendo diversos acidentes causados por fadiga ao volante. Pensando em combater e evitar esse tipo de tragédia que já ceifou muitas 
               vidas por imprudência, eu, 
               Lucas, desenvolvi um modelo de óculos anti-sono que, por meio de um sensor infravermelho, identifica as pálpebras fechadas por mais de 1 
               segundo e emite um som e vibra a armação
                do óculos, a fim de alertar o motorista e evitar qualquer tipo de acidente. Meu objetivo principal é que o óculos seja obrigatório para 
                motoristas que passam mais 
                de 4 horas diárias nas estradas brasileiras e que seja fornecido aos funcionários de grandes transportadoras e aplicativos de carona. Pensei também
                 em um valor acessível, para que todos tenham acesso e possam utilizar para garantir a sua própria segurança e a de terceiros, para viagens mais seguras.</p>
        </div>
    
        
<div className="grafico">
<img src="src/img/grafico.JPG" alt="" />
</div>

<iframe src="https://publuu.com/flip-book/4001/686174/page/1?embed" width="100%" height="980" allowfullscreen="" allow="clipboard-write" ></iframe>

<div>
<h1 className="h1texto">Mapa Elétrico</h1>
  <h3 className="textoh3">Este mapa é responsavel por instruir no momento da montagem do projeto.</h3>
</div>
<div className="esquemaeletrico">

  <img className="esquema" src="src/img/esquema.JPG" alt="Esquema Eletrico" />
</div>
        
        <div className="Rodape">
            
            <h2 className="rodapei">Email: lucasleandro.viana@gmail.com</h2>
            <img src="src/img/gmail.png" alt="gmail.png" className="gmail" />
</div>
    </main>
  )
}

export default Index