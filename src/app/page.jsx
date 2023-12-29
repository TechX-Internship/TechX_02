import { Poppins } from "next/font/google";
import MainWeb from "./pages/page";

const poppin = Poppins({
  subsets: ['latin'],
  weight: '600'
})

export default function Home() {
  return (
    <main className={`${poppin.className}`}>
      <MainWeb />
    </main>
  )
}
