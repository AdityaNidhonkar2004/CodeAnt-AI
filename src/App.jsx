import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginScreen from './components/LoginPage/LoginScreen'
import RepositoryScreen from './components/RepositoryPage/RepositoryScreen'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen/>}></Route>
        <Route path="/repositoryscreen" element={<RepositoryScreen/>}></Route>
      </Routes>
    </>
  )
}

export default App
