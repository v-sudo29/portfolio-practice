export default function Main() {
  const dummyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum omnis, magnam ex voluptatibus dolor veliste sunt doloremque labore fugit obcaecati iure est recusandae error nisi provident, magni culpaeaque!. Saepe fugit totam necessitatibus enim placeat impedit quas debitis vitae. Deleniti animi magnameos nisi dolores dicta, mollitia quidem odit non amet.';

  return (
    <main className='main'>
      <section className='about-me'>
        <h2 className='about-me-title'>About me</h2>
        <p className='about-me-description'>{dummyText}</p>
      </section>
    </main>
  )
}