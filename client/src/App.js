import './App.css';
import FindVowels from './Components/FindVowels';
import { IIndQuestion } from './Components/IIndQuestion';
import Postal from './Components/Postal';

function App() {
  return (
    <div>
      <FindVowels />
      <hr />
      <Postal />
      <hr />
      <IIndQuestion />
    </div>
  );
}

export default App;
