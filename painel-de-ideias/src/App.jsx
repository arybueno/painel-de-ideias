import { useState } from "react"
import "./App.css"

export default function App(){
  const [ideias, setIdeias] = useState([]);        
  const [novaIdeia, setNovaIdeia] = useState("");

  function aoAdicionar(event) {
   event.preventDefault()
   console.log(novaIdeia)
   setIdeias([
    ...ideias,
    {
      id: Date.now(),
      texto: novaIdeia.trim(),
      feita: false
    }
   ]
  )
  setNovaIdeia("")
}

function alternarIdeia(id) {
  setIdeias(
    ideias.map((ideia) => {
       if (ideia.id === id) {
        return{
          ...ideia,
          feita: !ideia.feita
}
       } else{
        return ideia
       }
})
  )
}
  return(
    <div>
    <h1>Painel de Ideias</h1>

    <form  onSubmit={aoAdicionar}>
      <input type="text" value={novaIdeia} onChange={event => setNovaIdeia(event.target.value)} />
      <button>Adicionar</button>
    </form>

    {ideias.map((ideia) => (
      <div key={ideia.id}>
  <p className={ideia.feita ? "riscado" : "normal"}>{ideia.texto}</p>
  <input checked={ideia.feita} onChange={() => alternarIdeia(ideia.id)} type="checkbox" />
</div>
  ))}
    </div>
  )
}

