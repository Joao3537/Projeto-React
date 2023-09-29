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
        autor: "Mauricio Samy",
        preço: "200,00"
      },
      {
        id: "123-456-689-99",
        titulo: "Node Essencial",
        autor: "Ricardo Lecheta",
        preço: "50,00"
      },
      {
        id: "123-456-589-99",
        titulo: "Aprendendo Material",
        autor: "Kyle Mew",
        preço: "75,00"
      },
      {
        id: "123-456-389-99",
        titulo: "Aprendendo JavaScript",
        autor: "Francisco Moreira",
        preço: "60,00"
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
