//Importando Componentes de Estilização
import { HomeContainer } from "../Home/styles";
import { SitesTitulo } from "../Projetos/styles";
import { Formacao, FormacaoDuracao, FormacaoLine, FormacaoTitulo, FormacaoUniversidade } from "./styles";

//Importando Icons
import { SiGooglemaps } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';

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

            
        </HomeContainer>
    )
}