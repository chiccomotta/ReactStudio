import React, { useEffect } from "react"

export const BeforeUnload = () => {
  // Handler che lego all'evento beforeunload
  const onBeforeOnloadHandler = (evt) => {
    console.log("Handler called")
    evt.preventDefault()
    evt.returnValue = ""
  }

  const subscribe = () => {
    // Attenzione: devo legare lo stesso handler che poi andrò a rimuovere nella funzione di cleanup
    // (in questo caso onBeforeOnloadHandler)
    window.addEventListener("beforeunload", onBeforeOnloadHandler)

    // Cleanup
    return () => {
      window.removeEventListener("beforeunload", onBeforeOnloadHandler)
    }
  }

  useEffect(subscribe, [])

  return (
    <div>
      <p style={{ backgroundColor: "yellow", width: "30%" }}>Prova a chiudere il tab o il browser </p>
    </div>
  )
}
