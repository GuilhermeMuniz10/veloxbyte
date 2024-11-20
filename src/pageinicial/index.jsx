import './index.scss'

export default function App() {

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();  // Impede o comportamento padrão do link (rolagem imediata)
  
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,  // Obtém a posição vertical da âncora
        behavior: 'smooth'  // Aplica a rolagem suave
      });
    }
 }
 


  return (

    <div className='tudo'>

      <div className="paginicio"> 

        <nav className='links'>

          <img src="/assets/images/oi.png" alt="Descrição da Imagem" class="imagem-opaca" />

          <ul>

          <li><a href="#" className='Link' onClick={(e) => handleSmoothScroll(e, 'Quw')}>Quem Somos</a></li>
            <li><a href="#" className='Link'>Premiações</a></li>
            <li><a href="#" className='Link'>Projetos</a></li>
            <li><a href="#" className='Link'>Localização</a></li>

          </ul>

        </nav>

        <div class="separador"></div>

      </div>

      <div className='part1'>

        <img className='fundo' src="/assets/images/ui.png" alt="" />

        <div className='texto-secao1'>

          <h1 className='h1'>Inovação á sua Empresa</h1>

          <p className='v'>A Velox Byte é uma empresa de <br /> tecnologia e informática comprometida <br /> em oferecer soluções inovadoras e <br /> eficientes para o mundo digital.</p>


        </div>


        <img className='empre' src="/assets/images/imgemp.png" alt="" />


      </div>

      <div className='part3'>

        <div className='ft'>

          <img className='equipe' src="/assets/images/novo.png" alt="" />

        </div>

        <div className='part3-1'>

          <div className='missao'>

            <h3>MISSÃO</h3>

            <div className='linha'></div>

            <p className='p'>

              A missão da Velox Byte é transformar desafios tecnológicos em oportunidades de crescimento para nossos clientes, oferecendo soluções inovadoras e eficazes. Especializados em Tecnologia da Informação, capacitamos jovens empreendedores e autônomos com ferramentas que impulsionam seus negócios na era da informação. Comprometidos com a excelência, buscamos entender as necessidades dos clientes e criar soluções personalizadas que promovam eficiência e agilidade. Nossa visão é ser um parceiro estratégico, antecipando demandas do mercado e equipando nossos clientes para um futuro repleto de oportunidades e conquistas.

            </p>

          </div>

        </div>

      </div>

      <div className="page">

        <div className="card">

          <img src="/assets/images/img2.png" alt="Premiações" className="card-image" />

          <h3>Premiações</h3>

          <p>
            Na Velox Byte, as premiações refletem a excelência que buscamos. Nossa gestão, focada na inovação, destaca aqueles que se sobressaem, incentivando o progresso. Com líderes qualificados e uma equipe alinhada, celebramos conquistas que reforçam nosso compromisso com o desenvolvimento coletivo.
          </p>

        </div>

        <div className="card">

          <img src="/assets/images/img1.png" alt="Gestão" className="card-image" />

          <h3>Gestão</h3>

          <p>
            A nossa gestão é fundamentada na inovação e na eficiência, elementos essenciais que guiam cada uma de nossas ações. Com uma equipe colaborativa e líderes experientes, estamos sempre em busca de maneiras de aprimorar nossos processos e resultados, garantindo que estejamos na vanguarda do setor.</p>

        </div>

        <div className="card">

          <img src="/assets/images/m.png" alt="Projetos" className="card-image" />

          <h3>Projetos</h3>

          <p>
            Na Velox Byte, somos especialistas em desenvolver sites e plataformas sob medida para jovens empreendedores e autônomos, proporcionando soluções que impulsionam seus negócios. Clique no botão abaixo e explore um dos nossos sites de projeto!
          </p>


          <button className="card-button">Clique aqui!</button>

        </div>

      </div>

      <div className="final">
        
        <div className="left-section">


          <div className="imge">

            <img className="imglo" src="/assets/images/canva2.png" alt="" />

          </div>

          <a href="" style={{ textDecoration: 'none' }}>

            <h2 className="fale">Fale Conosco</h2>

          </a>

          <div className="line-separator"></div>

          <div className="redes">

            <a href="https://w.app/Veloxbytetec">
              <img className="icon" src="/assets/images/whats.png" alt="WhatsApp" />
            </a>

            <a href="https://www.facebook.com/profile.php?id=61568246933574&sk=about_work_and_education">
              <img className="icon" src="/assets/images/face.png" alt="Facebook" />
            </a>

            <a href="https://www.instagram.com/velox.byte/">

              <img className="icon" src="/assets/images/twiter.png" alt="Twitter" />

            </a>

          </div>

        </div>

        <div className="right-section">

          <div className="endereco">

            <h2>Contato</h2>

            <p>Telefone Comercial: (11)93940-2551</p>

            <p>Email Comercial: veloxbyte@gmail.com</p>

            <p>Rua Sátelite Dioneia, 171 - Jd.Casa Grande</p>

            <p>Cep: 04858-480</p>

          </div>

          <div className="atendimento">

            <h2>Atendimento</h2>

            <p>Segunda a Sexta, das 08h às 18h</p>

          </div>

        </div>

      </div>

    </div>



  )

}




