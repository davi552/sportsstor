
import { Bloco, ButtonBloco, ContainerBloco, ContentBlocos, TextBloco, TitleBloco } from './blocos'

interface Iprops{
    imageUrl:any;
    imageUrl1: any;
    imageUrl2:any;
}

function Parte ({imageUrl, imageUrl1, imageUrl2}: Iprops){
   return(
        <ContainerBloco>
            <TitleBloco>Conheça também</TitleBloco>
            <ContentBlocos>
                <Bloco style={{background:`url(${imageUrl})`, backgroundSize:`450px`, backgroundPosition:`50% 50%`}}>
                    <TextBloco>responda a este quis e descrubra qual</TextBloco>
                    <ButtonBloco>Ver Mais</ButtonBloco>
                </Bloco>
                <Bloco style={{background:`url(${imageUrl1})`, backgroundSize:`450px`, backgroundPosition:`60% 40%`}}>
                    <TextBloco>responda a este quis e descrubra qual</TextBloco>
                    <ButtonBloco>Ver Mais</ButtonBloco>
                </Bloco>
                <Bloco style={{background:`url(${imageUrl2})`, backgroundSize:`450px`, backgroundPosition:`60% 40%`}}>
                    <TextBloco>responda a este quis e descrubra qual</TextBloco>
                    <ButtonBloco>Ver Mais</ButtonBloco>
                </Bloco>
            </ContentBlocos>
        </ContainerBloco>
   )
}

export default Parte;