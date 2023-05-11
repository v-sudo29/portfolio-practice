import Socials from "./Socials"
import DogeContact from '../assets/doge-contact.jpg'

export default function Footer() {
  return (
    <footer className='footer'>
      <section className="contact-me">
        <h2 className='contact-me-title'>Contact me</h2>
        <div className='contact-info'>
          <p className='contact-description'>Please get in touch if you think our work could be mutually beneficial!</p>
          <address className='contact-address'>1234 Random Road <br /> Random Town <br /> California 12345</address>
          <div className='phone-email-container'>
            <div>415-123-4567</div>
            <div>goodboy.junior@gmail.com</div>
          </div>
        </div>
        <Socials />
      </section>
      <img className='doge-contact-img' src={DogeContact} alt="" />
    </footer>
  )
}