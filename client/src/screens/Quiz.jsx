import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneCategory } from "../services/categories";


export default function Quiz(props) {
  const [currentGame, setCurrentGame] = useState([])
  const { quizId } = useParams()

  useEffect(() => {
    const fetchOneCategory = async () => {
      const categoryData = await getOneCategory(quizId);
      setCurrentGame(categoryData);
    };
    fetchOneCategory();
  }, [quizId])

  return (
    <div>
      <div>Welcome to the {currentGame.name} quiz</div>

    </div>
  )
}
