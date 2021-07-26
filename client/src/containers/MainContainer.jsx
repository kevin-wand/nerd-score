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
import Home from '../screens/Home'

export default function MainContainer() {
  const [categoryList, setCategoryList] = useState([])
  const [promptList, setPromptList] = useState([])
  const history = useHistory()

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

  const handleCreate = async (formData) => {
    const promptData = await createPrompt(formData);
    setPromptList((prevState) => [...prevState, promptData]);
    history.push('/categories');
  };

  const handleUpdate = async (id, formData) => {
    const promptData = await updatePrompt(id, formData);
    setPromptList((prevState) =>
      prevState.map((prompt) => {
        return prompt.id === Number(id) ? promptData : prompt;
      })
    );
    history.push('/categories');
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
            handleUpdate={handleUpdate}
          />
        </Route>
        <Route path='/categories/:quizId/prompts/'>
          <QuestionCreate
            categoryList={categoryList}
            promptList={promptList}
            handleCreate={handleCreate}
          />
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
