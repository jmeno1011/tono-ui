import { surveyQuestion } from 'lib/data/survet'
import Question from '../Question/Question'

export default function SurveyList() {
  return (
    <div>
      {
        surveyQuestion.map(question => (
          <Question key={question.id} id={question.id} text={question.questionText} />
        ))
      }
    </div>
  )
}
