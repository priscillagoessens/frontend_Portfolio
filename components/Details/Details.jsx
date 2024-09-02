
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

        Bonjour, je suis Priscilla Goessens, développeuse front-end basée dans la métropole lilloise. Je me passionne pour la création de sites web qui allient esthétisme et fonctionnalité. <br/>
        Grâce à mes compétences en <strong>HTML</strong>, <strong>CSS</strong>, <strong>Sass</strong> et <strong>JavaScript</strong>, je conçois des interfaces qui sont à la fois attractives et intuitives.

        J'utilise des technologies modernes comme <strong>React</strong>, <strong>Redux</strong>, <strong>Next.js</strong> et <strong>Tailwind</strong> pour développer des applications performantes et maintenables. J'ai également une solide expérience avec <strong>WordPress</strong> et <strong>WooCommerce</strong>, où j'ai pu personnaliser des solutions adaptées aux besoins de mes clients.
        <br/>
        Je suis actuellement à la recherche de nouvelles opportunités en tant que salariée indépendante. Si vous avez un projet en tête ou souhaitez discuter de vos idées, je serais ravie d'échanger avec vous. Ensemble, nous pouvons donner vie à vos projets web ! ✨
        </p>
        <div className={iconContainerStyle}>
        <Button link="Priscilla_Goessens_CV.pdf">
          Mon CV (pdf)
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