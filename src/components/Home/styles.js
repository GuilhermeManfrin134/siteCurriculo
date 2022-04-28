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
            font-size: 100px;
            cursor: pointer;

            transition: ease-in-out .2s;
            -webkit-transition: ease-in-out .2s;
            -moz-transition: ease-in-out .2s;

            color: #FFF;

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
        .whatsapp{
            :hover{
                color: #25D366;
            }
        }
        .linkedin{
            :hover{
                color: #0e76a8;
            }
        }
        .instagram{
            :hover{
                color: #E1306C;
            }
        }
        .gmail{
            :hover{
                color: #db4a39;
            }
        }
        .github{
            :hover{
                color: #171515;
            }
        }
    }
`;

export const Selection = styled.div`
    width: 85%;
    height: 40px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
`;

export const ButtonSelection = styled.button`
    width: 33%;
    height: 100%;
    text-align: center;
    border: 3px solid #FFF;
    background: linear-gradient(to bottom right, var(--primaryColor) 0%, rgba(2,0,36,1) 100%);
    color: #FFF;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;

    transition: ease-in-out .3s;
    -webkit-transition: ease-in-out .3s;
    -moz-transition: ease-in-out .3s;

    :hover{
        font-size: 17px;
        background: linear-gradient(to bottom right, rgba(2,0,36,1) 0%, var(--primaryColor) 100%);
    }

    :first-child{
        border-radius: 10px 0 0 10px;
    }
    :last-child{
        border-radius: 0 10px 10px 0;
    }

    @media screen and (max-width: 810px){
        font-size: 14px;
        :hover{
            font-size: 13px;
            background: linear-gradient(to bottom right, rgba(2,0,36,1) 0%, var(--primaryColor) 100%);
        }
    }
    @media screen and (max-width: 600px){
        font-size: 12px;
        :hover{
            font-size: 11px;
            background: linear-gradient(to bottom right, rgba(2,0,36,1) 0%, var(--primaryColor) 100%);
        }
    }
    @media screen and (max-width: 400px){
        font-size: 10px;
        :hover{
            font-size: 9px;
            background: linear-gradient(to bottom right, rgba(2,0,36,1) 0%, var(--primaryColor) 100%);
        }
    }
`;