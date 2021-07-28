import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import { getOneCategory } from "../services/categories";

export default function QuestionBank(props) {
  const { categoryList, handleDelete } = props

  const [dropdown, setDropdown] = useState(null);
  const [promptList, setPromptList] = useState('');

  useEffect(() => {
    if (dropdown) {
      const fetchOneCategory = async () => {
        const categoryData = await getOneCategory(dropdown);
        setPromptList(categoryData);
      };
      fetchOneCategory();
    }
  }, [dropdown, handleDelete]);

  const handleChange = (e) => {
    const { value } = e.target;
    setDropdown(value);
  };

  return (
    <div className='bank-wrapper'>
      <h3 className='bank-header'>Question Bank</h3>
      <select onChange={handleChange} defaultValue='default'>
        <option disabled value='default' >
          -- Select a Category --
        </option>
        {categoryList.map((category) => (
          <option value={category.id} key={category.id}>{category.name}</option>
        ))}
      </select>
      {dropdown ? <Link to={`/categories/${dropdown}/prompts`}><div>Add A Question</div></Link> : ""}
      {promptList.prompts ?
        (promptList.prompts.map((prompt) => (
          <div key={prompt.id}>
            <div>{prompt.question}</div>
            <Link to={`/categories/${dropdown}/prompts/${prompt.id}/edit`}><button>Edit</button></Link>
            <button onClick={() => handleDelete(dropdown, prompt.id)}>Delete</button>
          </div>
        ))) : ("")}
      <div></div>
    </div>
  );
}
