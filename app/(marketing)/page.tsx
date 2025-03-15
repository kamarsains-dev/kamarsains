"use client"

import Welcome from "./welcome/welcome"
import FirstSection from "./firstsection/firstsection"
import SecondSection from "./secondsection/secondsection"
import TertiarySection from "./tertiarysection/tertiarysection"
import FooterSection from "./footersection/footersection"
import CtaSection from "./ctasection/ctasection"
import { Suspense } from "react"


export default function Home() {
  return (
    <div className="">
      <Suspense fallback={<>Loading...</>}>
        <Welcome/>
        <FirstSection/>
        <SecondSection/>
        <TertiarySection/>
        <CtaSection/>
        <FooterSection/>
      </Suspense>
    </div>
  )
}
