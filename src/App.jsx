import { Routes, Route } from 'react-router-dom'
import Root from './routes/root'
import Home from './routes/Home'
import Exercise01 from './routes/chapter-01/Exercise01'
function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Root/>}>
            <Route index element={<Home />} />
            <Route path='chapter-01/exercise-01' element={<Exercise01/>}/>
            {/* <Route path='/chapter-02' element={}/>
            <Route path='/chapter-03' element={}/>
            <Route path='/chapter-04' element={}/>
            <Route path='/chapter-05' element={}/>
            <Route path='/chapter-06' element={}/>
            <Route path='/chapter-07' element={}/>
            <Route path='/chapter-08' element={}/>
            <Route path='/chapter-09' element={}/>
            <Route path='/chapter-10' element={}/>
            <Route path='/chapter-11' element={}/>
            <Route path='/chapter-12' element={}/> */}
          </Route>
        </Routes>
    </>
  )
}

export default App
