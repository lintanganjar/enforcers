import React from 'react'
import {Link} from 'react-router-dom';
import '../style/Style1.css'
import date from '../img/Component22.svg'
import img from '../img/read.svg'
import img1 from '../img/kulkas1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import img6 from '../img/img6.png'
import img7 from '../img/img7.png'
import img8 from '../img/img8.png'

export default function Blog(){
    return (
        <>
        <section class="blog">
            <div className='card2'>
                <div class="card">
                    <img src={img1} />
                    <h3>Cara Efektif Membersihkan Kulkas</h3>
                    <p>Kulkas adalah salah satu perangkat rumah tangga yang sangat penting dalam menjaga keawetan dan kebersihan makanan serta ....</p>
                    <img src={date} className='date'/>
                    <Link to="/isiartikel"><img src={img} className='read-more'  alt=""/></Link>
                </div>
                <div class="card">
                    <img src={img2} />
                    <h3>4 Masalah AC Sering Terjadi dan cara Mengatasinya</h3>
                    <p>AC (Air Conditioner) sering menjadi andalan untuk memberikan kesejukan yang menyenangkan saat cuaca sedang panas. Namun pada.....</p>
                    <img src={date} className='date'/>
                    <Link to="/isiartikel"><img src={img} className='read-more' alt=""/></Link>
                </div>
                <div class="card">
                    <img src={img3} />
                    <h3>Kapan dan Seberapa Sering Idealnya untuk Cuci Mobil?</h3>
                    <p>Mencuci mobil adalah salah satu aktivitas yang penting dilakukan agar kendaraan   tetap bersih dan terawat. Ada orang yang mencucinya secara rutin, tetapi ....</p>
                    <img src={date} className='date'/>
                    <Link to="/isiartikel"><img src={img} className='read-more' alt=""/></Link>
                </div>
                <div class="card">
                    <img src={img4} />
                    <h3>Ternyata Ini Efek Terlalu Sering Poles Kaca Mobil</h3>
                    <p>Seringkali, pemilik mobil percaya bahwa semakin sering mereka memoles kaca mobil maka akan terlihat semakin bersih dan tampak kinclong. Namun ternyata .... </p>
                    <img src={date} className='date'/>
                    <Link to="/isiartikel"><img src={img} className='read-more' alt=""/></Link>
                </div>
            </div>
            <div className='card2'>
                <div class="card">
                    <img src={img5} />
                    <h3>Cara Menghindari Tungau Saat Liburan</h3>
                    <p>Sebelum mengetahui cara mencegah tungau saat berlibur, anda perlu memahami perbedaan antara dua jenis tungau yang sering ktia temui di ....</p>
                    <img src={date} className='date'/>
                    <Link to="/isiartikel"><img src={img} className='read-more' alt=""/></Link>
                </div>
                <div class="card">
                    <img src={img6} />
                    <h3>6 Cara Merawat TV LED Agar Tahan Lama</h3>
                    <p>Televisi adalah salah satu perangkat elektronik terpopuler sebagai sumber  hiburan di rumah, maka tidak heran jika TV ada di hampir ... </p>
                    <img src={date} className='date'/>
                    <Link to="/isiartikel"><img src={img} className='read-more' alt=""/></Link>
                </div>
                <div class="card">
                    <img src={img7} />
                    <h3>Tips Menjaga Kebersihan Rumah Sehari-hari</h3>
                    <p>Kebersihan rumah akan menciptakan lingkungan yang sehat dan nyaman. Namun, kehidupan yang sibuk membuat kita kesulitan untuk menjaganya......</p>
                    <img src={date} className='date'/>
                    <Link to="/isiartikel"><img src={img} className='read-more' alt=""/></Link>
                </div>
                <div class="card">
                    <img src={img8} />
                    <h3>Tips Cuci Kasur dan Sofa Dalam Beberapa Langkah</h3>
                    <p>Perlu kamu ketahui bahwa kondisi kesehatan seseorang bisa dipengaruhi oleh lingkungan. Salah satunya adalah kondisi kasur dan .....</p>
                    <img src={date} className='date'/>
                    <Link to="/isiartikel"><img src={img} className='read-more' alt=""/></Link>
                </div>
            </div>
    </section>
    </>
    );
}