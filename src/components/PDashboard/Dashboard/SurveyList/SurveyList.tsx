import { surveyQuestion } from 'lib/data/survet'
import Question from '../Question/Question'
import { IScore } from 'types/pType';

interface SurveyListProps {
  onChangeSurvey: (id: string, score: number) => void;
  survey: IScore;
}

export default function SurveyList({ onChangeSurvey, survey }: SurveyListProps) {
  return (
    <div>
      {
        surveyQuestion.map(question => (
          <Question key={question.id} id={question.id} text={question.questionText} onChangeSurvey={onChangeSurvey} survey={survey} />
        ))
      }
    </div>
  )
}
