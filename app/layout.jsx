export const metadata = {
  title: "Huutsy — Creative T‑Shirt Designs",
  description: "Huutsy est un studio créatif basé en Andorre. Visuels originaux, prêts à l'impression, optimisés pour Amazon Merch on Demand.",
  metadataBase: new URL("https://huutsy.com")
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
