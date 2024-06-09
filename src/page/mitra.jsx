import React from "react";
import {Link} from 'react-router-dom';
import img1 from '../img/Group101.png';
import img2 from '../img/Group59.svg';
import img4 from '../img/daftar.png';
import img5 from '../img/clerk1.png'
import img6 from '../img/doc1.png'
import img7 from '../img/image1.png'
import '../style/Style1.css'

export default function Layanan(){
    return (
        <section class="mitra" >
                <div class="content-mitra">
                    <h2>Prioritas <span>kami</span> adalah melayani <span>anda</span> dengan sepenuh hati.</h2>
                    <img src={img1} width='53%' />
                </div>
                <div class="content-mitra1" align='center'>
                    <h2>Mitra Kami</h2>
                    <img src={img2} width='95%'/>
                    <p>Kami bukan hanya penyedia layanan. Kami adalah pasangan setia anda dalam memastikan rumah anda selalu dalam kondisi prima. Dengan fokus pada keterampilan, ketepatan dan layanan yang ramah, kami berusaha untuk membuat pengalaman home service anda menjadi yang terbaik.</p>
                </div>
                <div class="content-mitra2" align='center'>
                    <h2>Persyaratan Menjadi Mitra</h2>
                    <div className="box">
                        <div className="box1">
                            <div className="gambar">
                                <img src={img5}/>
                            </div>
                            <div className="text2">
                                <h2>Mitra</h2>
                                <ul>
                                    <li>Warga negara Indonesia</li>
                                    <li>Umur minimum 18 tahun dan maksimum 65 tahun pada saat pendaftaran</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="gambar">
                                <img src={img6}  />
                            </div>
                            <div className="text2">
                                <h2>Dokumen</h2>
                                <ul>
                                    <li>Kartu Tanda Penduduk (KTP)</li>
                                    <li>Curriculum Vitae (CV)</li>
                                    <li>Portofolio/dokumen pendukung (pengalaman kerja)</li>
                                    <li>Sertifikat Kerja (Opsional)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-mitra3">
                    <img src={img7} width='20%'/>
                    <div class="paraf1" align='left'>
                        <h2>Udah Siap Gabung Jadi Mitra <span>GrihaHub?</span></h2>
                        <Link to='/daftar'><img src={img4} alt="" width="45%"/></Link>
                    </div>
                </div>
            </section>
    )
 }