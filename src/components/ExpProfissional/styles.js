import styled from "styled-components";

export const Trabalho = styled.div`
    box-sizing: border-box;
    width: 80%;
    padding: 10px 10px 10px 20px;
    background: linear-gradient(to bottom right, var(--primaryColor) 0%, rgba(2,0,36,1) 100%);
    box-shadow: 2px 2px 5px 3px var(--primaryColor);
    border: 3px solid #FFF;
    border-radius: 10px;
    margin-bottom: 15px;

    @media screen and (max-width: 600px){
        width: 90%;
    }
`;

export const TrabalhoTitulo = styled.div`
    font-size: 25px;
    font-weight: 800;

    @media screen and (max-width: 800px){
        font-size: 22px;
    }
    @media screen and (max-width: 680px){
        font-size: 19px;
    }
    @media screen and (max-width: 540px){
        font-size: 16px;
    }
    @media screen and (max-width: 460px){
        font-size: 13px;
    }
`;
export const Empresa = styled.div`
    font-size: 22px;
    font-weight: 700;

    @media screen and (max-width: 800px){
        font-size: 19px;
    }
    @media screen and (max-width: 680px){
        font-size: 16px;
    }
    @media screen and (max-width: 540px){
        font-size: 13px;
    }
    @media screen and (max-width: 460px){
        font-size: 10px;
    }
`;
export const TrabalhoDuracao = styled.div`
    font-size: 22px;
    font-weight: 500;

    @media screen and (max-width: 800px){
        font-size: 19px;
    }
    @media screen and (max-width: 680px){
        font-size: 16px;
    }
    @media screen and (max-width: 540px){
        font-size: 13px;
    }
    @media screen and (max-width: 460px){
        font-size: 10px;
    }
`;

export const Funcoes = styled.div`
    margin-top: 20px;
    font-size: 20px;
    font-weight: 700;

    @media screen and (max-width: 800px){
        font-size: 17px;
    }
    @media screen and (max-width: 680px){
        font-size: 14px;
    }
    @media screen and (max-width: 540px){
        font-size: 11px;
    }
    @media screen and (max-width: 460px){
        font-size: 9px;
    }
`;
export const Funcao = styled.li`
    font-size: 18px;
    font-weight: 500;
    margin-top: 5px;

    @media screen and (max-width: 800px){
        font-size: 15px;
    }
    @media screen and (max-width: 680px){
        font-size: 12px;
    }
    @media screen and (max-width: 500px){
        font-size: 10px;
    }
    @media screen and (max-width: 460px){
        font-size: 9px;
    }
    @media screen and (max-width: 385px){
        font-size: 8px;
    }
`;