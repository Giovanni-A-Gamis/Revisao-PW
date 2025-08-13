import { useState } from 'react';
import './styles.css'

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div className='center'>
            <div className='items'>
                <p className='center num'>{contador}</p>
                <button onClick={() => setContador(contador + 1)}>Aumentar</button>
            </div>   
        </div>
    );
}

export default Contador;