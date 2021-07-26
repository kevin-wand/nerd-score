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
  const { question, answer, choice1, choice2, choice3, category_id } = formData;
  const { currentUser, promptList, handleUpdate } = props;
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
  }, [promptList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      category_id: Number(quizId),
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(quizId, promptId, formData);
      }}
    >
      <h3>Edit Question</h3>
      <label>
        Question:
        <input
          type='text'
          name='question'
          value={question}
          onChange={handleChange}
        />
      </label>
      <label>
        Answer:
        <input
          type='text'
          name='answer'
          value={answer}
          onChange={handleChange}
        />
      </label>
      <label>
        Choice 1:
        <input
          type='text'
          name='choice1'
          value={choice1}
          onChange={handleChange}
        />
      </label>
      <label>
        Choice 2:
        <input
          type='text'
          name='choice2'
          value={choice2}
          onChange={handleChange}
        />
      </label>
      <label>
        Choice 3:
        <input
          type='text'
          name='choice3'
          value={choice3}
          onChange={handleChange}
        />
      </label>
      <button>Edit</button>
    </form>
  );
}
