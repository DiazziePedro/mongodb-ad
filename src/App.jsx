import { useState } from 'react'
import './App.css'
import logoMongo from './assets/mongodb.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <section>
        <img src={logoMongo} alt="" />
        <p>
          teste
        </p>
      </section>
      <footer>
        <div id="mongo">
          <div className="dam"></div>
        </div>
      </footer>
    </main>
    
    </>
  )
}

export default App
