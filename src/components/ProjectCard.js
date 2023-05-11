import GitHubLogo from '../assets/github-logo.svg'
import ExternalIcon from '../assets/external-link.svg'

export default function ProjectCard(props) {
  return (
    <section className='project-card'>
      <div className={`screenshot-div card-color-${props.cardNumber}`}>screenshot of project</div>
      <div className='project-info'>
        <div className='project-name-logos-div'>
          <h3>Project name</h3>
          <div className='project-link-icons'>
            <a href='/'><img className='project-github' src={GitHubLogo} alt="github-project-link" /></a>
            <a href='/'><img className='project-external-link' src={ExternalIcon} alt="project-external-link" /></a>
          </div>
        </div>
        <p className='project-description'>
          Short description of the project. Just a couple of sentences will do.
        </p>
      </div>
    </section>
  )
}