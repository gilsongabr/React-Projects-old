import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Gilson" />
      <SayMyName nome="Gabriel" />
      <Pessoa nome="Gilson Gabriel" idade="27" profissao="Desenvolvedor Web" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
