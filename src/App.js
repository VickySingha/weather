import logo from './logo.svg';
import './App.css';
import pic from './images/vdam.jpg';

function App() {
  return (
    <div className="App">
      {console.log('v Testing')}
      <h1>Hi Vicky</h1>
      <p>How are you doing today?</p>
      <img src = {pic}/>
    </div>
  );
}

export default App;
