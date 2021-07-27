import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneCategory } from "../services/categories";
import { shuffle } from "../services/game";


export default function Quiz() {
  const [currentGame, setCurrentGame] = useState([0])
  const [quiz, setQuiz] = useState([])
  const [multipleChoice, setMultipleChoice] = useState([])
  const [userAnswer, setUserAnswer] = useState("")
  // const [message, setMessage] = useState("")
  // const [score, setScore] = useState(0)
  const { quizId } = useParams()

  let gameTime = []
  let questionArray = []
  let gameLength = 5
  let correctAnswer = ""

  useEffect(() => {
    const fetchOneCategory = async () => {
      const categoryData = await getOneCategory(quizId);
      setCurrentGame(categoryData);
    };
    fetchOneCategory();
    console.log(currentGame)
  }, [])

  const gameStart = () => {
    console.log(currentGame)
    for (let j = 0; j < gameLength; j++) {
      gameTime.push(currentGame.prompts[j])
    }
    shuffle(gameTime)
    setQuiz(gameTime)
    questionArray.push(quiz[0]?.answer)
    questionArray.push(quiz[0]?.choice1)
    questionArray.push(quiz[0]?.choice2)
    questionArray.push(quiz[0]?.choice3)
    shuffle(questionArray)
    setMultipleChoice(questionArray)
    // toggle button style display hidden
  }

  const guess = (e) => {
    correctAnswer = quiz[0]?.answer
    // console.log(correctAnswer)
    console.log(e.target)
    setUserAnswer(e.target)
    // console.log(userAnswer)
    if (userAnswer === correctAnswer) {
      console.log("you guessed correct")
    } else {
      console.log("wrong answer")
    }
    quiz.shift()
    setQuiz((prevState) => [...prevState])
    questionArray.push(quiz[0]?.answer)
    questionArray.push(quiz[0]?.choice1)
    questionArray.push(quiz[0]?.choice2)
    questionArray.push(quiz[0]?.choice3)
    correctAnswer = quiz[0]?.answer
    shuffle(questionArray)
    setMultipleChoice(questionArray)
  }

  return (
    <div>
      {currentGame && <div>Welcome to the {currentGame?.name} quiz</div>}
      <button onClick={() => gameStart()}>Start Quiz</button>
      {quiz &&
        <div>
          <div>{quiz[0]?.question}</div>
          <button onClick={(e) => guess(e)}>{multipleChoice[0]}</button>
          <button onClick={(e) => guess(e)}>{multipleChoice[1]}</button>
          <button onClick={(e) => guess(e)}>{multipleChoice[2]}</button>
          <button onClick={(e) => guess(e)}>{multipleChoice[3]}</button>
        </div>
      }
    </div>
  )
}


  // 3. put them into a new array with a randomized order (push)
  // 4. remove from the original array list so they dont show up again (splice)
  // 5. make a new array with just the single question (pop)
  // 6. take the single array's question, choices, and answer, pull out question then shuffle the order for the choices and answer
  // tie the order to display with buttons
  // 7. make a validation query for the game user can only click one and game stops from choosing more
  // 8. handleClick
  // e.target on button click
  // display correct or incorrect (and answer)
  // display next button to move to next item in the new array and do all over
  // 9. later add a score, connect score to user

