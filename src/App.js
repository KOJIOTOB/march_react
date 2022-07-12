import './App.css';

import {Routes, Route} from "react-router-dom";

import {MainLayouts} from "./layouts/MainLayouts";


import {TodoPage} from "./pages/TodoPage";
import {AlbumPage} from "./pages/AlbumPage";
import {CommentPage} from "./pages/CommentPage";
import {PostsComponent} from "./components";


function App() {
  return (
      <div className="App">
          <Routes>
              <Route path={'/'} element={<MainLayouts/>}>
                  <Route path={'todos'} element={<TodoPage/>}/>
                  <Route path={'albums'} element={<AlbumPage/>}/>
                  <Route path={'comments'} element={<CommentPage/>}>
                      <Route path={':postId'} element={<PostsComponent/>}/>
                  </Route>
              </Route>
          </Routes>
      </div>
  );
}

export default App;

// отримати пости та вивести їх використовуючи класові копмоненти
// отримати коментарі та вивести їх використовуючи класові копмоненти


