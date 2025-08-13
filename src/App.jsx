import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <div>
      <Header/>
      <div className=''>
        <Sidebar/>
        <MainContent/>
      </div>
    </div>
  )
}
