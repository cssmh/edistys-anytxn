import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "./globals.css";
import "aos/dist/aos.css";

export const metadata = {
  title: "Home Page | AnyTech",
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
