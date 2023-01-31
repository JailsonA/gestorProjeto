import styles from "./Project.module.css";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Project() {
    let { id } = useParams()
  const [project, setProject] = useState([])

  useEffect(() => {
    // Para ver o loading
    
        fetch(`http://localhost:5000/projects/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProject(data)
           /*  setServices(data.services) */
           console.log(data);
          })
   
  }, [id])

    console.log(id)
    return(
        <>
        <p>{project.name}</p>
        </>
    );
}

export default Project;