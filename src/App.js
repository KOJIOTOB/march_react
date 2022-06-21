// 1. Описати всю сім'ю сімпсонів (5 персонажів)

import './App.css';
import SimpsonData from "./components/ComponentsSimpson";



function App() {
  return (
    <div className="App">
      <SimpsonData
          itemName={'Homer'}
          desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, et.'}
          picture={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
      />
        <SimpsonData
          itemName={'Marge'}
          desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, et.'}
          picture={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
      />
        <SimpsonData
            itemName={'Bart'}
            desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, et.'}
            picture={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
        />
        <SimpsonData
          itemName={'Lisa'}
          desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, et.'}
          picture={'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'}
      />
        <SimpsonData
          itemName={'Maggie'}
          desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, et.'}
          picture={'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'}
      />


    </div>
  );
}

export default App;
