import HeroDog from '../assets/doctor-doge.jpeg'

export default function Header() {
  return (
    <header className='hero-content'>
      <img className='hero-image'src={HeroDog} alt="" />
      <div className='hero-title-div'>
        <h1 className='hero-title'>Goodboy Junior</h1>
      </div>
    </header>
  )
}