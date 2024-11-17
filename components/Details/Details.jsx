
import Image from 'next/image'
import Button from '../Button/Button'
import Link from 'next/link';

export default function Details({sectionStyle, titleStyle, contentStyle, iconContainerStyle, iconGit, linkedin}) {
    return (
      <div className={sectionStyle} id="description">
        <div className={titleStyle}>
          <h2 className='title'>A propos de moi</h2>
        </div>
        <p className={contentStyle}>
        Je m'appelle Priscilla Goessens, développeuse front-end passionnée et basée dans la métropole lilloise. Mon objectif : créer des sites web qui combinent <strong>esthétisme</strong>, <strong>fonctionnalité</strong>, et <strong>expérience utilisateur optimale</strong>.<br/><br/>

        Avec une expertise solide en <strong>HTML</strong>, <strong>CSS</strong>, <strong>Sass</strong>, et <strong>JavaScript</strong>, je conçois des interfaces intuitives et attrayantes. J'exploite des technologies modernes comme <strong>React js</strong> et <strong>Next.js</strong> pour développer des applications web performantes, évolutives, et adaptées aux besoins actuels.<br/>
        Mon expérience avec <strong>WordPress</strong> et <strong>WooCommerce</strong> m'a permis de réaliser des solutions personnalisées, optimisées pour des sites e-commerce réussis.<br/><br/>

        Je suis actuellement à la recherche de <strong>nouvelles opportunités</strong>, que ce soit en tant que salariée ou indépendante. Si vous avez un projet en tête ou souhaitez échanger autour de vos idées, je serais ravie de collaborer avec vous. <strong>Ensemble, donnons vie à vos projets web !</strong>
        </p>
        <div className={iconContainerStyle}>
        <Button link="Priscilla_Goessens_Cv_Developpeuse_Front.pdf">
          Mon CV
        </Button>
          <Link href="https://github.com/priscillagoessens" target="_blank">
            <Image src={iconGit} alt="GitHub" />
          </Link>
          <Link href="https://www.linkedin.com/in/priscilla-goessens/" target="_blank">
            <Image src={linkedin} alt="linkedin" />
          </Link>
        </div>
      </div>
    )
  }