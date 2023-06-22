import Image from 'next/image'
import styles from "./page.module.css"
import Title from '@/components/body1/Title'


import Properties from '@/components/properties/Properties'
import Body2 from '@/components/body2/Body2'
import Testimonials from '@/components/testimonials/Testimonials'
import Graph from '@/components/graph/Graph'



export default function Home() {




  return (
    <>

      <Title/>
      <Body2 />
      <Properties  />
      <Graph/>
      <Testimonials/>
    </>
  )
}
