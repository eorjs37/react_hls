import * as styles from './Button.module.css'
type ButtonProps = {
  buttonname: string
}
function Button({ buttonname = '버튼명' }: ButtonProps) {
  return <button className={styles.button_style}>{buttonname}</button>
}
export default Button
