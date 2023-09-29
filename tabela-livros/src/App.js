import React, { Component } from "react";

import TabelaHead from "./componets/TabelaHead";
import TabelaFoot from "./componets/TabelaFoot";
import TabelaBody from "./componets/TabelaBody";

// function App() {
class App extends Component {
  state = {
    livros: [
      {
        id: "123-456-789-99",
        titulo: "CSS Grid Layout",
        autor: "Mauricio Samy"
      },
      {
        id: "123-456-689-99",
        titulo: "Node Essencial",
        autor: "Ricardo Lecheta"
      },
      {
        id: "123-456-589-99",
        titulo: "Aprendendo Material",
        autor: "Kyle Mew"
      }
    ]
  };
  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaBody livros={this.state.livros} />
        <TabelaFoot />
      </table>
    );
  }
}

export default App;

//   return (
//     <table className="tabela">
//       <TabelaHead/>
//       <TabelaBody />
//       <TabelaFoot />
//     </table>
//   );
// }
//}
// export default App;
