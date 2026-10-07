import { useState } from "react"

export default function App(){
  const [ideias, setIdeias] = useState([]);        
  const [novaIdeia, setNovaIdeia] = useState("");

  function aoAdicionar(event) {
   event.preventDefault()
   console.log(novaIdeia)
   setIdeias([
    ...ideias,
    novaIdeia.trim() 
   ]
  )
  setNovaIdeia("")
}

  return(
    <div>
    <h1>Painel de Ideias</h1>

    <form  onSubmit={aoAdicionar}>
      <input type="text" value={novaIdeia} onChange={event => setNovaIdeia(event.target.value)} />
      <button>Adicionar</button>
    </form>

    {ideias.map((ideia) => (
      <p key={ideia}>{ideia}</p>
  ))}
    </div>
  )
}

