import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneCategory } from "../services/categories";
import { shuffle } from "../services/game";


export default function Quiz() {
  const [currentGame, setCurrentGame] = useState()
  const [multipleChoices, setMultipleChoices] = useState([])
  const [question, setQuestion] = useState('')
  // const [message, setMessage] = useState("")
  const [score, setScore] = useState(0)
  const [showButton, setShowButton] = useState(true)
  const { quizId } = useParams()

  let gameLength = 5

  useEffect(() => {
    const fetchOneCategory = async () => {
      const data = await getOneCategory(quizId);
      console.log(data)
      setCurrentGame({
        name: data.name,
        questions: shuffle(data.prompts.slice(-gameLength))
      });
    };
    fetchOneCategory();
  }, [])

  const gameStart = () => {
    setShowButton(false)
    setQuestion(currentGame?.questions[0]?.question)
    const choices = [
      {
        value: "right",
        text: currentGame?.questions[0]?.answer
      },
      {
        value: "wrong",
        text: currentGame?.questions[0]?.choice1
      },
      {
        value: "wrong",
        text: currentGame?.questions[0]?.choice2
      },
      {
        value: "wrong",
        text: currentGame?.questions[0]?.choice3
      }
    ]
    shuffle(choices)
    setMultipleChoices(choices)
  }

  const guess = (e) => {
    const { value } = e.target
    if (value === "right") {
      setScore(prevScore => prevScore + 1)
      console.log("you guessed correct")
    } else {
      console.log("wrong answer")
    }
    const newQuestions = currentGame.questions.shift()
    setCurrentGame(prevState => ({ ...prevState, newQuestions }))
    if (currentGame.questions.length) {
      gameStart()
    } else {
      alert(`Game over, score is ${score}`)
    }
  }

  return (
    <div>
      {currentGame && <div>Welcome to the {currentGame?.name} quiz</div>}
      {showButton ? <button onClick={() => gameStart()}>Start Quiz</button> : ""}
      <div>{question}</div>
      {multipleChoices && multipleChoices.map((choice, idx) => (
        <button onClick={guess} value={choice.value} key={idx}>{choice.text}</button>
      ))}
    </div>
  )
}