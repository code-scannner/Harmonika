import "./globals.css";
export const metadata = {
  title: "Harmonika | By Shreyansh Gupta",
  description: "A Music Recommendation Application By Shreyansh Gupta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap" rel="stylesheet" />
      <body className="font-normal">{children}</body>
    </html>
  );
}
