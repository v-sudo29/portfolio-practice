import GitHubLogo from '../assets/github-logo.svg'
import LinkedInLogo from '../assets/linkedin-logo.svg'
import TwitterLogo from '../assets/twitter-logo.svg'

export default function Main() {
  const dummyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum omnis, magnam ex voluptatibus dolor veliste sunt doloremque labore fugit obcaecati iure est recusandae error nisi provident, magni culpaeaque!. Saepe fugit totam necessitatibus enim placeat impedit quas debitis vitae. Deleniti animi magnameos nisi dolores dicta, mollitia quidem odit non amet.';

  return (
    <main className='main'>
      <section className='about-me'>
        <h2 className='about-me-title'>About me</h2>
        <p className='about-me-description'>{dummyText}</p>
        <div className="social-links-div">
          <div>
            <a href=""><img className='github social-logo' src={GitHubLogo} alt="git-hub-link" /></a>
          </div>
          <div>
            <a href=""><img className='linkedin social-logo' src={LinkedInLogo} alt="linked-in-link" /></a>
          </div>
          <div>
            <a href=""><img className='twitter social-logo' src={TwitterLogo} alt="twitter-link" /></a>
          </div>
        </div>
      </section>
    </main>
  )
}