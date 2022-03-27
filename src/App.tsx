import './App.css';

// components
import { TaskComponent } from './components/TaskComponent';

function App() {
  const allowDrop = (ev: any) => {
    ev.preventDefault();
  };

  function drag(ev: any) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  const drop = (ev: any) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  };

  return (
    <div className='container'>
      <h2>Trello App</h2>
      <div className='grid'>
        <div
          className='grid-sections'
          id='div-1'
          onDrop={(e) => drop(e)}
          onDragOver={(e) => allowDrop(e)}
        >
          <TaskComponent drag={drag} />
        </div>
        <div
          className='grid-sections'
          id='div-2'
          onDrop={(e) => drop(e)}
          onDragOver={(e) => allowDrop(e)}
        ></div>
        <div
          className='grid-sections'
          id='div-3'
          onDrop={(e) => drop(e)}
          onDragOver={(e) => allowDrop(e)}
        ></div>
      </div>
    </div>
  );
}

export default App;
