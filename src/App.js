import './App.css';

import GoalEntries from "./GoalEntries";
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
      <GoalEntries />
    </div>
  );
}

export default App;
