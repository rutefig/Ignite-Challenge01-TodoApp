import styles from "./Tasks.module.css";
import ClipboardIcon from "../../assets/clipboardIcon.svg";

export function Empty() {
  return (
    <div className={styles.emptyWrapper}>
      <img src={ClipboardIcon} alt="" />
      <div className={styles.emptyText}>
        <h4>Você ainda não tem tarefas cadastradas</h4>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
