import { useState } from 'react'
import './App.css'
import logoMongo from './assets/mongodb.png'
import logogit from './assets/logogit.png'
import logodb from './assets/mongo.png'
import logoLink from './assets/linklogo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <section>
        <img src={logoMongo} alt="" />
        </section>
        <section className='texto'>
       <div id="sla">
          <h1>titulo</h1>
          <p></p>
       </div>
       <div id="sla">
          <h1>titulo</h1>
          <p>A</p>
       </div>       <div id="sla">
          <h1>titulo</h1>
          <p>A</p>
       </div>
        </section>
      <footer>
        <div id="epis"><a href="https://www.mongodb.com/pt-br"><img src={logodb} className='glombers' /></a></div>
        <div id="epis"><a href="https://github.com/DiazziePedro/mongodb-ad"><img src={logogit} className='glombers' /></a></div>
        <div id="epis"><a href="https://www.linkedin.com/company/mongodbinc/"><img src={logoLink} className='glombers' /></a></div>
      </footer>
    </main>
    
    </>
  )
}

export default App
