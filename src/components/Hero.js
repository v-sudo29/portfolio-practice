import HeroDog from '../assets/doctor-doge.jpeg'

export default function Heading() {
  return (
    <header className='hero-content'>
      <img className='hero-image'src={HeroDog} alt="" />
      <h1 className='hero-title'>Goodboy Junior</h1>
    </header>
  )
}