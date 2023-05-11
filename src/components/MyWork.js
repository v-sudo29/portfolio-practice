import ProjectCard from "./ProjectCard"

export default function MyWork() {
  return (
    <section className='my-work'>
      <h2>My work</h2>
      <div className="project-container">
        <ProjectCard cardNumber='1'/>
        <ProjectCard cardNumber='2'/>
        <ProjectCard cardNumber='3'/>
        <ProjectCard cardNumber='4'/>
        <ProjectCard cardNumber='5'/>
        <ProjectCard cardNumber='6'/>
      </div>
    </section>
  )
}