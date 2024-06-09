import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import '../style/Style.css'

import img1 from '../img/bg1.png'
import slide1 from '../img/Group77.png'
import slide2 from '../img/Group78.png'
import slide3 from '../img/Group79.png'
import slide4 from '../img/Group80.png'
import slide5 from '../img/Group81.png'
import slide6 from '../img/Group82.png'
import slide7 from '../img/Group83.png'
import slide8 from '../img/Group84.png'
import slide9 from '../img/Group85.png'
import slide10 from '../img/Group86.png'
import slide11 from '../img/Group87.png'
import slide12 from '../img/Group88.png'
import img4 from '../img/bg4.png'
import img6 from '../img/frame73.png'
import img7 from '../img/Group106.svg'
import img8 from '../img/Group76.svg'
import box1 from '../img/Group94.svg'
import box2 from '../img/Group95.svg'
import box3 from '../img/Group96.svg'
import download from '../img/Group89.png'

export default function Index(){

    return (
        <section className="hero" id="home">
        <div className="content-home">
            <h1>Solusi Layanan Rumah <span>Tepat</span> untuk Kehidupan yang <span>Padat</span> <span className='span'>#DariRumahAja</span></h1>
            <img src={img1} />
        </div>
        <div class="content-home1">
           <h2>Layanan yang kami tawarkan </h2>
           <p>GrihaHub hadir dengan tekad kuat untuk menjadi mitra terpercaya dalam memenuhi kebutuhan rumah anda. Prioritas kami adalah melayani anda dengan sepenuh hati. Dari perbaikan hingga pemeliharaan, tim profesional kami siap memberikan layanan terbaik di kenyamanan rumah anda. Percayakan kepada kami, karena kepuasan anda adalah tujuan utama kami. </p>
            <Swiper className='sample-slider' modules={[Autoplay]}  autoplay={{delay:0}} slidesPerView={5} speed={3000} loop={true}>
                    <SwiperSlide><img src={slide1}/></SwiperSlide>
                    <SwiperSlide><img src={slide2}/></SwiperSlide>
                    <SwiperSlide><img src={slide3}/></SwiperSlide>
                    <SwiperSlide><img src={slide4}/></SwiperSlide>
                    <SwiperSlide><img src={slide5}/></SwiperSlide>
                    <SwiperSlide><img src={slide6}/></SwiperSlide>
                    <SwiperSlide><img src={slide7}/></SwiperSlide>
                    <SwiperSlide><img src={slide8}/></SwiperSlide>
                    <SwiperSlide><img src={slide9}/></SwiperSlide>
                    <SwiperSlide><img src={slide10}/></SwiperSlide>
                    <SwiperSlide><img src={slide11}/></SwiperSlide>
                    <SwiperSlide><img src={slide12}/></SwiperSlide>
                </Swiper>
        </div>
        <div class="content-home2">
            <img src={img4} width='100%'/>
        </div>
        <div className='content-home3'>
            <h2>Cara Pemesanan</h2>
            <div className='cara-pemesanan'>
                <div className='boxs'>
                    <img src={box1} />
                    <p>Pilihlah kategori layanan dan jasa yang ingin anda gunakan</p>
                </div>
                <div className='boxs'>
                    <img src={box2} />
                    <p>Tentukan jasa yang ingin digunakan dan tanggalnya</p>
                </div>
                <div className='boxs'>
                    <img src={box3}/>
                    <p>Pilih metode pembayaran dan selesaikan pesanan anda</p>
                </div>
            </div>
        </div>
        <div className='content-home6' align='center'>
            <img src={img7} width='88%'/>
        </div>
        <div class="content-home4">
            <div className='text'>
                <h3>Download <span>GrihaHub</span> Sekarang!</h3>
                <p>Melalui platform kami, anda dapat dengan mudah memesan layanan, melacak progresnya dan berkomunikasi langsung dengan mitra kami.</p>
                <a href="" align='left'> <img src={download}/></a>
            </div>
            <div className='gambar'>
                <img src={img8} alt="" width='88%' />
            </div>
        </div>
        <div class="content-home5" align='center'>
            <a href="whatsapp://send?text=Hello&phone=+6281331599321"><img src={img6} alt="" width="85%"/></a>
        </div>
    </section>
    )
}