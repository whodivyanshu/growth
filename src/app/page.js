
// import Image from 'next/image'
// <<<<<<< master
// import styles from './page.module.css'
// import Title from "@/components/body1/Title"
// import Testimonials from '@/components/testimonials/Testimonials'

// export default function Home() {
//   return(
//     <div>
//     <Title/>
//       <Testimonials />
//     </div>
  
// =======
import styles from "./page.module.css"
import Title from '@/components/body1/Title'
    import Testimonials from "@/components/testimonials/Testimonials"

export default function Home() {

  return (
    <>
      <Title/>
    <Testimonials />
    </>
// >>>>>>> master
  )
}
