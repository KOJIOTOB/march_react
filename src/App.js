import './App.css';
import {Comments, Users} from "./components";



function App() {
  return (
    <div className="App">
      <Users/>
        <Comments/>

    </div>
  );
}

export default App;


// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
//     Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
