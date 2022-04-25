import { useEffect, useState } from 'react';

//Importando API
import api from '../../services/api';

//Importando Componentes
import { HomeContainer } from "../Home/styles";
import { Repo, Repos, Site, SiteDescription, SiteImg, SiteNome, SitesTitulo, SitesUpados } from "./styles";

//Imagens Projeto
import imagemSeleca from '../../assets/bandeiranacionalbrasil.jpg';
import gifSeleca from '../../assets/Home.gif';
import imagemLista from '../../assets/ListaDeTarefas.JPG';
import gifLista from '../../assets/Adicionar.gif';
import imagemNetfilmes from '../../assets/NetFilmes.JPG';
import gifNetfilmes from '../../assets/NetFilmes.gif';

export default function Projetos(){

    const [repo, setRepo] = useState([]);

    useEffect(()=>{

        async function loadRepo(){
            const response = await api.get('/users/GuilhermeManfrin134/repos');

            setRepo(response.data);
        }

        loadRepo();

    }, []);

    return(
        <HomeContainer>
            <SitesTitulo>
                Sites Upados
            </SitesTitulo>
            <SitesUpados>
                <Site>
                    <a href="https://escalesuaseleca.netlify.app/" target='_blank' rel="noreferrer">
                        <SiteNome>Escale sua seleção</SiteNome>
                        <SiteImg>
                            <img className="img" src={imagemSeleca} alt="Escale sua seleção"/>
                            <img className="gif" src={gifSeleca} alt="Escale sua seleção"/>
                        </SiteImg>
                        <SiteDescription>
                            Seja o técnico da seleção brasileira! Você já se imaginou como o técnico do Brasil em uma Copa do Mundo? Agora você pode!!!
                            A Copa do Qatar em 2022 está chegando, se tivesse o poder de Tite, quem seriam os seus escolhidos?
                        </SiteDescription>
                    </a>
                </Site>
                <Site>
                    <a href="https://liste-suas-tarefas-diarias.netlify.app/" target='_blank' rel="noreferrer">
                        <SiteNome>Lista de Tarefas</SiteNome>
                        <SiteImg>
                            <img className="img" src={imagemLista} alt="Lista de Tarefas"/>
                            <img className="gif" src={gifLista} alt="Lista de Tarefas"/>
                        </SiteImg>
                        <SiteDescription>
                            Projeto de uma lista de tarefas, com opções de ordenagem, filtragem, checagem e exclusão.
                        </SiteDescription>
                    </a>
                </Site>
                <Site>
                    <a href="https://net-filmes.netlify.app/" target='_blank' rel="noreferrer">
                        <SiteNome>NetFilmes</SiteNome>
                        <SiteImg>
                            <img className="img" src={imagemNetfilmes} alt="Lista de Tarefas"/>
                            <img className="gif" src={gifNetfilmes} alt="Lista de Tarefas"/>
                        </SiteImg>
                        <SiteDescription>
                            Site criado com React JS, utilizando API de filmes com opções de listagem e seleção de favoritos.
                        </SiteDescription>
                    </a>
                </Site>
            </SitesUpados>

            <SitesTitulo>Repositórios</SitesTitulo>
            <Repos>
                {
                    repo.map((item, index) => (
                        <a target='_blank' rel="noreferrer" href={item.html_url} key={index}>
                            <Repo>
                                {item.name}
                            </Repo>
                        </a>
                    ))
                }
            </Repos>
        </HomeContainer>
    )
}