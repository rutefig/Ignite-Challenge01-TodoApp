import styles from './Header.module.css'
import Logo from '/logo.svg'

export function Header () {
    return (
        <div className={styles.header}>
            <img src={Logo} alt="Todo Logo" />
            <h1>todo</h1>
        </div>
    )
}