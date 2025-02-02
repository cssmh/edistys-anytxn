import Navbar from "../Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Edistys Task",
  description: "Edistys Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
