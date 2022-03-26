import './App.css';

// components
import { TaskComponent } from './components/TaskComponent';

function App() {
  const allowDrop = (ev: any) => {
    ev.preventDefault();
  };

  const drop = (ev: any) => {
    ev.preventDefault();
    console.log(ev);
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  };

  return (
    <div className='container'>
      <h2>Trello App</h2>
      <div className='grid'>
        <div
          className='grid-sections'
          onDrop={(e) => drop(e)}
          onDragOver={(e) => allowDrop(e)}
        >
          <TaskComponent />
        </div>
        <div
          className='grid-sections'
          onDrop={(e) => drop(e)}
          onDragOver={(e) => allowDrop(e)}
        ></div>
        <div
          className='grid-sections'
          onDrop={(e) => drop(e)}
          onDragOver={(e) => allowDrop(e)}
        ></div>
      </div>
    </div>
  );
}

export default App;
