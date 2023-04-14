import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar';
import Content from './Content';

function App() {
  return (
    <div className="flex flex-row max-h-full p-3 bg-slate-100">

      <SideBar />
      <Content/>
    </div>
  );
}

export default App;
