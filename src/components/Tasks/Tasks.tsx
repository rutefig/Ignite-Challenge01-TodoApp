import { Empty } from './Empty'
import { Info } from './Info'
import styles from './Tasks.module.css'

export function Tasks () {
    return (
        <div className={styles.container}>
            <Info />
            <Empty />
        </div>
    )
}

