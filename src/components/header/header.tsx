import {
    Container, 
    ContainerLogo, 
    ContainerNav, 
    ContainerSearch, 
    SearchInputContainer,
    SearchInput,
    SearchLogo,
    Li,
    ButtonIcon,
    Logo,
    ButtonContainer,
    Faixa,
    ContainerGeral,
    FaixaSuperior,
    ItensFaixaS,
    ContainerItemFaixa,
    BarraFaixaS,
    ButtonContainerLogo,
    ButtonIconLogo
} from "./styled";
import Sacola from '../../assets/bolsa.png';
import Coracao from '../../assets/coracao.png';
import Lupa from '../../assets/lupa.png';
import Marca from '../../assets/logo.png';



function Header (){
    return(
        <>
            <ContainerGeral>
                <FaixaSuperior>
                    <ContainerItemFaixa>
                        <ItensFaixaS>Jornal</ItensFaixaS>
                    </ContainerItemFaixa>
                    <BarraFaixaS>|</BarraFaixaS>
                    <ContainerItemFaixa>
                        <ItensFaixaS>Ajuda</ItensFaixaS>
                    </ContainerItemFaixa>
                    <BarraFaixaS>|</BarraFaixaS>
                    <ContainerItemFaixa>
                        <ItensFaixaS>Junte-se a nós</ItensFaixaS>
                    </ContainerItemFaixa>
                    <BarraFaixaS>|</BarraFaixaS>
                    <ContainerItemFaixa>
                        <ItensFaixaS>Entre</ItensFaixaS>
                    </ContainerItemFaixa>
                </FaixaSuperior>
                <Container>
                    <ContainerLogo>
                        <Logo alt='' src={Marca}/>
                        <ButtonContainerLogo>
                            <ButtonIconLogo alt='' src={Sacola}/>
                            <ButtonIconLogo alt='' src={Coracao}/>
                        </ButtonContainerLogo>
                    </ContainerLogo>
                    <ContainerNav>
                        <Li>Lançamentos</Li>
                        <Li>Ofertas</Li>
                        <Li>Masculino</Li>
                        <Li>Feminino</Li>
                        <Li>Infantil</Li>
                    </ContainerNav>
                    <ContainerSearch>
                        <SearchInputContainer>
                            <SearchLogo alt='' src={Lupa}/>
                            <SearchInput placeholder="pesquisar"/>
                        </SearchInputContainer>
                        <ButtonContainer>
                            <ButtonIcon alt='' src={Coracao}/>
                        </ButtonContainer>
                        <ButtonContainer>
                            <ButtonIcon alt='' src={Sacola}/>
                        </ButtonContainer>
                    </ContainerSearch>
                </Container>
            </ContainerGeral>
            <Faixa></Faixa>
        </>
    )
}

export default Header;