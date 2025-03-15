"use client"

import Welcome from "./(marketing)/welcome/welcome"
import FirstSection from "./(marketing)/firstsection/firstsection"
import SecondSection from "./(marketing)/secondsection/secondsection"
import TertiarySection from "./(marketing)/tertiarysection/tertiarysection"
import FooterSection from "./(marketing)/footersection/footersection"
import CtaSection from "./(marketing)/ctasection/ctasection"
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
