import { CepFooter, ConainerLogoFooter, ContentNav, FooterContainer, FooterContent, FooterLogoBandeiras, FooterNav, FooterRodape, LogoBandeiras, LogoFooter, NavFooterItem, NavRodapeItem, TitleNavItem, TitleNavItemA } from './footer';
import Facebook from '../../assets/facebook.png';
import Visa from '../../assets/visto.png';
import Mastercard from '../../assets/cartao.png';
import Instagram from '../../assets/instagram.png';



function ComponentFooter (){
    return(
        <FooterContainer>
            <FooterContent>
                <FooterNav>
                    <ContentNav>
                        <TitleNavItem>Principal</TitleNavItem>
                        <NavFooterItem>Encontre Uma Loja</NavFooterItem>
                        <NavFooterItem>Cadastre-se para receber</NavFooterItem>
                        <NavFooterItem>Novidades</NavFooterItem>
                        <NavFooterItem>Cartão presente</NavFooterItem>
                        <NavFooterItem>Mapa do site</NavFooterItem>
                        <NavFooterItem>Sports Store Journal</NavFooterItem>
                    </ContentNav>
                    <ContentNav>
                        <TitleNavItem>Ajuda</TitleNavItem>
                        <NavFooterItem>Dúvidas Gerais</NavFooterItem>
                        <NavFooterItem>Encontre seu Tamanho</NavFooterItem>
                        <NavFooterItem>Entregas</NavFooterItem>
                        <NavFooterItem>Pedidos</NavFooterItem>
                        <NavFooterItem>Devoluções</NavFooterItem>
                        <NavFooterItem>Pagamentos</NavFooterItem>
                        <NavFooterItem>Produtos</NavFooterItem>
                        <NavFooterItem>Corporativo</NavFooterItem>
                        <NavFooterItem>Fale Conosco</NavFooterItem>
                    </ContentNav>
                    <ContentNav>
                        <TitleNavItem>Sobre Nós</TitleNavItem>
                        <NavFooterItem>Propósito</NavFooterItem>
                        <NavFooterItem>sustentabilidade</NavFooterItem>
                        <NavFooterItem>sobre a sport store, inc.</NavFooterItem>
                    </ContentNav>
                    <ContentNav>
                        <TitleNavItemA>Redes sociais</TitleNavItemA>
                        <ConainerLogoFooter>
                            <LogoFooter alt='' src={Facebook}/>
                            <LogoFooter alt='' src={Instagram}/>
                            <LogoFooter alt='' src={Instagram}/>
                        </ConainerLogoFooter>
                        <TitleNavItemA>Formas de pagamento</TitleNavItemA>
                        <FooterLogoBandeiras>
                            <LogoBandeiras alt='' src={Visa}/>
                            <LogoBandeiras alt='' src={Mastercard}/>
                            <LogoBandeiras alt='' src={Visa}/>
                            <LogoBandeiras alt='' src={Mastercard}/>
                            <LogoBandeiras alt='' src={Visa}/>
                            <LogoBandeiras alt='' src={Mastercard}/>
                            <LogoBandeiras alt='' src={Visa}/>
                        </FooterLogoBandeiras>
                    </ContentNav>
                </FooterNav>
                <FooterRodape>
                    <NavRodapeItem>Brasil</NavRodapeItem>
                    <NavRodapeItem>Política de Privacidade</NavRodapeItem>
                    <CepFooter>© 2024. Todos os direitos reservados. Fisia Comércio de Produtos Esportivos Ltda - CNPJ: 00.000.000/0000-00 Rodovia Fernão Dias, S/N Km <br></br> 000.0 - Galpão Modulo 0000 - CEP 00000-000 - Extrema - SP</CepFooter>
                </FooterRodape>
            </FooterContent>
        </FooterContainer>
    )
};

export default ComponentFooter;