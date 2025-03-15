import Welcome from "./welcome/welcome"
import FirstSection from "./firstsection/firstsection"
import SecondSection from "./secondsection/secondsection"
import TertiarySection from "./tertiarysection/tertiarysection"
import FooterSection from "./footersection/footersection"
import CtaSection from "./ctasection/ctasection"


export default function Home() {
  return (
    <div className="">
      <Welcome/>
      <FirstSection/>
      <SecondSection/>
      <TertiarySection/>
      <CtaSection/>
      <FooterSection/>
    </div>
  )
}
