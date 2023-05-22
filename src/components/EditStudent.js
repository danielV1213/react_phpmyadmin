import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateStudent() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({})

  const { id } = useParams();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // We add the spread operator (...) to create a single object with the data.
    setInputs(values => ({ ...values, [name]: value }))
  }

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost:80/api/students/student/studentToEdit/${id}`).then(function (response) {
      setInputs(response.data[0]);
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost:80/api/students/student/${id}/edit`, inputs).then(function (response) {
      navigate('/');
    })
  }

  return (
    <div className='create-student-form'>
      <h2>Editar Estudiantes</h2>
      <form onSubmit={ handleSubmit }>
        <label>Nombre</label>
        <input value={ inputs.nombre } type="text" name='nombre' onChange={ handleChange } />
        <br />
        <label>Correo Electrónico</label>
        <input value={ inputs.correo } type="text" name='correo' onChange={ handleChange } />
        <br />
        <label>Universidad</label>
        <input value={ inputs.universidad } type="text" name='universidad' onChange={ handleChange } />
        <br />
        <button>Guardar</button>
      </form>
    </div>
  )
}
