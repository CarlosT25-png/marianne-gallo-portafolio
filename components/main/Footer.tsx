import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import { IoDocumentText, IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import styles from './Footer.module.css'

const poppins = Poppins({ weight: '400', subsets: ['latin']})

type Props = {
  url: string,
  children: ReactNode
}

const IconButton = (props: Props ) => {
  return <a href={props.url} target='_blank' className={`${styles['icon']}`}>
    {props.children}
  </a>
}

const Footer = () => {
  return (
    <footer className={`${styles.footer} ${poppins.className}`}>
      <div className={`${styles['img-frame']}`}>
        <IconButton url='/docs/MarianneGalloCV.pdf'>
          <IoDocumentText />
        </IconButton>
        <IconButton url='mailto:mgallomatus@gmail.com'>
          <IoMail />
        </IconButton>
        <IconButton url='https://www.linkedin.com/in/marianne-gallo/'>
          <FaLinkedinIn />
        </IconButton>
      </div>
      <div className={`${styles['text-frame']}`}>
        <h4>Designed by: Marianne Gallo</h4>
        <h4>2023 @ All rights reserved</h4>
        <h4>Developed by: Carlos Torres</h4>
      </div>
    </footer>
  );
}

export default Footer;