import styled from 'styled-components';

export const ContainerBloco = styled.div`
    display: grid;
    grid-template-columns:1fr;
    row-gap: 20px;
    align-items: center;
    height: 70vh;
    margin: 200px 0;
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
`;

export const TextBloco = styled.p`
    font-size: 12px;
    text-align: left;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top:360px;
    background-color:rgba(0,0,0,0);
    
`;

export const ButtonBloco = styled.button`
    width: 100px;
    height: 30px;
    background-color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: black;
    align-items: center;
    cursor: pointer;
    border: none;
    border-radius: 40px;
    margin-top:20px;
`;