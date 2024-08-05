import styled from 'styled-components';

export const ContainerGeral = styled.div`
    width: 100%;
    display: block;
    position:fixed;
    height: 90px;
    z-index: 99;

    @media(max-width:1021px ){
     height: 130px;
     padding: 10px 0 0 0;
    }

    @media(max-width:700px ){
        height: 120px;
    }
`;

export const FaixaSuperior = styled.div`
    width: 100%;
    height: 30px;
    background-color: #f1f1f1;
    display: flex;
    padding-right:20px;
    justify-content: end;
    
    @media(max-width:1021px ){
      display:none ;
    }
`;

export const ContainerItemFaixa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: rgba(0,0,0,0);

    @media(max-width:1021px ){
        display:none ;
    }

`;

export const BarraFaixaS = styled.p`
    margin: 0 12px;
    font-size: 20px;
    font-weight: bold;
    color: black;
    background-color: rgba(0,0,0,0);

    @media(max-width:1021px ){
        display: none;
    }
`;

export const ItensFaixaS = styled.p`
    font-size: 11px;
    color: black;
    margin-right: 10px;
    cursor: pointer;
    background-color: rgba(0,0,0,0);
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    &:hover{
        color:gray;
    }
    @media(max-width:1021px ){
        display: none;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width:1021px ){
        display:block;
    }
`;

export const Faixa = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    background-color: #f1f1f1;
    padding-top: 90px;

    @media(max-width:1021px ){
     height: 50px;
    }

`;

export const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width:1021px ){
     justify-content: space-between;
    }

`;

export const Logo = styled.img`
 cursor: pointer;
width: 90px;
height: 55px;
`;

export const ButtonContainerLogo = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: white;
    margin: 10px;

    &:hover {
        background-color: #f2f2f2;
    }
    @media(max-width:1021px ){
        width: 10%;
        justify-content: space-evenly;
    }

    @media(min-width:1021px ){
     display:none ;
    }

`;

export const ButtonIconLogo = styled.img`
    width: 20px;
    background-color: rgba(0,0,0,0);

    @media(min-width:1021px ){
        display:none ;
    }

`;

export const ContainerNav = styled.div`
width: 40%;
height: 100%;
 display: flex;
 justify-content: space-around;
 align-items: center;

 @media(max-width:1021px ){
        display: none;
    }
`;

export const Li = styled.li`
    font-size: 13px;
    text-decoration: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    list-style: none;
    cursor: pointer;
    height: 50%;
    margin-top: 20px;

    &:hover{
        border-bottom: solid 2px black;
    }
    @media(max-width:1021px ){
      display:none ;
    }

`;
export const ContainerSearch = styled.div`
 display: flex;
justify-content: space-evenly;
align-items: center;
height: 55px;
`;



export const SearchInputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 35px;
    border-radius: 40px;
    background-color: #f1f1f1;
    border: none;
    margin-right: 10px;
    cursor: text;

    &:hover{
        background-color: #d3d3d3;
        border: solid blue 1px;
    }

    @media(max-width:1021px ){
     width:80%;
     justify-content:start;
     padding-left: 10px;
    }
`;

export const SearchLogo = styled.img`
    width: 15px;
    height: 11px;
    padding: 0 3px 0 4px;
    background-color: rgba(0,0,0,0);
`;

export const SearchInput = styled.input`
    width: 100px;
    height: 35px;
    border: none;
    box-shadow: 0 0 0 0;
    text-decoration: none;
    outline: 0;
    background-color: rgba(0,0,0,0);

    
`;

export const ButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: white;
    margin: 10px;

    &:hover {
        background-color: #f2f2f2;
    }

    @media(max-width:1021px ){
     display:none ;
    }

`;

export const ButtonIcon = styled.img`
    width: 20px;
    background-color: rgba(0,0,0,0);

    @media(max-width:1021px ){
        display:none ;
    }

`;

