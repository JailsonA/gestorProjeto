import { useState, useEffect } from 'react';
import Input from '../form/Input.js';
import Select from '../form/Select.js';
import SubmitButton from '../form/SubmitButton.js';
import style from './ProjectForm.module.css';


function ProjectForm({ btnText }) {

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

  /* retorno do jsx */
  return (
    <form className={style.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select name="category_id" text="Selecione a categoria" options={categories} />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
