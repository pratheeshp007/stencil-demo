import './App.css';
import { MyComponentOne } from 'component-library-1-react';
import { MyComponentTwo } from 'component-library-2-react';

function App() {
  return (
    <div className="App">
      <MyComponentOne  first="Stencil" last="'Don't call me a framework' JS"></MyComponentOne>
      <MyComponentTwo  first="Stencil" last="'Don't call me a framework' JS"></MyComponentTwo>
    </div>
  );
}

export default App;
