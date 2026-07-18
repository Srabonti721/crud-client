
import { Suspense } from 'react'
import './App.css'
import Users from './components/Users'

function App() {

const userPromise = fetch("http://localhost:3000/users").then(res=>res.json())
  return (
    <>
<h1>simple crud operation</h1>
<Suspense fallback={<p>loading...</p>}>
<Users userPromise = {userPromise}></Users>
</Suspense>

    </>
  )
}

export default App
