import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header/>
      <main className='main-content'>
        {/* <Routes>
          <Route path='/' element={<Home />} />
        </Routes> */}
      </main>
    </>
  )
}

export default App
