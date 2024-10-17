import * as style from './About.module.css'
function About() {
  console.log(style.container)

  return (
    <div>
      <div className={style.container}>{'TEST'}</div>
    </div>
  )
}
export default About
