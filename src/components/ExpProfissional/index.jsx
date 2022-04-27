//Importando Icons
import { CgWebsite } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";

//Importando Componentes de Estilização
import { HomeContainer } from "../Home/styles";
import { SitesTitulo } from "../Projetos/styles";
import { FormacaoLine } from "../VidaAcademica/styles";
import { Empresa, Funcao, Funcoes, Trabalho, TrabalhoDuracao, TrabalhoTitulo } from "./styles";

export default function ExpProfissional(){
    return(
        <HomeContainer>
            <SitesTitulo>
                Experiências Profissionais
            </SitesTitulo>
            <Trabalho>
                <TrabalhoTitulo>
                    Aprendiz Aux. em Serviços de ADM - Tráfego
                </TrabalhoTitulo>
                <Empresa>
                    Viação Salutaris - Águia Branca
                </Empresa>
                <TrabalhoDuracao>
                    Jan 2020 - Mai 2021 ( 1 ano e 5 meses )
                </TrabalhoDuracao>
                <Funcoes>
                    Funções:
                    <Funcao>
                        Ajudante geral de serviços de ADM;
                    </Funcao>
                    <Funcao>
                        Recolher fichas entregues pelos motoristas para controle de viagens;
                    </Funcao>
                    <Funcao>
                        Orgazinar fichas em planilhas e enviar relatórios para matriz;
                    </Funcao>
                    <Funcao>
                        Conferir documentos de Ônibus antes de viagens;
                    </Funcao>
                    <Funcao>
                        Atender telefone para retirar dúvidas de clientes;
                    </Funcao>
                    <Funcao>
                        Controle de situações adversas;
                    </Funcao>
                    <Funcao>
                        Responsável pelo setor de Achados e Perdidos.
                    </Funcao>
                </Funcoes>
                <FormacaoLine>
                    <a href="https://www.linkedin.com/company/aguia-branca/" target='_blank' rel="noreferrer">
                        <FaLinkedin/>
                    </a>
                    <a href="https://www.aguiabranca.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=conversao-aquisicao-max-conversao-google-search-institucional-aguia-branca&utm_content=texto-institucional&utm_term=keywords-institucional&gclid=Cj0KCQjw06OTBhC_ARIsAAU1yOUjwaYDM-w4TDrw_OVoANtGcujbfLoFZ_ktyjhEyrVY0FP_y1Cg8c0aArOzEALw_wcB" target='_blank' rel="noreferrer">
                        <CgWebsite/>
                    </a>
                </FormacaoLine>
            </Trabalho>
        </HomeContainer>
    )
}