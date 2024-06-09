import React from 'react'
import {Link} from 'react-router-dom';
import '../style/Style2.css'
import img from '../img/kulkas.png'
import img1 from '../img/AC.svg'
import img2 from '../img/cucimobil.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'
import img5 from '../img/5.png'
import img6 from '../img/6.png'
import date from '../img/Component22.svg'
import button from '../img/Component23.svg'

export default function IsiArtikel(){
    return (
            <div class="artikel">
                <h2>Cara Efektif Membersihkan Kulkas</h2>   
                <img src={img} align='center' className='artikel-img'/>
                <p>Kulkas adalah salah satu perangkat rumah tangga yang sangat penting dalam menjaga keawetan dan kebersihan makanan serta minuman. Agar kulkas tetap berfungsi dengan baik dan aman, penting untuk membersihkannya secara teratur. Berikut adalah 7 cara efektif membersihkan kulkas.</p>
                <ol type="1">
                    <li>Keluarkan Isi Kulkas <br/>Langkah pertama dalam membersihkan kulkas adalah mengeluarkan semua barang dari dalamnya. Buang atau gunakan makanan yang mendekati tanggal kadaluwarsa. Ini adalah kesempatan baik untuk mengatur ulang barang-barang di dalam kulkas dan membuatnya lebih teratur.</li>
                    <br/>
                    <li>Matikan dan Biarkan Suhu Stabil <br/>Matikan kulkas dan biarkan suhu dalam kulkas stabil sebelum mulai membersihkannya. Ini mencegah makanan cepat rusak selama proses pembersihan.</li>
                    <br/>
                    <li>Bersihkan Rak dan Wadah <br/>Lepaskan rak, wadah, dan bagian yang dapat dilepas lainnya dari kulkas. Basuh dengan air sabun hangat dan lap bersih. Pastikan untuk menghilangkan tumpukan kotoran atau remah makanan yang menempel.</li>
                    <br/>
                    <li>Cuci Bagian Dalam Kulkas <br/>Gunakan campuran air hangat dan sedikit detergen ringan untuk membersihkan bagian dalam kulkas. Hindari penggunaan bahan kimia keras yang dapat merusak permukaan kulkas. Lap permukaan kulkas dengan kain bersih dan basah.</li>
                    <br/>
                    <li>Pembersihan Khusus Bercak dan Bau <br/>Untuk menghilangkan bercak atau bau yang sulit, campurkan larutan cuka putih dengan air dalam perbandingan 1:1. Gunakan campuran ini untuk membersihkan bercak atau area yang berbau. Cuka tidak hanya membersihkan tetapi juga membantu menghilangkan bau tak sedap.</li>
                    <br/>
                    <li>Keringkan dan Kembalikan Barang <br/>Pastikan semua bagian dalam kulkas benar-benar kering sebelum mengembalikan rak, wadah, dan barang-barang lainnya. Ini membantu mencegah pertumbuhan jamur atau kelembaban berlebih.</li>
                    <br/>
                    <li>Atur Ulang dan Matikan Kulkas <br/>Kembalikan barang-barang ke dalam kulkas dengan rapi sesuai dengan kategori masing-masing. Setelah semua barang kembali ditempatkan dengan benar, nyalakan kulkas kembali. Dengan rutin membersihkan kulkas, kamu tidak hanya menjaga kesehatan keluarga tetapi juga membantu kulkas berfungsi lebih efisien dan tahan lama. Ingatlah untuk membersihkan kulkas setidaknya setiap bulan sekali dan segera bersihkan tumpahan atau bercak agar kulkas tetap bersih dan bebas dari bau tidak sedap.</li>
                </ol>
                <br />
                <hr className='hr'></hr>
        <h2 class="h2">Rekomendasi Artikel Lainnya</h2>
        <div className='card1'>
            <div className='card-blog'>
                <img src={img1} className='card-blog-img'/>
                <h4>4 Masalah AC  Sering Ditemukan dan Cara Mengatasinya!</h4>
                <img src={date} className='date'/>
                <Link to='/isiartikel' className='read'>
                <img src={button} alt="" /></Link>
            </div>
            <div className='card-blog'>
                <img src={img2} className='card-blog-img'/>
                <h4>Kapan dan Seberapa Sering Idealnya untuk Cuci Mobil?</h4>
                <img src={date} className='date'/>
                <Link to='/isiartikel' className='read'>
                <img src={button} alt="" /></Link>
            </div>
            <div className='card-blog'>
                <img src={img3} className='card-blog-img'/>
                <h4>Ternyata Ini Efek Terlalu Sering Poles Kaca Mobil</h4>
                <img src={date} className='date'/>
                <Link to='/isiartikel' className='read'>
                <img src={button} alt="" /></Link>
            </div>
        </div>
        <div className='card1'>
            <div className='card-blog'>
                <img src={img4} className='card-blog-img'/>
                <h4>Cara Menghindari Tungau Saat Liburan</h4>
                <img src={date} className='date'/>
                <Link to='/isiartikel' className='read'>
                <img src={button} alt="" /></Link>
            </div>
            <div className='card-blog'>
                <img src={img5} className='card-blog-img'/>
                <h4>6 Cara Merawat TV LED Agar Tahan Lama</h4>
                <img src={date} className='date'/>
                <Link to='/isiartikel' className='read'>
                <img src={button} alt="" /></Link>
            </div>
            <div className='card-blog'>
                <img src={img6} className='card-blog-img'/>
                <h4>Tips Menjaga Kebersihan Rumah Sehari-hari</h4>
                <img src={date} className='date'/>
                <Link to='/isiartikel' className='read'>
                <img src={button} alt="" /></Link>
            </div>
        </div>
    </div>
    )
}
