import styled from "styled-components";

export const SitesTitulo = styled.div`
    font-size: 30px;
    text-align: center;
    font-weight: 800;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 25px;
    padding-bottom: 5px;
    border-bottom: 2px solid #FFF;

    transition: ease-in-out .2s;
    -webkit-transition: ease-in-out .2s;
    -moz-transition: ease-in-out .2s;
`;

export const SitesUpados = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    margin-bottom: 20px;
`;

export const Site = styled.div`
    box-sizing: border-box;
    width: 300px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border: 3px solid #FFF;
    border-radius: 10px;
    background: linear-gradient(to bottom right, var(--primaryColor) 0%, rgba(2,0,36,1) 100%);
    box-shadow: 2px 2px 5px 3px var(--primaryColor);

    @media screen and (max-width: 1200px){
        width: 250px;
    }
    @media screen and (max-width: 1100px){
        width: 200px;
    }
    @media screen and (min-width: 769px){
        :hover{
            
            transform: scale(0.9);
            -webkit-transform: scale(0.9);
            -moz-transform: scale(0.9);

        }
    }
    @media screen and (max-width: 768px){
        width: 150px;
    }
    @media screen and (max-width: 600px){
        width: 100%;
    }

    a{
        text-decoration: none;
    }

    transition: ease-in-out .2s;
    -webkit-transition: ease-in-out .2s;
    -moz-transition: ease-in-out .2s;

    .gif{
        display: none;
    }

    :hover{
        .gif{
            display: block;
            height: 100%;
            width: auto;
        }
        .img{
            display: none;
        }
    }
`;

export const SiteNome = styled.div`
    text-align: center;
    font-size: 25px;
    color: #FFF;
    font-weight: 700;
    padding-bottom: 3px;

    @media screen and (max-width: 1200px){
        font-size: 20px;
    }
    @media screen and (max-width: 1100px){
        font-size: 16px;
    }
`;

export const SiteImg = styled.div`
    text-align: center;
    font-size: 20px;
    color: #FFF;
    border-top: 3px solid #FFF;
    border-bottom: 3px solid #FFF;
    width: 100%;
    height: 180px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1200px){
        height: 150px;
    }
    @media screen and (max-width: 1100px){
        height: 120px;
    }
    @media screen and (max-width: 768px){
        height: 80px;
    }
    @media screen and (max-width: 600px){
        height: 180px;
    }
    @media screen and (max-width: 400px){
        height: 120px;
    }

    transition: ease-in-out .2s;
    -webkit-transition: ease-in-out .2s;
    -moz-transition: ease-in-out .2s;

    img{
        width: 100%;
    } 
`;

export const SiteDescription = styled.div`
    text-align: justify;
    font-size: 14px;
    box-sizing: border-box;
    color: #FFF;
    padding: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 22px;
    max-height: 80px;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;

    @media screen and (max-width: 1200px){
        font-size: 12px;
    }
`;

export const Repos = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;

    a{
        cursor: pointer;
        text-decoration: none;

        @media screen and (max-width: 800px){
            width: 100%;
        }
        
        :hover{
            transform: scale(1.1);
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
        }
    }

`;

export const Repo = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 300px;
    height: 40px;
    font-size: 18px;
    color: #FFF;
    font-weight: 700;
    border-bottom: 3px solid #FFF;
    border: 3px solid #FFF;
    border-radius: 10px;
    padding-left: 10px;
    margin-bottom: 10px;
    box-shadow: 2px 2px 5px 3px var(--primaryColor);
    background: linear-gradient(to bottom right, var(--primaryColor) 0%, rgba(2,0,36,1) 100%);

    @media screen and (max-width: 800px){
        width: 100%;
        padding-left: 20px;
    }
    @media screen and (max-width: 410px){
        font-size: 14px;
    }
    @media screen and (max-width: 320px){
        font-size: 10px;
    }
`;