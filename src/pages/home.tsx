import Icones from "../components/icones/icones";
import Item from "../components/item/item";
import VideoItem from "../components/item/video";
import Slide from "../components/swiper/swiper";
import VideoGol from "../assets/videoGol1.mp4"
import Tenis3 from "../assets/tenisLaranja.JPG"
import Tenis4 from "../assets/tenisPretoVermelho.JPG"
import Tenis5 from "../assets/tenisPretoamarelo.JPG"
import Tenis8 from "../assets/tenisVermelho.JPG"
import Banner from "../assets/Gemini_Generated_Image_3p8y3n3p8y3n3p8y.jpg";
import Camisa2 from "../assets/camisaVermelha.JPG"
import Camisa3 from "../assets/camisaListrada.JPG"
import Camisa4 from "../assets/camisaAzul.JPG"
import Camisa5 from "../assets/camisaAmarela.JPG"
import Parte from "../components/blococontainer/blocosContainer";

function Home (){
    return(
        <>
            <Item tamanho="" imagem={Banner} title="Tudo sobre esportes em um só lugar!" info="clique para ver todos os produtos da nossa loja!" button="ver mais"/>
        <Item tamanho="80%"  imagem={Tenis3} title="Solar Flare" info="seja a diferença " button="comprar"/>
        <VideoItem video={VideoGol}/>
        <Item tamanho=""  imagem={Tenis4} title="GRANITO ESPACIAL" info="o tenis que você precisa" button="comprar"/>
        <Icones imageIcone1={'https://mizunobr.vtexassets.com/arquivos/ids/228682-800-800?v=638120008388730000&width=800&height=800&aspect=true'} imageIcone2={'https://imgmarketplace.lojasrenner.com.br/20001/1169/7010702021968/7510704281099/0.jpeg'} imageIcone3={'https://decathlonstore.vtexassets.com/unsafe/628x628/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F44656466%2F16897158068283.jpg%3Fv%3D638257991522530000'} textIcon1="MIZUNO 97" textIcon2="MIZUNO 44" textIcon3="MIZUNO 12" titleIcon="Ícones da SportsStore"/> 
        <Item tamanho=""  imagem={Tenis8} title="ORANGE" info="um tenis para seu dia a dia " button="comprar"/>
        <Slide produto={Camisa2} preco="449,25" precoAntigo="599,90" desconto="25" descricao="camisa de time"/>
        <Item tamanho="80%"  imagem={Tenis5} title="TENIS BLACK MAX" info="para sair do padrão" button="comprar"/>
        <Parte imageUrl={ Camisa3} imageUrl1={ Camisa4} imageUrl2={ Camisa5}/>
        </>
    )
}

export default Home;