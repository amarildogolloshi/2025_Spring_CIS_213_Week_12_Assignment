import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import MemeGenerator from './components/MemeGenerator'
import useFetchMeme from './hooks/useFetchMeme'
import useLocalStorage from './hooks/useLocalStorage.jsx'

function App() {
  const [memeText, setMemeText] = useLocalStorage("memeText", { top: " ", bottom:" " })
  const memeImg = useFetchMeme(memeText)
 
  return (
    <div className='container'>
      <Header />
      
      <div className='container-meme-generator'>
        <Form memeText={memeText} setMemeText={setMemeText} />
        <MemeGenerator memeText={memeText} memeImg={memeImg} />
      </div>
      
    </div>
  )
}

export default App
