import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Edistys Anytxn",
  description: "Edistys Anytxn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
