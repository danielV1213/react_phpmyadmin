import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateStudent() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // We add the spread operator (...) to create a single object with the data.
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:80/api/students/student/save", inputs).then(function (response) {
            navigate('/');
        })
    }

    return (
        <div className='create-student-form'>
            <h2>Crear Estudiantes</h2>
            <form onSubmit={ handleSubmit }>
                <label>Nombre</label>
                <input type="text" name='nombre' onChange={ handleChange } />
                <br />
                <label>Correo Electrónico</label>
                <input type="text" name='correo' onChange={ handleChange } />
                <br />
                <label>Universidad</label>
                <input type="text" name='universidad' onChange={ handleChange } />
                <br />
                <button>Guardar</button>
            </form>
        </div>
    )
}
