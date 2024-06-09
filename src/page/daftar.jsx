import React from 'react'
import '../style/Style1.css';
import {Link} from 'react-router-dom';
import Swal from "sweetalert2";
export default function Daftar(){
const handleClick = () =>{
    Swal.fire({
        border: 'solid 2px 2px 2px 2px rgb(19, 82, 203)',
        color: '#1352CB',
        title: "Dokumen anda telah terkirim.",
        text: "Tunggu konfirmasi dari kami lewat email atau nomor telepon kamu!",
        
      });
}
    return (
        <section class="hero1">
            <div className='form'>
                <div class="text1">
                    <h1>Lengkapi Dokumen</h1>
                    <p>Lengkapi profil dan dokumenmu untuk dapat mendaftar sebagai mitra.</p>
                </div>
                <form action="" method='get' align='center'>
                    <p class="po">Kartu Tanda Penduduk (KTP) *Wajib</p>
                    <div class="colum" align='center'>
                        <label for="file-upload" class="custom-file-upload">
                        <i class="fa fa-cloud-upload"></i> Pilih File
                        </label>
                        <input id="file-upload" type="file"/>
                    </div>
                    <p class="po">Curriculum Vitae (CV) *Wajib</p>
                    <div class="colum" >
                        <label for="file-upload" class="custom-file-upload">
                        <i class="fa fa-cloud-upload"></i> Pilih File
                        </label>
                        <input id="file-upload" type="file"/>
                    </div>
                    <p class="po">Portofolio/dokumen pendukung (Pegalaman Kerja) *Opsional</p>
                    <div class="colum" align='center'>
                        <label for="file-upload" class="custom-file-upload">
                        <i class="fa fa-cloud-upload"></i> Pilih File
                        </label>
                        <input id="file-upload" type="file"/>
                    </div>
                    <p class="po">Sertifikat Kerja  *Opsional</p>
                    <div class="colum" align='center'>
                        <label for="file-upload" class="custom-file-upload">
                        <i class="fa fa-cloud-upload"></i> Pilih File
                        </label>
                        <input id="file-upload" type="file"/>
                    </div>
                    <Link to='/mitra'>
                    <button align='center'
                        onClick={handleClick} 
                        class='button' type='submit'>Kirim</button>
                    </Link>
                </form>
            </div>
       </section>
    );
}