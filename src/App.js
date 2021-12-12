import logo from './logo.svg';
import './App.css';
// means if you any name the Greet will print here
// import HelloMsg from './components/Greet';
//if we use a (a named export ) we should write the same name in component 
import  {Greet}  from './components/Greet'; 

import Welcome from './components/Welcome';

import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
    </div>
  );
}

export default App;
