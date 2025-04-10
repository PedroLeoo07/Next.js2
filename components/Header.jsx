import styles from "../styles/Header.module.css"

export default function Header(){
    return (
    <div>
    <header className={styles.header}>
        <h1 className={styles.title}>Header</h1>
        <nav className={styles.nav}>
            <ul>
                <li><a href="/" className={styles.a}>Home</a></li>
                <li><a href="/about" className={styles.a}>About</a></li>
                <li><a href="/contact" className={styles.a}>Contact</a></li>
            </ul>
        </nav>
    </header>
    </div>
    )
};
