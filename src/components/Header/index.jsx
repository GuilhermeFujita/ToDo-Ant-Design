import todoLogo from '../../assets/todo-logo.svg';
import './styles.css'

export function Header() {
  return (
    <header className="header">
      <img src={todoLogo} alt='Todo Logo' />
    </header>
  )
}