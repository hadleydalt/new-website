import './App.css';
import { Main } from './Main'
import { Page } from './splashpage/Page'

function App() {
  return (
    <Page posts={<Main />} />
  ); 
}

export default App
