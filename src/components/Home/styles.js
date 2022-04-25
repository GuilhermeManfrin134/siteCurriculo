import styled from 'styled-components';

export const HomeContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DadosContainer = styled.div`
    box-sizing: border-box;
    width: 95%;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (min-width: 1500px){
        justify-content: center;
    }
    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`;

export const ImgContainer = styled.div`
    box-sizing: border-box;
    width: 230px;
    height: 230px;
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0px 5px 0px 4px #FFF;
    overflow: hidden;

    transition: ease-in-out .2s;
    -webkit-transition: ease-in-out .2s;
    -moz-transition: ease-in-out .2s;

    img{
        width: 100%;
    }

    @media screen and (min-width: 1500px){
        margin-right: 40px;
    }
    @media screen and (max-width: 750px){
        width: 150px;
        height: 150px;
    }
`;

export const Dados = styled.div`
    box-sizing: border-box;
    width: 800px;

    transition: ease-in-out .2s;
    -webkit-transition: ease-in-out .2s;
    -moz-transition: ease-in-out .2s;
    
    @media screen and (max-width: 1200px){
        width: 700px;
    }
    @media screen and (max-width: 1100px){
        width: 60%;
    }
    @media screen and (max-width: 750px){
        margin-top: 20px;
        width: 95%;
    } 
`;

export const NomeCompleto = styled.div`
    font-size: 30px;
    text-align: center;
    font-weight: 800;

    transition: ease-in-out .2s;
    -webkit-transition: ease-in-out .2s;
    -moz-transition: ease-in-out .2s;

    @media screen and (max-width: 750px){
        text-align: left;
    } 
    @media screen and (max-width: 500px){
        font-size: 25px;
        text-align: center;
    } 
    @media screen and (max-width: 430px){
        font-size: 20px;
    } 
`;

export const DadosLine = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    padding: 5px;

    @media screen and (max-width: 810px){
        font-size: 17px;
    }
    @media screen and (max-width: 500px){
        font-size: 14px;
    } 
    @media screen and (max-width: 430px){
        font-size: 12px;
    } 
`;

export const Dado = styled.div`
    padding: 3px 15px;
    margin: 3px;
    background-color: #FFF;
    border-radius: 10px;
    color: var(--primaryColor);
    font-weight: 500;
`;

export const Description = styled.div`
    width: 80%;
    font-size: 20px;
    text-align: justify;
    font-weight: 700;

    @media screen and (max-width: 750px){
        font-size: 18px;
    }
    @media screen and (max-width: 600px){
        font-size: 15px;
    }
    @media screen and (max-width: 400px){
        font-size: 12px;
    }
`;

export const Redes = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 15px;
    margin-bottom: 15px;

    @media screen and (max-width: 340px){
        justify-content: space-around;
    }

    a{
        svg{
            color: #FFF;
            font-size: 100px;
            cursor: pointer;

            transition: ease-in-out .2s;
            -webkit-transition: ease-in-out .2s;
            -moz-transition: ease-in-out .2s;
        
            :hover{
                color: var(--hoverColor);
            }

            @media screen and (max-width: 680px){
                font-size: 70px;
            }
            @media screen and (max-width: 460px){
                font-size: 50px;
            }
            @media screen and (max-width: 340px){
                font-size: 40px;
            }
        }
    }
`;