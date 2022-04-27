//Importando Componentes de Estilização
import { HomeContainer } from "../Home/styles";
import { SitesTitulo } from "../Projetos/styles";
import { Certificado, Curso, CursoConclusao, CursoLine, CursoLocal, CursoTitulo, Formacao, FormacaoDuracao, FormacaoLine, FormacaoTitulo, FormacaoUniversidade } from "./styles";

//Importando Icons
import { SiGooglemaps } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';

//Importando Certificados
import reactCurso from '../../assets/reactCurso.jpg';
import websites from '../../assets/websites.jpg';
import logica from '../../assets/logica.jpg';
import javascript from '../../assets/javascript.jpg';
import git_github from '../../assets/git-github.jpg';
import certificado_off from '../../assets/Certificado_Não_Digitalizado.png';

export default function VidaAcademica(){
    return(
        <HomeContainer>
            <SitesTitulo>
                Formação
            </SitesTitulo>
            <Formacao>
                <FormacaoTitulo>
                    Tecnólogo em Análise e Desenvolvimento de Sistemas
                </FormacaoTitulo>
                <FormacaoUniversidade>
                    Universidade Cruzeiro do Sul
                </FormacaoUniversidade>
                <FormacaoDuracao>
                    Fev 2020 - Dez 2021
                </FormacaoDuracao>
                <FormacaoLine>
                    <a href="https://goo.gl/maps/2VScqpU7xvgx6omf9" target='_blank' rel="noreferrer">
                        <SiGooglemaps/>
                    </a>
                    <a href="https://www.cruzeirodosul.edu.br/" target='_blank' rel="noreferrer">
                        <CgWebsite/>
                    </a>
                    <FormacaoUniversidade>
                        - Notas Mec: 4
                    </FormacaoUniversidade>
                </FormacaoLine>

                <FormacaoTitulo>
                    Ensino Médio Completo
                </FormacaoTitulo>
                <FormacaoUniversidade>
                    Escola Estadual Professora Leonor Rendesi
                </FormacaoUniversidade>
                <FormacaoDuracao>
                    Fev 2017 - Dez 2019
                </FormacaoDuracao>
                <FormacaoLine>
                    <a href="https://goo.gl/maps/TxHpi9B83LU3rMex9" target='_blank' rel="noreferrer">
                        <SiGooglemaps/>
                    </a>
                    <a href="https://novo.qedu.org.br/escola/35040964-leonor-rendesi-professora" target='_blank' rel="noreferrer">
                        <CgWebsite/>
                    </a>
                    <FormacaoUniversidade>
                        - Avaliação: 4.4
                    </FormacaoUniversidade>
                </FormacaoLine>

                <FormacaoTitulo>
                    Ensino Fundamental Completo
                </FormacaoTitulo>
                <FormacaoUniversidade>
                    EMEF Marechal Juarez Távora
                </FormacaoUniversidade>
                <FormacaoDuracao>
                    Fev 2009 - Dez 2016
                </FormacaoDuracao>
                <FormacaoLine>
                    <a href="https://goo.gl/maps/QP3xMy8X7gwinvtx8" target='_blank' rel="noreferrer">
                        <SiGooglemaps/>
                    </a>
                    <a href="https://novo.qedu.org.br/escola/35042006-juarez-tavora-marechal" target='_blank' rel="noreferrer">
                        <CgWebsite/>
                    </a>
                    <FormacaoUniversidade>
                        - Avaliação: 4.8
                    </FormacaoUniversidade>
                </FormacaoLine>
            </Formacao>

            <SitesTitulo>
                Cursos Certificados
            </SitesTitulo>
            <Curso>
                    <Certificado>
                        <img src={reactCurso} alt="Certificado"/>
                    </Certificado>
                    <CursoLine>
                        <CursoTitulo>
                            React Js do zero ao avançado na prática
                        </CursoTitulo>
                        <CursoLocal>
                            Sujeito Programador - Udemy
                        </CursoLocal>
                        <CursoConclusao>
                            22h - Concluído em 2022
                        </CursoConclusao>
                    </CursoLine>
            </Curso>

            <Curso>
                <Certificado>
                    <img src={certificado_off} alt="Certificado"/>
                </Certificado>
                <CursoLine>
                    <CursoTitulo>
                        Assistente técnico de Hardware e Redes
                    </CursoTitulo>
                    <CursoLocal>
                        Microlins
                    </CursoLocal>
                    <CursoConclusao>
                        Concluído em 2018
                    </CursoConclusao>
                </CursoLine>
            </Curso>

            <Curso>
                <Certificado>
                    <img src={certificado_off} alt="Certificado"/>
                </Certificado>
                <CursoLine>
                    <CursoTitulo>
                        Informática Básica
                    </CursoTitulo>
                    <CursoLocal>
                        Microlins
                    </CursoLocal>
                    <CursoConclusao>
                        Concluído em 2017
                    </CursoConclusao>
                </CursoLine>
            </Curso>

            <Curso>
                <Certificado>
                    <img src={git_github} alt="Certificado"/>
                </Certificado>
                <CursoLine>
                    <CursoTitulo>
                        Introdução ao Git e GitHub
                    </CursoTitulo>
                    <CursoLocal>
                        Digital Innovation One
                    </CursoLocal>
                    <CursoConclusao>
                        Concluído em 2021
                    </CursoConclusao>
                </CursoLine>
            </Curso>

            <Curso>
                <Certificado>
                    <img src={logica} alt="Certificado"/>
                </Certificado>
                <CursoLine>
                    <CursoTitulo>
                        Lógica de programação essencial
                    </CursoTitulo>
                    <CursoLocal>
                        Digital Innovation One
                    </CursoLocal>
                    <CursoConclusao>
                        Concluído em 2021
                    </CursoConclusao>
                </CursoLine>
            </Curso>

            <Curso>
                <Certificado>
                    <img src={websites} alt="Certificado"/>
                </Certificado>
                <CursoLine>
                    <CursoTitulo>
                        Introdução a criação de websites com HTML5 e CSS3
                    </CursoTitulo>
                    <CursoLocal>
                        Digital Innovation One
                    </CursoLocal>
                    <CursoConclusao>
                        Concluído em 2021
                    </CursoConclusao>
                </CursoLine>
            </Curso>

            <Curso>
                <Certificado>
                    <img src={javascript} alt="Certificado"/>
                </Certificado>
                <CursoLine>
                    <CursoTitulo>
                        Programação para Internet com JavaScript
                    </CursoTitulo>
                    <CursoLocal>
                        Digital Innovation One
                    </CursoLocal>
                    <CursoConclusao>
                        Concluído em 2021
                    </CursoConclusao>
                </CursoLine>
            </Curso>
        </HomeContainer>
    )
}