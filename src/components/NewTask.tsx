import styles from './NewTask.module.css'
import AddIcon from '../assets/addIcon.svg'

export function NewTask () {

    const handleCreateNewTodo = () => {}

    return (
        <form className={styles.todoForm} onSubmit={handleCreateNewTodo}>
            <input type="text" name="todo" placeholder='Adicione uma nova tarefa' />
            <button type="submit">
                Criar
                <img src={AddIcon} width={16} height={16} />
            </button>
        </form>
    )
}