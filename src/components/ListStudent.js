import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function ListStudent() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents();
    }, []);

    function getStudents() {
        axios.get("http://localhost:80/api/students/student/students").then(function (response) {
            setStudents(response.data);
        })
    }

    const deleteStudent = (id) => {
        axios.delete(`http://localhost:80/api/students/student/${id}/delete`).then(function (response) {
            getStudents();
        })
    }

    return (
        <div className='list-student-dashboard'>
            <h2>Listar Estudiantes</h2>
            <div className='table-container'>
                <table className='list-student-table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Universidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { students.map((student, key) => (
                            <tr key={ key }>
                                <td>{ student.id }</td>
                                <td>{ student.nombre }</td>
                                <td>{ student.correo }</td>
                                <td>{ student.universidad }</td>
                                <td>
                                    <Link to={ `student/${student.id}/edit` }>Editar</Link>
                                    <button onClick={ () => deleteStudent(student.id) }>Borrar</button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
