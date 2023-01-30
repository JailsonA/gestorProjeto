import { useState, useEffect } from 'react';
import Input from '../form/Input.js';
import Select from '../form/Select.js';
import SubmitButton from '../form/SubmitButton.js';
import style from './ProjectForm.module.css';


function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [project, setProject] = useState(projectData || {})
  const [categories, setCategories] = useState([]);

  /* criado para fazer a ligaçao com api e trazer os dados solicitado */
  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])

  const submit = (e) => {
    e.preventDefault()
   // console.log(project);
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  /* retorno do jsx */
  return (
    <form onSubmit={submit} className={style.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />
      <Select 
        name="category_id" 
        text="Selecione a categoria" 
        options={categories}  
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
