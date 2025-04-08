import "./globals.css";
import localFont from "next/font/local";

const orbitron = localFont({
    src: [
        {
            path: './fonts/orbitron/Orbitron-Black.ttf',
            weight: "900",
            style: "normal",
        },
        {
            path: './fonts/orbitron/Orbitron-ExtraBold.ttf',
            weight: "800",
            style: "normal",
        },
        {
            path: './fonts/orbitron/Orbitron-Bold.ttf',
            weight: "700",
            style: "normal",
        },
        {
            path: './fonts/orbitron/Orbitron-SemiBold.ttf',
            weight: "600",
            style: "normal",
        },
        {
            path: './fonts/orbitron/Orbitron-Medium.ttf',
            weight: "500",
            style: "normal",
        },
        {
            path: './fonts/orbitron/Orbitron-Regular.ttf',
            weight: "400",
            style: "normal",
        },
    ],
    variable: '--font-orbitron',
})

const rubik = localFont({
    src: [
        {
            path: './fonts/rubik/Rubik-BlackItalic.ttf',
            weight: "900",
            style: "normal",
        },
        {
            path: './fonts/rubik/Rubik-Black.ttf',
            weight: "900",
            style: "normal",
        },
        {
            path: './fonts/rubik/Rubik-ExtraBoldItalic.ttf',
            weight: "800",
            style: "normal",
        },
        {
            path: './fonts/rubik/Rubik-ExtraBold.ttf',
            weight: "800",
            style: "normal",
        },
        {
            path: './fonts/rubik/Rubik-BoldItalic.ttf',
            weight: "700",
            style: "normal",
        },
        {
            path: './fonts/rubik/Rubik-Bold.ttf',
            weight: "700",
            style: "normal",
        },
        {
            path: './fonts/rubik/Rubik-SemiBoldItalic.ttf',
            weight: "600",
            style: "normal",
        },
        {
            path: './fonts/rubik/Rubik-SemiBold.ttf',
            weight: "600",
            style: "normal",
        },
        {
            path: './fonts/rubik/Rubik-MediumItalic.ttf',
            weight: "500",
            style: "normal",
        },
        {
            path: './fonts/rubik/Rubik-Medium.ttf',
            weight: "500",
            style: "normal",
        },
        {
            path: './fonts/rubik/Rubik-Italic.ttf',
            weight: "400",
            style: "normal",
        },
        {
            path: './fonts/rubik/Rubik-Regular.ttf',
            weight: "400",
            style: "normal",
        },
        {
            path: './fonts/rubik/Rubik-LightItalic.ttf',
            weight: "300",
            style: "normal",
        },
        {
            path: './fonts/rubik/Rubik-Light.ttf',
            weight: "300",
            style: "normal",
        },
    ],
    variable: '--font-rubik',
})

export const metadata = {
  title: "Aryan Dewan",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${rubik.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
