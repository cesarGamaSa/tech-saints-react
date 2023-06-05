import './App.css';

import User from "./User";

function App() {
  const user = {
    name: 'Cesar Sa',
    capability: 'Commerce',
    team: 'Rijk Zwaan'
  };

  return (
    <div className="App">
      <User user={user} />
    </div>
  );
}

export default App;
