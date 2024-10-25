import './index.scss'

export default function App(){
    return(
        <div className='tudo'>

            <div className='cabecario'>

                <img src="/assets/images/logovelox.png" alt="logovelox" className='logo'/>

                <ul>
                  <a href="#" className='Link'>Quem Somos</a>
                  <a href="#" className='Link1'>Premiações</a>
                  <a href="#" className='Link2'>Projetos</a>
                  <a href="#" className='Link3'>Localização</a>
               </ul>

            </div>

            <div className='part1'>
                <img className='fundo' src="/assets/images/imgfundo.png" alt=""/>

                
                    <div className='texto-secao1'>
                        <h1>Inovação á sua Empresa</h1>
                        <p >A Velox Byte é uma empresa de <br /> tecnologia e informática comprometida <br /> em oferecer soluções inovadoras e <br /> eficientes para o mundo digital.</p>
                    </div>
                
                
                    <img className='empre' src="/assets/images/imgemp.png" alt="" />
            </div>
            <div className='part2'>

                <div className='qdq1'>
                 <img src="/assets/images/img1.png" alt="" />
                 <h4 className='premiacoes'>Premiações</h4>
                 <p className='txt1'>É com grande satisfação que anunciamos que a VeloxByte conquistou o Prêmio de Excelência em Tecnologia deste ano! Agradeço a toda a equipe pelo trabalho árduo e pelo impacto positivo que tivemos no setor. Estamos ansiosos para as próximas conquistas!</p>
                </div>

                <div className='qdq2'>
                 <img src="/assets/images/img2.png" alt="" />
                 <h4 className='gestao'>Gestão</h4>
                 <p className='txt2'>Na Velox Byte,nossa gestão é centrada em inovação e eficiência. Com líderes experientes e uma equipe colaborativa, buscamos continuamente melhorar nossos processos e resultados. Estamos comprometidos com o crescimento e sucesso de nossos colaboradores e preparados para enfrentar novos desafios e aproveitar oportunidades futuras.</p>
                </div>

                <div className='qdq2'>
                 <img src="/assets/images/img1.png" alt="" />
                 <h4 className='gestao'>Projetos</h4>
                 <p className='txt3'>Somos especializados no desenvolvimento de sites e plataformas para jovens empreendedores e autônomos.
                Clique no botão abaixo e seja direcionado a um dos nossos sites de projeto!</p>
                <button className='botao' href="">Clique aqui!</button>
                </div>
            </div>
            </div>

            

        






    )
}