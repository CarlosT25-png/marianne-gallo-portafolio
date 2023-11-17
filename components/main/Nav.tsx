import { Poppins } from 'next/font/google';
import styles from './Nav.module.css'

const poppins = Poppins({ weight: '700', subsets: ['latin']})

type Props = {
  name: string,
  url: string,
  color: string
}

const Link = (props: Props) => {
  return <li className={`${styles.link} ${props.color}`}>
    <a href={props.url}>{props.name}</a>
  </li>
}

const Nav = () => {
  return (
    <nav className={`${styles.nav} ${poppins.className}`}>
      <ul className={`${styles.list}`}>
        <Link name='Home' url='#home' color={styles.celestin}/>
        <Link name='About' url='' color={styles.naranjin}/>
        <Link name='Work' url='#work' color={styles.rosadin}/>
        <Link name='Contact' url='' color={styles.moradin}/>
      </ul>
    </nav>
  );
}

export default Nav;