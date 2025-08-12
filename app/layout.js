export const metadata = {
  title: "Huutsy - Creative T-shirt Designs",
  description: "Landing page for Huutsy, creative T-shirt design studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}