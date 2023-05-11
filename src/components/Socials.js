import GitHubLogo from '../assets/github-logo.svg'
import LinkedInLogo from '../assets/linkedin-logo.svg'
import TwitterLogo from '../assets/twitter-logo.svg'

export default function Socials() {
  return (
    <div className="social-links-div">
        <div>
          <a href="/"><img className='github social-logo' src={GitHubLogo} alt="git-hub-link" /></a>
        </div>
        <div>
          <a href="/"><img className='linkedin social-logo' src={LinkedInLogo} alt="linked-in-link" /></a>
        </div>
        <div>
          <a href="/"><img className='twitter social-logo' src={TwitterLogo} alt="twitter-link" /></a>
        </div>
      </div>
  )
}