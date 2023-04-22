import logo from './logo.svg';
import './App.css';
import { LeftSidebarProvider } from './Context/LeftSidebarContext';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';

function App() {
  return (
    <LeftSidebarProvider>
      <LeftSidebar />

    </LeftSidebarProvider>
  );
}

export default App;
