import Logo from '../Logo/Logo'
import logoBlack from '@/public/assets/img/logo-black.webp'
import './_Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='footer-section'>
        <div className='footer-section-container'>
          <Logo source={logoBlack} className='footer-section-container-logo'/>
          <Link href="#header" className='footer-section-container-toTop' aria-label="return top">
            <FontAwesomeIcon icon={faAngleUp} />
          </Link>
        </div>
    </div>
  )
}
