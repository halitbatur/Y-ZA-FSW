import Introduction from "./Introduction";
import {Hobbies} from './Introduction';
import style from './App.css';



function App() {
  return (
    <>
      <h1 className="header">Hello AGAIN</h1>
      <div>Hello once again</div>
      <Introduction />
      <Introduction name="Bonolo" age={25}/>
      <Introduction name="Hophney" age={26}/>
      <Introduction name="Advocate" age={66}/>
      <Introduction />
      <Hobbies />
      <img src="/quby.gif" alt="quby duby"/>
      <img src='/image/hh.gif' alt="bunny"/>
    </>
  );
}

export default App;
