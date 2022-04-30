import { useState } from "react";

//Importando Componentes
import Projetos from "../Projetos";

//Importando Componentes de Estilização
import { ButtonSelection, Dado, Dados, DadosContainer, DadosLine, Description, 
    HomeContainer, ImgContainer, NomeCompleto, Redes, Selection 
} from "./styles";
import { Tecnologias } from "../Projetos/styles";

//Importando Icones
import { 
    FaEnvelopeSquare, FaGithub, FaInstagramSquare, FaLinkedin, FaWhatsappSquare,
    FaReact, FaHtml5, FaCss3Alt, FaGitAlt
} from 'react-icons/fa';
import { SiJavascript } from "react-icons/si";

//Importando Imagens
import fotoPerfil from '../../assets/Foto_Perfil.jpeg';
import VidaAcademica from "../VidaAcademica";
import ExpProfissional from "../ExpProfissional";
import { TituloTec } from "../VidaAcademica/styles";

export default function Home(){

    const [projetos, setProjetos] = useState(true);
    const [vidaAcademica, setVidaAcademica] = useState(false);
    const [expProfissional, setExpProfissional] = useState(false);

    function click1(){
        setProjetos(true);
        setVidaAcademica(false);
        setExpProfissional(false);
    }
    function click2(){
        setProjetos(false);
        setVidaAcademica(true);
        setExpProfissional(false);
    }
    function click3(){
        setProjetos(false);
        setVidaAcademica(false);
        setExpProfissional(true);
    }

    return(
        <HomeContainer>
            <DadosContainer>
                <ImgContainer>
                    <img src={fotoPerfil} alt="Foto_Perfil"/>
                </ImgContainer>
                <Dados>
                    <NomeCompleto>
                        Guilherme Manfrin Pereira
                    </NomeCompleto>
                    <DadosLine>
                        <Dado>
                            20 anos
                        </Dado>
                        <Dado>
                            21/02/2002
                        </Dado>
                        <Dado>
                            Solteiro
                        </Dado>
                        <Dado>
                            Rua Francisco Mairink, 34 - Vila Constança.
                        </Dado>
                        <Dado>
                            São Paulo, SP.
                        </Dado>
                    </DadosLine>
                </Dados>
            </DadosContainer>

            <Description>
                <p>
                Em busca de minha primeira oportunidade profissional como Desenvolvedor Front-End Júnior, para que possa colocar em prática todos os meus conhecimentos, visando meu desenvolvimento profissional e o crescimento da empresa que me permita isso.
                </p>
            </Description>

            <Redes>
                <a href="https://github.com/GuilhermeManfrin134" target='_blank' rel="noreferrer">
                    <FaGithub className="github"/>
                </a>
                <a href="https://www.linkedin.com/in/guilherme-manfrin-pereira-4875a2207/" rel="noreferrer" target='_blank'>
                    <FaLinkedin className="linkedin"/>
                </a>
                <a href="mailto:manfrin11gui@gmail.com" target='_blank' rel="noreferrer">
                    <FaEnvelopeSquare className="gmail"/>
                </a>
                <a href="https://contate.me/gui.manfrin" target='_blank' rel="noreferrer">
                    <FaWhatsappSquare className="whatsapp"/>
                </a>
                <a href="https://www.instagram.com/gui.manfrin_134/" target='_blank' rel="noreferrer">
                    <FaInstagramSquare className="instagram"/>
                </a>
            </Redes>

            <Tecnologias>
                Estudo focado nas seguintes Tecnologias
            </Tecnologias>
            <Redes>
                <a className="react" href="https://pt-br.reactjs.org/" target='_blank' rel="noreferrer">
                    <FaReact className="react"/>
                    <TituloTec>React JS</TituloTec>
                </a>
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target='_blank' rel="noreferrer">
                    <FaHtml5 className="html"/>
                    <TituloTec>HTML 5</TituloTec>
                </a>
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target='_blank' rel="noreferrer">
                    <FaCss3Alt className="css"/>
                    <TituloTec>CSS 3</TituloTec>
                </a>
                <a href="https://git-scm.com/" target='_blank' rel="noreferrer">
                    <FaGitAlt className="git"/>
                    <TituloTec>Git</TituloTec>
                </a>
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target='_blank' rel="noreferrer">
                    <SiJavascript className="javascript"/>
                    <TituloTec>JavaScript</TituloTec>
                </a>
            </Redes>

            <Selection>
                <ButtonSelection onClick={click1}>Projetos</ButtonSelection>
                <ButtonSelection onClick={click2}>Vida Acadêmica</ButtonSelection>
                <ButtonSelection onClick={click3}>Experiência Profissional</ButtonSelection>
            </Selection>

            {
                projetos && <Projetos/>
            }
            {
                vidaAcademica && <VidaAcademica/>
            }
            {
                expProfissional && <ExpProfissional/>
            }
        </HomeContainer>
    )
}