import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Список задач.</p>
      </header>
      <div className="container">
        <div className="right-panel">
            <p>Меню</p>
            <ul>
              <li>Новая</li>
              <li>Список</li>
            </ul>
        </div>
        <div className="central-panel">
          <p>Здесь будет список задачи</p>
        </div>
      </div>
    </div>
  );
}

export default App;
