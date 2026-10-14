import React from 'react';
import ReactDOM from 'react-dom/client';
import Presentation from './components/Presentation';
const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  return (
    <div>
      <Presentation nom="Bougodi" prenom="Lhoussine" age="21" >
        <p>Bienvenue vous etes dans children props</p>
      </Presentation>
      <Presentation nom="Alami" prenom="Said" age="20">
        <button>Mirci</button>
      </Presentation>
    </div>
  );
}
root.render(<App />);