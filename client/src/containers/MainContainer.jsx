import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import React from 'react'
import '../assets/MainContainer.css'

import { getAllCategories } from '../services/categories'
import { getAllPrompts, createPrompt, updatePrompt, deletePrompt } from '../services/prompts'

import Categories from '../screens/Categories'
import QuestionCreate from '../screens/QuestionCreate'
import QuestionEdit from '../screens/QuestionEdit'
import QuestionPool from '../screens/QuestionPool'
import Quiz from '../screens/Quiz'
import Home from '../screens/Home'

export default function MainContainer(props) {
  const [categoryList, setCategoryList] = useState([])
  const [promptList, setPromptList] = useState([])
  const history = useHistory()
  const { currentUser } = props

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryData = await getAllCategories()
      setCategoryList(categoryData)
    }
    const fetchPrompts = async () => {
      const promptData = await getAllPrompts()
      setPromptList(promptData)
    }
    fetchCategories()
    fetchPrompts()
  }, [])

  // console.log(categoryList)
  // console.log(promptList)

  const handleCreate = async (categoryId, promptData) => {
    console.log(promptData)
    const newData = await createPrompt(categoryId, promptData);
    setPromptList((prevState) => [...prevState, newData]);
    history.push('/question');
  };

  const handleUpdate = async (categoryId, promptId, promptData) => {
    console.log(promptData)
    const newData = await updatePrompt(categoryId, promptId, promptData);
    setPromptList((prevState) =>
      prevState.map((prompt) => {
        return prompt.id === Number(promptId) ? newData : prompt;
      })
    );
    history.push('/questions');
  };

  const handleDelete = async (categoryId, promptId) => {
    await deletePrompt(categoryId, promptId);
    setPromptList((prevState) => prevState.filter((prompt) => prompt.id !== promptId));
    history.push('/questions')
  };

  return (
    <div>
      <Switch>
        <Route path='/categories/:quizId/prompts/:promptId/edit'>
          <QuestionEdit
            categoryList={categoryList}
            promptList={promptList}
            currentUser={currentUser}
            handleUpdate={handleUpdate}
          />
        </Route>
        <Route path='/categories/:quizId/prompts/'>
          <QuestionCreate
            categoryList={categoryList}
            currentUser={currentUser}
            handleCreate={handleCreate}
          />
        </Route>
        <Route path='/categories/:quizId'>
          <Quiz />
        </Route>
        <Route path='/questions'>
          <QuestionPool
            categoryList={categoryList}
            promptList={promptList}
            handleDelete={handleDelete}
          />
        </Route>
        <Route path='/categories'>
          <Categories categoryList={categoryList} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}
