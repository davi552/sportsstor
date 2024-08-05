import styled from 'styled-components';


export const ContainerIcone = styled.div`
    width: 100%;
    display: block;
    align-items: center;
    margin:0 0 150px 0;

`;

export const TitleIcone = styled.p`
    font-size: 35px;
    padding-left: 15%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const ContentIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentProduto = styled.div`
    display: block;
    align-items: center;
    margin: 0 10px;
    background-color: #f1f1f1;
`;

export const ImgIcone = styled.img`
    width: 300px;
    height: 50vh;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    cursor: pointer;

    @media(max-width:1021px ){
        width: 200px;
    }
`;

export const IconeText = styled.p`
    font-size: 40px;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
    "XROT" 0,
    "YROT" 0;
`;