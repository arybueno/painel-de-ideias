import { useState } from "react"
import "./App.css"

export default function App() {
  const [ideias, setIdeias] = useState([]);
  const [novaIdeia, setNovaIdeia] = useState("");
  const concluidas = ideias.filter((ideia) => {
    return ideia.feita
  }).length
  const [erro, setErro] = useState("")

  function aoAdicionar(event) {
    event.preventDefault()
    console.log(novaIdeia)
    if (novaIdeia.trim() == "") {
      setErro("Digite sua ideia antes de adicionar.")
      return
    } else {
      setIdeias([
        ...ideias,
        {
          id: Date.now(),
          texto: novaIdeia.trim(),
          feita: false
        }
      ]
      )
      setErro("")
    }
    setNovaIdeia("")
  }

  function alternarIdeia(id) {
    setIdeias(
      ideias.map((ideia) => {
        if (ideia.id === id) {
          return {
            ...ideia,
            feita: !ideia.feita
          }
        } else {
          return ideia
        }
      })
    )
  }

  function removerIdeia(id) {
    setIdeias(
      ideias.filter((ideia) => {
        return ideia.id !== id
      })
    )
  }
  return (
    <div>
      <h1>Painel de Ideias</h1>

      <div className="painel">

        <form className="formulario" onSubmit={aoAdicionar}>
          <input type="text" value={novaIdeia} onChange={event => {
            setNovaIdeia(event.target.value)
            setErro("")
          }} />
          <button>Adicionar</button>
        </form>

        {erro && <p>{erro}</p>}

        {ideias.map((ideia) => (
          <div className="item" key={ideia.id}>
            <p className={ideia.feita ? "riscado" : "normal"}>{ideia.texto}</p>
            <input checked={ideia.feita} onChange={() => alternarIdeia(ideia.id)} type="checkbox" />
            <button onClick={() => removerIdeia(ideia.id)}>X</button>
          </div>
        ))}

        <p>{` ${ideias.length} ideias no painel - ${concluidas} concluidas`}</p>

      </div>
    </div>
  )
}

