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
      <select className='bank-select' onChange={handleChange} defaultValue='default'>
        <option disabled value='default' >
          -- Select a Category --
        </option>
        {categoryList.map((category) => (
          <option value={category.id} key={category.id}>{category.name}</option>
        ))}
      </select>
      <div className='bank-list'>
        {dropdown ? <Link to={`/categories/${dropdown}/prompts`} className='bank-add'><div>Add Question to Bank</div></Link> : ""}
        {promptList.prompts ?
          (promptList.prompts.map((prompt) => (
            <div key={prompt.id} className='bank-prompts'>
              <div>{prompt.question}</div>
              <div className='bank-button-container'>
                <Link to={`/categories/${dropdown}/prompts/${prompt.id}/edit`} ><button className='bank-buttons'>Edit</button></Link>
                <button onClick={() => handleDelete(dropdown, prompt.id)} className='bank-buttons'>Delete</button>
              </div>
            </div>
          ))) : ("")}
      </div>
    </div>
  );
}
