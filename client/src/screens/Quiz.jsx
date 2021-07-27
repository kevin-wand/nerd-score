import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneCategory } from "../services/categories";
import { shuffle } from "../services/game";


export default function Quiz() {
  const [currentGame, setCurrentGame] = useState([0])
  const [quiz, setQuiz] = useState([])
  const [multiChoice, setMultiChoice] = useState([])
  const { quizId } = useParams()

  let quizArray = []
  let questionArray = []
  let gameLength = 5
  let correct = ""

  useEffect(() => {
    const fetchOneCategory = async () => {
      const categoryData = await getOneCategory(quizId);
      setCurrentGame(categoryData);
    };
    fetchOneCategory();
  }, [])

  const displayQuestions = () => {
    questionArray.push(quiz[0]?.answer)
    questionArray.push(quiz[0]?.choice1)
    questionArray.push(quiz[0]?.choice2)
    questionArray.push(quiz[0]?.choice3)
    correct = quiz[0]?.answer
    shuffle(questionArray)
    setMultiChoice(questionArray)
  }

  const gameStart = () => {
    for (let j = 0; j < gameLength; j++) {
      quizArray.push(currentGame.prompts[j])
    }
    shuffle(quizArray)
    setQuiz(quizArray)
    displayQuestions()
    // toggle button style display hidden
  }


  const guess = (e) => {
    if (e.target.value === correct) {
      console.log("correct")
    } else {
      console.log("wrong")
    }
    quiz.splice(0, 1)
    setQuiz((prevState) => [...prevState, quiz])
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

  return (
    <div>
      <div>Welcome to the {currentGame.name} quiz</div>
      <button onClick={() => gameStart()}>Start Quiz</button>
      {quiz &&
        <div>
          <div>{quiz[0]?.question}</div>
          {/* <div>{multiChoice[0]}</div>
          <div>{multiChoice[1]}</div>
          <div>{multiChoice[2]}</div>
          <div>{multiChoice[3]}</div> */}
        </div>
      }
      <br />
      {multiChoice &&
        <div>
          <button onClick={() => guess()}><div>{multiChoice[0]}</div></button>
          <button onClick={() => guess()}><div>{multiChoice[1]}</div></button>
          <button onClick={() => guess()}><div>{multiChoice[2]}</div></button>
          <button onClick={() => guess()}><div>{multiChoice[3]}</div></button>
        </div>
      }
    </div>
  )
}
