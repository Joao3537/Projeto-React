import React, { Component } from "react";

import TabelaHead from "./componets/TabelaHead";
import TabelaFoot from "./componets/TabelaFoot";
import TabelaBody from "./componets/TabelaBody";

// function App() {
class App extends Component {
  state = {
    livros: [ ]
  };
  componentDidMount() {
    fetch("/api/livros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function (error) {
        console.log("Erro na requisição");
      })
      .finally(function () {
        console.log("Sempre retorna")
      })

  };
  handlerRemoverLinha = (id) => {
    const livros = this.state.livros.filter((l) => l.id !== id);
    this.setState({livros});
  }
  
  handleOrdenarCresente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
    );
    this.setState({livros});
  };
  handleOrdenarDecresente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
    );
    livros.reverse();
    this.setState({livros});
  };

  render() {

    return (

      <table className="tabela">
        <TabelaHead 
        ordenarCrescente={this.handleOrdenarCresente}
        ordenarDecrescente={this.handleOrdenarDecresente}/>
        <TabelaBody 
        livros={this.state.livros}
        removerLinha={this.handlerRemoverLinha} />
        <TabelaFoot qdeLivros={this.state.livros.length} />
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
