import { scoreList } from 'lib/data/survet';
import styles from "./Question.module.css"

interface QuestionProps {
  id: string;
  text: string;
}

export default function Question({ id, text }: QuestionProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>{id}. {text}</h3>
      </header>
      <div className={styles.scoreList}>
        {
          scoreList.map(score => (
            <div key={`${id}_${score.id}`} className={styles.question}>
              <p>{score.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
