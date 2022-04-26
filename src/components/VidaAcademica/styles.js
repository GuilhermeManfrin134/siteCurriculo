import styled from "styled-components";

export const Formacao = styled.div`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 10px;
    border: 3px solid #FFF;
    border-radius: 10px;
    background: linear-gradient(to bottom right, var(--primaryColor) 0%, rgba(2,0,36,1) 100%);
    box-shadow: 2px 2px 5px 3px var(--primaryColor);
`;

export const FormacaoTitulo = styled.div`
    font-size: 25px;
    font-weight: 800;
`;
export const FormacaoUniversidade = styled.div`
    font-size: 22px;
    font-weight: 700;
`;
export const FormacaoDuracao = styled.div`
    font-size: 22px;
    font-weight: 500;
`;
export const FormacaoLine = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;

    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 3px solid #FFF;

    a{
        margin-right: 10px;
    }

    svg{
        font-size: 35px;
        color: #FFF;
    }
`;