import "./globals.css";
import localFont from "next/font/local";
import CustomCursor from "@/components/CustomCursor";

const blackout = localFont({
    src: [
        {
            path: './fonts/Blackout.ttf',
            weight: "400",
            style: "normal",
        },
    ],
    variable: '--font-blackout',
})

const pixelbold = localFont({
    src: [
        {
            path: './fonts/04B_30__.ttf',
            weight: "400",
            style: "normal",
        },
    ],
    variable: '--font-pixelbold',
})

const block = localFont({
    src: [
        {
            path: './fonts/block.ttf',
            weight: "400",
            style: "normal",
        },
    ],
    variable: '--font-block',
})

const square = localFont({
    src: [
        {
            path: './fonts/square.otf',
            weight: "400",
            style: "normal",
        },
    ],
    variable: '--font-square',
})

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

const outFit = localFont({
    src: [
        {
            path: "./fonts/outfit/Outfit-Black.ttf",
            weight: "900",
            style: "normal"
        },
        {
            path: "./fonts/outfit/Outfit-ExtraBold.ttf",
            weight: "800",
            style: "normal"
        },
        {
            path: "./fonts/outfit/Outfit-Bold.ttf",
            weight: "700",
            style: "normal"
        },
        {
            path: "./fonts/outfit/Outfit-SemiBold.ttf",
            weight: "600",
            style: "normal"
        },
        {
            path: "./fonts/outfit/Outfit-Medium.ttf",
            weight: "500",
            style: "normal"
        },
        {
            path: "./fonts/outfit/Outfit-Regular.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "./fonts/outfit/Outfit-Light.ttf",
            weight: "300",
            style: "normal"
        },
        {
            path: "./fonts/outfit/Outfit-ExtraLight.ttf",
            weight: "200",
            style: "normal"
        },
        {
            path: "./fonts/outfit/Outfit-Thin.ttf",
            weight: "100",
            style: "normal"
        },
    ],
    variable: '--font-outFit'
})

export const metadata = {
  title: "Aryan - Frontend Developer",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
          <html lang="en, jp" className="no-scrollbar">
              <body className={`${orbitron.variable} ${rubik.variable} ${outFit.variable} ${blackout.variable} ${pixelbold.variable} ${block.variable} ${square.variable}`}>
                  <CustomCursor/>
                  {children}
              </body>
          </html>
  );
}
