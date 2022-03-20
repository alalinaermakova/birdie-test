import './App.css';
import api from './utils/api';
import MoodObservationEvent from './components/MoodObservationEvent';
import React from 'react';


function App() {

  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    api.getEvents()
    .then((data) => {
      setEvents(data)
    })
    .catch((err) => {
      console.log("error " + err)
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Mood observation 
        </h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Event type</th>
              <th>Visit id</th>
              <th>Time stamp</th>
              <th>Care giver id</th>
              <th>Care recipient id</th>
              <th>Mood</th>
            </tr>
          </thead>
          <tbody>
            {events.map((item) => <MoodObservationEvent event={item} key={item.id}/>)}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
