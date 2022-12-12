import '../css/App.css';
import {Link, Outlet} from 'react-router-dom'
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
              <li><Link to={`todos`} >Список</Link></li>
            </ul>
        </div>
        <div className="central-panel">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
