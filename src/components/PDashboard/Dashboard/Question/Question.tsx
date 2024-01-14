import { scoreList } from 'lib/data/survet';
import styles from "./Question.module.css"
import { IScore } from 'types/pType';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

interface QuestionProps {
  id: string;
  text: string;
  onChangeSurvey: (id: string, score: number) => void;
  survey: IScore;
}

export default function Question({ id, text, onChangeSurvey, survey }: QuestionProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>{id}. {text}</h3>
      </header>
      <div className={styles.scoreList}>
        {
          scoreList.map(score => (
            <div key={`${id}_${score.id}`}
              className={cn('question', survey[id]?.score===score.score&&'selected')}
              onClick={() => onChangeSurvey(id, score.score)}>
              <p>{score.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
