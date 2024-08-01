import React from 'react'
import { FloatingNavDemo } from '@/components/FloatingNav'
import { ShootingStars } from '@/components/ui/Shooting'
import { ShootingStarsAndStarsBackgroundDemo } from '@/components/shooting'
import { BentoGridThirdDemo } from '@/components/populatedgrid'
import { BackgroundBoxesDemo1 } from '@/components/servicebuild'
import Testo from '@/components/testomonial'

const Service = () => {
  return (
    <>
    <FloatingNavDemo />
    <ShootingStars />
    <BackgroundBoxesDemo1 />
    <BentoGridThirdDemo /> 
    <Testo />
    <ShootingStarsAndStarsBackgroundDemo />
   
    </>
  )
}

export default Service