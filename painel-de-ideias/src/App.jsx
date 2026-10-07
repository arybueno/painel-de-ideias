import { useState } from "react"

export default function App(){
  const [ideias, setIdeias] = useState([]);        
  const [novaIdeia, setNovaIdeia] = useState("");
  return(
    <div>
    <h1>Painel de Ideias</h1>

    <input type="text" value={novaIdeia} onChange={event => setNovaIdeia(event.target.value)} />
    </div>
  )
}

