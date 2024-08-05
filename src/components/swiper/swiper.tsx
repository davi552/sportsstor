import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import './swiper.css';

interface Iprops{
    produto: any;
    preco:string;
    precoAntigo:string;
    desconto:string;
    descricao:string;
}

function Slide ({
    produto, preco, precoAntigo, desconto, descricao,
    }:Iprops) {

    return(
        <>
            <Swiper
            className='swiper'
                spaceBetween={0}
                slidesPerView={3}
                navigation={true}
                rewind={true}
                modules={[Navigation]}
            >
                <SwiperSlide className='swiperSlide1'>
                    <div className='containerSwiper'>
                        <img alt='' src={produto} className='swiperImg'/>
                        <p className='imgDescription'>{descricao}</p>
                        <div className='containerPreco'>
                            <p className='preco'>R${preco}</p>
                            <p className='precoAntigo'>R${precoAntigo}</p>
                        </div>
                            <p className='desconto'>{desconto}% off</p>
                        <button className='buttonSwiper'>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiperSlide1'>
                    <div className='containerSwiper'>
                        <img alt='' src={produto} className='swiperImg'/>
                        <p className='imgDescription'>{descricao}</p>
                        <div className='containerPreco'>
                            <p className='preco'>R${preco}</p>
                            <p className='precoAntigo'>R${precoAntigo}</p>
                        </div>
                            <p className='desconto'>{desconto}% off</p>
                        <button className='buttonSwiper'>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiperSlide1'>
                    <div className='containerSwiper'>
                        <img alt='' src={produto} className='swiperImg'/>
                        <p className='imgDescription'>{descricao}</p>
                        <div className='containerPreco'>
                            <p className='preco'>R${preco}</p>
                            <p className='precoAntigo'>R${precoAntigo}</p>
                        </div>
                            <p className='desconto'>{desconto}% off</p>
                        <button className='buttonSwiper'>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiperSlide1'>
                    <div className='containerSwiper'>
                        <img alt='' src={produto} className='swiperImg'/>
                        <p className='imgDescription'>{descricao}</p>
                        <div className='containerPreco'>
                            <p className='preco'>R${preco}</p>
                            <p className='precoAntigo'>R${precoAntigo}</p>
                        </div>
                            <p className='desconto'>{desconto}% off</p>
                        <button className='buttonSwiper'>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiperSlide1'>
                    <div className='containerSwiper'>
                        <img alt='' src={produto} className='swiperImg'/>
                        <p className='imgDescription'>{descricao}</p>
                        <div className='containerPreco'>
                            <p className='preco'>R${preco}</p>
                            <p className='precoAntigo'>R${precoAntigo}</p>
                        </div>
                            <p className='desconto'>{desconto}% off</p>
                        <button className='buttonSwiper'>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiperSlide1'>
                    <div className='containerSwiper'>
                        <img alt='' src={produto} className='swiperImg'/>
                        <p className='imgDescription'>{descricao}</p>
                        <div className='containerPreco'>
                            <p className='preco'>R${preco}</p>
                            <p className='precoAntigo'>R${precoAntigo}</p>
                        </div>
                            <p className='desconto'>{desconto}% off</p>
                        <button className='buttonSwiper'>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiperSlide1'>
                    <div className='containerSwiper'>
                        <img alt='' src={produto} className='swiperImg'/>
                        <p className='imgDescription'>{descricao}</p>
                        <div className='containerPreco'>
                            <p className='preco'>R${preco}</p>
                            <p className='precoAntigo'>R${precoAntigo}</p>
                        </div>
                            <p className='desconto'>{desconto}% off</p>
                        <button className='buttonSwiper'>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiperSlide1'>
                    <div className='containerSwiper'>
                        <img alt='' src={produto} className='swiperImg'/>
                        <p className='imgDescription'>{descricao}</p>
                        <div className='containerPreco'>
                            <p className='preco'>R${preco}</p>
                            <p className='precoAntigo'>R${precoAntigo}</p>
                        </div>
                            <p className='desconto'>{desconto}% off</p>
                        <button className='buttonSwiper'>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiperSlide1'>
                    <div className='containerSwiper'>
                        <img alt='' src={produto} className='swiperImg'/>
                        <p className='imgDescription'>{descricao}</p>
                        <div className='containerPreco'>
                            <p className='preco'>R${preco}</p>
                            <p className='precoAntigo'>R${precoAntigo}</p>
                        </div>
                            <p className='desconto'>{desconto}% off</p>
                        <button className='buttonSwiper'>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiperSlide1'>
                    <div className='containerSwiper'>
                        <img alt='' src={produto} className='swiperImg'/>
                        <p className='imgDescription'>{descricao}</p>
                        <div className='containerPreco'>
                            <p className='preco'>R${preco}</p>
                            <p className='precoAntigo'>R${precoAntigo}</p>
                        </div>
                            <p className='desconto'>{desconto}% off</p>
                        <button className='buttonSwiper'>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiperSlide1'>
                    <div className='containerSwiper'>
                        <img alt='' src={produto} className='swiperImg'/>
                        <p className='imgDescription'>{descricao}</p>
                        <div className='containerPreco'>
                            <p className='preco'>R${preco}</p>
                            <p className='precoAntigo'>R${precoAntigo}</p>
                        </div>
                            <p className='desconto'>{desconto}% off</p>
                        <button className='buttonSwiper'>Comprar</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
};

export default Slide;