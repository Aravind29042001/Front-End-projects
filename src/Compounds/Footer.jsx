import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
  return (
    <div className=''>
      <div className='h-48 w-full bg-slate-800 flex items-center justify-evenly gap-[60%]'>
        <p className='text-white '>Door #700, Ground Floor, <br /> Rashtra Kavi, Sai Nanasu Plaza, <br /> 30th Main Rd, Kuvempu Nagar, BTM 2nd Stage,<br /> BTM Layout, Bengaluru, Karnataka 560076</p>
        <div className='flex flex-col gap-3 text-white'>
          <FaInstagram />
          <FaWhatsapp />
          <FaXTwitter />
          <FiYoutube />
          <BiLogoGmail />

        </div>


      </div>

    </div>
  )
}

export default Footer