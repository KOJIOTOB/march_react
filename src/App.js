import './App.css';
import {Users} from "./components";
import {getUserPosts} from "./services/user.api.service";
import {useState} from "react";
import {Posts} from "./components/posts/Posts";


function App() {
    let [posts, setPosts] = useState([])
    const elevate = (id) => {
        getUserPosts(id).then(({data}) => {
            setPosts([...data])
        })
    }
  return (
    <div className="App">
      <div className={'users'}><Users elevate={elevate}/></div>
        <Posts posts={posts}/>
    </div>
  );
}

export default App;


// Отримати всіх користувачів з jsonplaceholder, вивести їх.
//     Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси