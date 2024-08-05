import {
    ContainerItem,
    ContentImagem,
    ImagemItem,
    ContentInfo,
    InfoItem,
    Inform,
    ContentButton,
    ButtonItem,
} from './styled';

interface Iprops {
    imagem: any;
    title: string;
    info: string;
    button: string;
    tamanho: string;
}

function Item ( {imagem, title, info, button, tamanho}:Iprops ){
    return(
        <>
            <ContainerItem>
                <ContentImagem>
                    <ImagemItem height={tamanho} alt='' src={imagem}/>
                </ContentImagem>
                <ContentInfo>
                    <InfoItem>{title}</InfoItem>
                </ContentInfo>
                <Inform>{info}</Inform>
                <ContentButton>
                    <ButtonItem>{button}</ButtonItem>
                </ContentButton>
            </ContainerItem>
        </>
    )
};

export default Item;