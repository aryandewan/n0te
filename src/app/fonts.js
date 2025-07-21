import {Space_Mono, Audiowide, Badeen_Display} from "next/font/google";

const mono = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal'],
    display: 'swap',
})

const audio = Audiowide({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal'],
    display: 'swap',
})

const badeen = Badeen_Display({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal'],
    display: 'swap',
})

export {mono, audio, badeen}