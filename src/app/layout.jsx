import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Aryan - Frontend Developer",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
          <html lang="en, jp" className="no-scrollbar">
              <body>
                  <CustomCursor/>
                  {children}
              </body>
          </html>
  );
}
