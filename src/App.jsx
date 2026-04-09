// Feito por Luccas Diazzi, Emerson, Camilly e Maria Eduarda

import { useState } from 'react'
import './App.css'
import logoMongo from './assets/mongodb.png'
import logogit from './assets/logogit.png'
import logodb from './assets/mongo.png'
import logoLink from './assets/linklogo.png'
import { Leaf  } from 'lucide-react';

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
          <h1>O que é?</h1>
          <p>É um sistema de banco de dados não relacional e de código aberto que armazerna dados em documentos
            flexíveis , em vez de usar tabelas e linhas comos os bancos de dados tradicionais</p>
       </div>
       <div id="sla">
          <h1>Para que serve?</h1>
          <p>O MongoDB serve como um banco de dados de propósito geral, projetado para atender às necessidades de
            uma variedade de aplicações modernas.</p>
       </div>       
       <div id="sla">
          <h1>Diferença para outros bancos de dados</h1>
          <p>A principal diferença é a flexibilidade: o MongoDB armazena dados em documentos JSON (BSON),
             permitindo esquemas dinâmicos, alta escalabilidade horizontal e performance superior para dados
              não estruturados.</p>
       </div>
        </section>
      <footer>
        <div id="epis"><a href="https://www.mongodb.com/pt-br"><Leaf id="folha"/></a></div>
        <div id="epis"><a href="https://github.com/DiazziePedro/mongodb-ad"><img src={logogit} className='glombers' /></a></div>
        <div id="epis"><a href="https://www.linkedin.com/company/mongodbinc/"><img src={logoLink} className='glombers' /></a></div>
      </footer>
    </main>
    
    </>
  )
}

export default App
