import logo from './logo.svg';
import './App.css';
import SignupContainer from './containers/SignupContainer';

function App() {
  // define js and return jsx
  // state = value that is keeping track of something in the component

  // SignupContainer can be called in this way without it being a function as a result of REACT components
  // SignupContainer is a function in our container.js but can be used bc of import and export
  // self-closing tag
  // it has to be capitalised otherwise it won't be recognised as a react component
  return (
    <>
      <h1>Activity Tracker</h1>
      <SignupContainer />
    </>
  );
}

export default App;
