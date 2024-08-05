import { ContainerIcone, ContentIcons, ContentProduto, IconeText, ImgIcone, TitleIcone } from './styled';

interface Iprops {
    imageIcone1: any,
    imageIcone2: any,
    imageIcone3: any,
    textIcon1: string,
    textIcon2: string,
    textIcon3: string,
    titleIcon: string,
}


function Icones ({imageIcone3, imageIcone2, imageIcone1, textIcon3, textIcon2, textIcon1, titleIcon}: Iprops) {
    return(
        <>
            <ContainerIcone>
                <TitleIcone>{titleIcon}</TitleIcone>
                <ContentIcons>
                    <ContentProduto>
                        <ImgIcone alt='' src={imageIcone1}/>
                        <IconeText>{textIcon1}</IconeText>
                    </ContentProduto>
                    <ContentProduto>
                        <ImgIcone alt='' src={imageIcone2}/>
                        <IconeText>{textIcon2}</IconeText>
                    </ContentProduto><ContentProduto>
                        <ImgIcone alt='' src={imageIcone3}/>
                        <IconeText>{textIcon3}</IconeText>
                    </ContentProduto>
                </ContentIcons>
            </ContainerIcone>
        </>
    )
};

export default Icones;