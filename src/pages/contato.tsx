import Icones from "../components/icones/icones";
import VideoItem from "../components/item/video";
import Slide from "../components/swiper/swiper";
import VideoGol from "../assets/videoGol1.mp4"
import Camisa2 from "../assets/camisaVermelha.JPG"
import Camisa3 from "../assets/camisaListrada.JPG"
import Camisa4 from "../assets/camisaAzul.JPG"
import Camisa5 from "../assets/camisaAmarela.JPG"
import Parte from "../components/blococontainer/blocosContainer";

function Exemplo (){
    return(
        <>
        <VideoItem video={VideoGol}/>
        <Icones imageIcone1={'https://mizunobr.vtexassets.com/arquivos/ids/228682-800-800?v=638120008388730000&width=800&height=800&aspect=true'} imageIcone2={'https://imgmarketplace.lojasrenner.com.br/20001/1169/7010702021968/7510704281099/0.jpeg'} imageIcone3={'https://decathlonstore.vtexassets.com/unsafe/628x628/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F44656466%2F16897158068283.jpg%3Fv%3D638257991522530000'} textIcon1="MIZUNO 97" textIcon2="MIZUNO 44" textIcon3="MIZUNO 12" titleIcon="Ícones da SportsStore"/> 
        <Slide produto={Camisa2} preco="449,25" precoAntigo="599,90" desconto="25" descricao="camisa de time"/>
        <Parte imageUrl={ Camisa3} imageUrl1={ Camisa4} imageUrl2={ Camisa5}/>
        </>
    )
}

export default Exemplo;