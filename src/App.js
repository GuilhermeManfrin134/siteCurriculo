import { BrowserRouter } from 'react-router-dom';

//Importando Componentes
import Home from './components/Home';

export default function App() {
  return (
    <BrowserRouter>
        <Home/>
    </BrowserRouter>
  );
}
