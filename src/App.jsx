import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import NavBar from './components/Bar/NavBar'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  return (
    <>
    <NavBar user={user}/>
    </>
  )
}

export default App
