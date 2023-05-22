import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import ListStudent from './components/ListStudent';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <div className="App">
      <div className='main-component'>
        <h1>CRUD de Estudiantes</h1>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Listar</Link>
              </li>
              <li>
                <Link to="student/create">Crear</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route index element={ <ListStudent /> } />
            <Route path="student/create" element={ <CreateStudent /> } />
            <Route path="student/:id/edit" element={ <EditStudent /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
