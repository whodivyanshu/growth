
import Image from 'next/image'
import styles from "./page.module.css"
import Title from '@/components/body1/Title'

import Properties from '@/components/properties/Properties'
import Body2 from '@/components/body2/Body2'

export default function Home() {

  return (
    <>
      <Title/>
      <Body2 />
      <Properties />
    </>
  )
}
