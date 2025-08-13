//Bibliotecas
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './screens/Home/index';
import Contador from './screens/Contador/index';
import Usuarios from './screens/Usuarios/index';
import './App.css';

//Função principal
function App() {
    return (
        <BrowserRouter>
            <nav className='center'>
                <Link to='/'>Home</Link> | <Link to='/contador'>Contador</Link> | <Link to='/usuarios'>Usuarios</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/contador' element={<Contador />}/>
                <Route path='/usuarios' element={<Usuarios />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;