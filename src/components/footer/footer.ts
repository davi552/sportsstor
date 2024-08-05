import styled from 'styled-components';

export const FooterContainer = styled.div`
   height: 75vh;
   width: 100%;
   display:flex;
   justify-content: center;
   align-items:center;
   background-color:black;
   padding: 20px 0 ;

   @media(max-width:1021px ){
        height:100vh;
    }
`;

export const FooterContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
    width: 80%;
    height: 100%;
    background-color: black;
`;

export const FooterNav = styled.div`
   display:grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   align-items:center;
   width:100%;
   height: 100%;
   background-color:black;

   @media(max-width:1021px ){
        display:block;
    }
`;

export const FooterRodape = styled.div`
   width:100%;
   height:100%;
   display:flex;
   justify-content:space-between;
   align-items: center;
   border-top: white 1px solid;
   background-color:black;

   @media(max-width:1021px ){
        display:block;
        align-items:center;
    }
`;

export const ContentNav = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    width:100%;
    align-self: flex-start;
    row-gap: 5px;
    background-color:black;

    @media(max-width:1021px ){
        margin-bottom:15px;
    }
`;

export const TitleNavItem = styled.p`
    font-size: 20px;
    text-align: left;
    text-decoration: none;
    list-style: none;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: rgba(0,0,0,0);
`;

export const TitleNavItemA = styled.p`
    font-size: 15px;
    margin-bottom: 10px;
    text-align: left;
    text-decoration: none;
    list-style: none;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: rgba(0,0,0,0);
`;

export const NavFooterItem = styled.li`
    font-size: 14px;
    text-align: left;
    text-decoration: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    list-style: none;
    cursor: pointer;
    color: white;
    background-color: rgba(0,0,0,0);

    &:hover {
        color:gray;
    }
`;

export const ConainerLogoFooter = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    height: 30px;
    background-color:black;
`;

export const FooterLogoBandeiras = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 5px;
    width:80%;
    background-color:black;

    @media(max-width:1021px ){
        width:50%;
    }
`;

export const LogoFooter = styled.img`
    background-position: 50% 50%;
    background-repeat: no-repeat;
    width: 25px;
    height: 25px;
    margin-right:7px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
`;

export const LogoBandeiras = styled.img`
    width: 35px;
    height: 25px;
    border-radius: 0;
    padding:0;
    margin:0;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-color: white;
    border: solid white 3px;
    cursor: pointer;

`;

export const NavRodapeItem = styled.li`
    font-size: 14px;
    text-align: left;
    text-decoration: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    list-style: none;
    cursor: pointer;
    color: white;
    background-color: rgba(0,0,0,0);

    &:hover {
        color:gray;
    }

    @media(max-width:1021px ){
        text-align:center;
    }
`;

export const CepFooter = styled.p`
    font-size: 10px;
    text-align: end;
    background-color: black;
    color: white;

    @media(max-width:1021px ){
        text-align:center;
    }
`;