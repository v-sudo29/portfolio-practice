import HeroDog from '../assets/doctor-doge.jpeg'
import AboutMe from './AboutMe.js'

export default function Header() {
  return (
    <header className='header-content'>
      <div className='hero-title-div'>
        <h1 className='hero-title'>Goodboy Junior</h1>
      </div>
      <div className='hero-image-container'>
        <img className='hero-image' src={HeroDog} alt="" />
      </div>
      <AboutMe />
    </header>
  )
}