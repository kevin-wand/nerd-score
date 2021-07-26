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
  const { question, answer, choice1, choice2, choice3, category_id } = formData;
  const { categoryList, handleCreate } = props;
  const { quizId } = useParams()

  // const nameOfcategory = categoryList.filter((category) => category.id === Number(quizId))

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      category_id: Number(quizId),
      // category_id: nameOfcategory[0].name,
    }));

  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(quizId, formData);
    }}>
      <h3>Create Question</h3>
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

      <button>Submit</button>
    </form >
  );
}
