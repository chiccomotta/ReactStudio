import React, { useState } from "react"

export const HookExample = () => {
  // Dichiara una nuova variable di stato, che chiameremo "contatore"
  const [contatore, setContatore] = useState(0)

  /*
    Cosa passiamo a useState come argomento? L’unico argomento per l’Hook useState() è lo stato iniziale. 
    A differenza delle classi, lo state non deve essere un oggetto. Possiamo tenere un numero o una stringa se è quello di cui abbiamo bisogno. 
    Nel nostro esempio, vogliamo solo un numero che conti quante volte l’utente ha cliccato, quindi passiamo 0 come stato iniziale 
    alla nostra variabile. (Se volessimo memorizzare due valori distinti nello stato, dovremmo chiamare useState() due volte.)

    Cosa ritorna useState? Ritorna una coppia di valori: lo stato corrente ed una funzione che lo aggiorna. 
    Questo è il motivo per cui scriviamo const [contatore, setContatore] = useState(). 
    E’ simile a this.state.contatore e this.setState in una classe, eccetto per il fatto che li ottieni in coppia. 
    Se non sei familiare con la sintassi che abbiamo utilizzato, ci torneremo in fondo a questa pagina.

    */

  return (
    <div>
      <p>Hai cliccato {contatore} volte</p>
      <button onClick={() => setContatore(contatore + 1)}>Cliccami</button>
    </div>
  )
}
