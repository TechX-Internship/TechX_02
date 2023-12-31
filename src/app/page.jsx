import { Poppins } from "next/font/google";
import MainBanner from "./(homepage)/mainbanner";
import About from "@/components/About";
import AboutDsc from "@/components/AboutDsc";
import Consulting from "@/components/consulting";
import Say from "@/components/says";
import Articals from "@/components/Articals";

const poppin = Poppins({
  subsets: ['latin'],
  weight: '600'
})

export default function Home() {
  return (
    <main className={`${poppin.className}`}>
      <MainBanner />
      <About state={true} />
      <AboutDsc />
      <Consulting />
      <Say />
      <Articals />
    </main>
  )
}
