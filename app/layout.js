import "./globals.css";

export const metadata = {
  title: "Priscilla Goessens | Développeuse Front-End à Lille - React, Next.js & WordPress",
  description: "Découvrez le portfolio de Priscilla Goessens, développeuse front-end basée à Lille. Spécialiste en React, Next.js, HTML, CSS, et JavaScript, je crée des sites web et applications performants et esthétiques, adaptés à vos besoins.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body >{children}</body>
    </html>
  );
}
