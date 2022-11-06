import styles from './Tasks.module.css'

export function Info () {
    return (
        <div className={styles.infoWrapper}>
            <div className={styles.infoCounter}>
                <p className={styles.blueText}>Tarefas Criadas</p>
                <span>0</span>
            </div>
            <div className={styles.infoCounter}>
                <p className={styles.purpleText}>Concluídas</p>
                <span>0</span>
            </div>
        </div>
    )
}