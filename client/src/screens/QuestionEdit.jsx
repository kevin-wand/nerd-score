import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function QuestionEdit(props) {
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    choice1: '',
    choice2: '',
    choice3: '',
    category_id: '',
  });
  const { question, answer, choice1, choice2, choice3 } = formData;
  const { promptList, handleUpdate } = props;
  const { quizId, promptId } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singlePrompt = promptList.find((prompt) => prompt.id === Number(promptId));
      setFormData({
        question: singlePrompt.question,
        answer: singlePrompt.answer,
        choice1: singlePrompt.choice1,
        choice2: singlePrompt.choice2,
        choice3: singlePrompt.choice3,
        category_id: singlePrompt.category_id,
      });
    };
    if (promptList.length) {
      prefillFormData();
    }
  }, [promptList, promptId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      category_id: Number(quizId),
    }));
  };

  return (
    <>
      <h3 className='question-header'>Edit Question</h3>
      <div className='question-wrapper'>
        <form
          className='question-form'
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(quizId, promptId, formData);
          }}
        >
          <label className='question-label'>
            Question:
            <input
              className='question-input'
              type='text'
              name='question'
              value={question}
              onChange={handleChange}
            />
          </label>
          <label className='question-label'>
            Answer:
            <input
              className='question-input'
              type='text'
              name='answer'
              value={answer}
              onChange={handleChange}
            />
          </label>
          <label className='question-label'>
            Choice 1:
            <input
              className='question-input'
              type='text'
              name='choice1'
              value={choice1}
              onChange={handleChange}
            />
          </label>
          <label className='question-label'>
            Choice 2:
            <input
              className='question-input'
              type='text'
              name='choice2'
              value={choice2}
              onChange={handleChange}
            />
          </label>
          <label className='question-label'>
            Choice 3:
            <input
              className='question-input'
              type='text'
              name='choice3'
              value={choice3}
              onChange={handleChange}
            />
          </label>
          <button className='question-button'>Edit</button>
        </form>
      </div>
    </>
  );
}
