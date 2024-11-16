import "./globals.css";
import Head from 'next/head';

// export const metadata = {
//   title: "Priscilla Goessens | Développeuse Front-End à Lille - React, Next.js & WordPress",
//   description: "Découvrez le portfolio de Priscilla Goessens, développeuse front-end basée à Lille. Spécialiste en React, Next.js, HTML, CSS, et JavaScript, je crée des sites web et applications performants et esthétiques, adaptés à vos besoins.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>Priscilla Goessens | Développeuse Front-End à Lille - React, Next.js & WordPress</title>
        <meta
          name="description"
          content="Découvrez le portfolio de Priscilla Goessens, développeuse front-end basée à Lille. Spécialiste en React, Next.js, HTML, CSS, et JavaScript, je crée des sites web et applications performants et esthétiques, adaptés à vos besoins."
        />
        <meta name="keywords" content="développeuse front-end, Lille, React, Next.js, JavaScript, WordPress, WooCommerce, création de sites web" />
        <meta property="og:title" content="Priscilla Goessens | Développeuse Front-End à Lille" />
        <meta
          property="og:description"
          content="Je conçois des sites web modernes et performants grâce à React, Next.js, HTML, CSS et JavaScript. Découvrez mon portfolio !"
        />
        <meta property="og:image" content="@/public/assets/img/avatar.webp" />
        <meta property="og:url" content="https://priscillagoessens.netlify.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body >{children}</body>
    </html>
  );
}
