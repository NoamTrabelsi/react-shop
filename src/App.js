import './App.css';
import Nav from './components/Nav/Nav';
import Section from './components/Section/Section';
import { ArrOfProdacts } from './Data'
function App() {
  return (
    <div className="App">
      <Nav />
      <Section
        data={ArrOfProdacts}
      />
    </div>
  );
}
export default App;
