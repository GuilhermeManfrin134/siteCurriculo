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

    @media screen and (max-width: 640px){
        font-size: 15px;
    }
    @media screen and (max-width: 375px){
        font-size: 13px;
    }
`;
export const FormacaoUniversidade = styled.div`
    font-size: 22px;
    font-weight: 700;

    @media screen and (max-width: 640px){
        font-size: 12px;
    }
    @media screen and (max-width: 375px){
        font-size: 10px;
    }
`;
export const FormacaoDuracao = styled.div`
    font-size: 22px;
    font-weight: 500;

    @media screen and (max-width: 640px){
        font-size: 12px;
    }
    @media screen and (max-width: 375px){
        font-size: 10px;
    }
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

    @media screen and (max-width: 640px){
        a{
            margin-right: 5px;
        }

        svg{
            font-size: 20px;
        }
    }
`;

export const Curso = styled.div`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    border: 3px solid #FFF;
    border-radius: 10px;
    background: linear-gradient(to bottom right, var(--primaryColor) 0%, rgba(2,0,36,1) 100%);
    box-shadow: 2px 2px 5px 3px var(--primaryColor);
    margin-bottom: 15px;
    padding: 10px;

    @media screen and (max-width: 560px){
        flex-direction: column;
    }
`;

export const Certificado = styled.div`
    width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #FFF;
    border-radius: 10px;
    overflow: hidden;

    @media screen and (max-width: 700px){
        width: 130px;
    }
    @media screen and (max-width: 560px){
        width: 100%;
    }

    img{
        width: 100%;
    }
`;
export const CursoLine = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;

    @media screen and (max-width: 700px){
        width: 70%;
    }
    @media screen and (max-width: 560px){
        width: 95%;
    }
    @media screen and (max-width: 400px){
        width: 90%;
    }
`;
export const CursoTitulo = styled.div`
    margin-bottom: 5px;
    font-size: 25px;
    font-weight: 700;

    @media screen and (max-width: 1040px){
        font-size: 20px;
    }
    @media screen and (max-width: 700px){
        font-size: 18px;
    }
    @media screen and (max-width: 560px){
        margin-top: 10px;
        text-align: justify;
    }
    @media screen and (max-width: 500px){
        font-size: 15px;
    }
`;
export const CursoConclusao = styled.div`
    font-size: 22px;
    font-weight: 500;

    @media screen and (max-width: 1040px){
        font-size: 17px;
    }
    @media screen and (max-width: 700px){
        font-size: 15px;
    }
    @media screen and (max-width: 500px){
        font-size: 12px;
    }
`;
export const CursoLocal = styled.div`
    font-size: 20px;
    font-weight: 500;

    @media screen and (max-width: 1040px){
        font-size: 17px;
    }
    @media screen and (max-width: 700px){
        font-size: 15px;
    }
    @media screen and (max-width: 500px){
        font-size: 12px;
    }
`;