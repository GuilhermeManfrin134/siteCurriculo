import { Route, Routes, Navigate } from 'react-router-dom';

//Importando Componentes
import Home from '../../src/components/Home';

export default function Routex(){
    return(
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
    )
}