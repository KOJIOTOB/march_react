import './App.css';

import {Routes, Route} from "react-router-dom";

import {MainLayouts} from "./layouts/MainLayouts";


import {TodoPage} from "./pages/TodoPage";
import {AlbumPage} from "./pages/AlbumPage";
import {CommentPage} from "./pages/CommentPage";
import {PostComponent} from "./components";


function App() {
  return (
      <div className="App">
          <Routes>
              <Route path={'/'} element={<MainLayouts/>}>
                  <Route path={'todos'} element={<TodoPage/>}/>
                  <Route path={'albums'} element={<AlbumPage/>}/>
                  <Route path={'comments'} element={<CommentPage/>}>
                      <Route path={':postId'} element={<PostComponent/>}/>
                  </Route>
              </Route>
          </Routes>
      </div>
  );
}

export default App;


