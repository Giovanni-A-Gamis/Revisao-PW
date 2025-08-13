import { useEffect, useState } from 'react';
import './styles.css'

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((resposta) => resposta.json())
            .then((dados) => setUsuarios(dados));
    }, []);

    return (
        <div className='center'>
            <div className='items'>
                <h2>Lista de usuários</h2>
                <ul>
                    {
                        usuarios.map((usuario) => (
                            <li key={usuario.id}>{usuario.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Usuarios;