import logo from './logo.svg';
import './App.css';

function App() {
  const isMess = true;
  const mess = "123"
  return (
    <div id="root">
       {isMess ? mess : "ABC"}
    </div>
  );
}

export default App;
