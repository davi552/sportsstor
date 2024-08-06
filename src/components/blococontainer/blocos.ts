import styled from 'styled-components';

export const ContainerBloco = styled.div`
    display: grid;
    grid-template-columns:1fr;
    row-gap: 20px;
    align-items: center;
    height: 70vh;
    margin: 200px 0;

    @media(max-width:700px ){
        margin: 0;
    }
`;

export const TitleBloco = styled.p`
    font-size: 30px;
    text-align: left;
    margin-left:6%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const ContentBlocos = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-top: 40px;

    @media(max-width:500px ){
        display: block;
        height: 150vh;
    }
`;

export const Bloco = styled.div`
    display: block;
    cursor: pointer;
    width: 300px;
    height: 450px;
    padding-left:30px;
    margin-right:5px;
    overflow: hidden;
    transition: .3s all ease-in-out;

    &:hover{
        -webkit-transform: scale(1.02);
        transform: scale(1.01);
    }

    @media(max-width:1021px ){
        width: 400px;
    }

    @media(max-width:450px ){
        height: 300px;
        width: 100%;
        margin: 0 0 10px 0;
        padding: 0;
        align-items: center;
        border-radius: 5px;
        background-repeat: no-repeat;
    }
`;

export const TextBloco = styled.p`
    font-size: 15px;
    text-align: left;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top:360px;
    background-color:rgba(0,0,0,0);

    @media(max-width:500px ){
        margin: 190px 0 0 0;
        text-align: center;
    }
    
`;

export const ButtonBloco = styled.button`
    width: 100px;
    height: 30px;
    background-color: black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: white;
    align-items: center;
    cursor: pointer;
    border: none;
    border-radius: 40px;
    margin-top:20px;

    @media(max-width:500px ){
        margin-left: 37%;
    }
`;