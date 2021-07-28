import { useState } from 'react';
import { useParams } from 'react-router';

export default function QuestionCreate(props) {
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    choice1: '',
    choice2: '',
    choice3: '',
    category_id: '',
  });
  const { question, answer, choice1, choice2, choice3 } = formData;
  const { handleCreate } = props;
  const { quizId } = useParams()

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
      <h3 className='question-header'>Create Question</h3>
      <div className='question-wrapper'>
        <form
          className='question-form'
          onSubmit={(e) => {
            e.preventDefault();
            handleCreate(quizId, formData);
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
          <button className='question-button'>Submit</button>
        </form >
      </div>
    </>
  );
}
