import styled from 'styled-components';


export const ContainerItem = styled.div`
    width: 100%;
    height: 140vh;
    display: block;
    align-items: center;

    @media(max-width:1021px ){
        height: 100vh;
    }

`;

export const ContentImagem = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width:1021px ){
        height: 50%;
    }

`;

export const ImagemItem = styled.img <{height? : string}>`
    width: 80%;
    height: ${ ({height}) => height? height : '100%'};
    background-position: 50% 50%;
    background-repeat: no-repeat;
    cursor: pointer;

    @media(max-width:1021px ){
        height: 100%;
    }

`;

export const ContentInfo = styled.div`
    display: flex ;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
    font-family: "Tilt Warp", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "XROT" 0,
    "YROT" 0;
`;

export const InfoItem = styled.div`
    text-align: center;
    font-size: 40px;
    text-transform:uppercase;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export const Inform = styled.p`
    text-align: center;
    font-size: 15px;
    cursor: pointer;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`;

export const ContentButton = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonItem = styled.button`
    width: 90px;
    height: 35px;
    text-align: center;
    border-radius: 40px;
    background-color: black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: white;
    cursor: pointer;
    border: none;

    &:hover{
        background-color: gray;
    }
`;

//----------------------------------------------------------

export const ContainerVideo = styled.div`
    width: 100%;
    height: 105vh;
    display: block;
    align-items: center;
    margin: 0;
    padding: 2px 0 100px 0;

    @media(max-width:1021px ){
        height: 60vh;
    }

`;

export const ContentVideo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const VideoProp = styled.video`
    width: 80%;
    height: 100%;
    cursor: pointer;
    border: solid black 5px;

    @media(max-width:1021px ){
        height: 55%;
    }
`;