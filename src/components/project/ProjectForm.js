function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Insira titulo de projeto" />
      </div>
      <div>
        <input type="number" placeholder="Insira orçamento total" />
      </div>
      <div>
        <select name="category_id">
          <option disabled selected>Selecione a categoria</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar projeto"  />
      </div>
    </form>
  );
}

export default ProjectForm;
