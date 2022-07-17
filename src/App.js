import './App.css';
import {Posts} from "./components";
import {Comments} from "./components/comments/Comments";


function App() {
  return (
      <div className="App">
          <Posts/>
          <Comments/>
      </div>
  );
}

export default App;


// отримати пости та вивести їх використовуючи класові копмоненти
// отримати коментарі та вивести їх використовуючи класові копмоненти