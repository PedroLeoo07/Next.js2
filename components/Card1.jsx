import styles from "../styles/Card1.module.css";

export default function Card1() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
            <img src="./cristiano.jpg" className={styles.img}/>
            <h1 className={styles.title}>Cristiano Ronaldo</h1>
            </div>

            <div className={styles.card}>
            <img src="./ney.jpg" className={styles.img}/>
            <h1 className={styles.title}>Neymar</h1>
            </div>

            <div className={styles.card}>
            <img src="./messi.jpg" className={styles.img}/>
            <h1 className={styles.title}>Messi</h1>
            </div>

            <div className={styles.card}>
            <img src="./hugo.jpg" className={styles.img}/>
            <h1 className={styles.title}>Hugo Souza</h1>
            </div>

            <div className={styles.card}>
            <img src="./yuri.jpg" className={styles.img}/>
            <h1 className={styles.title}>Yuri Alberto</h1>
            </div>
        </div>
    )
}