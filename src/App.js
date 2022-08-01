import React, {Component} from "react";

export default class App extends Component{
  state = {
    amigos:[
      {
        Nome: "Marcos",
        idade: 38,
        profissao: "Analista de sistemas",
        descricao: "Atenção ao sistema",
      },
      {
        Nome: "Ivan",
        idade: 37,
        profissao: "Biólogo",
        descricao: "Atenção aos animais",
      },
      {
        Nome: "Renan",
        idade: 33,
        profissao: "Artesão",
        descricao: "Atenção no quadro",
      },
      {
        Nome: "Douglas",
        idade: 40,
        profissao: "Motorista",
        descricao: "Atenção no trânsito",
      },
    ]
  }

  render(){
    return(
      <div>
        <h1>Meu amigos</h1>

        <ul>
          <li>{this.state.amigos[0].Nome}</li>
          <li>{this.state.amigos[0].idade}</li>
          <li>{this.state.amigos[0].profissao}</li>
          <li>{this.state.amigos[0].descricao}</li>
        </ul>

        <ul>
          <li>{this.state.amigos[1].Nome}</li>
          <li>{this.state.amigos[1].idade}</li>
          <li>{this.state.amigos[1].profissao}</li>
          <li>{this.state.amigos[1].descricao}</li>
        </ul>

        <ul>
          <li>{this.state.amigos[2].Nome}</li>
          <li>{this.state.amigos[2].idade}</li>
          <li>{this.state.amigos[2].profissao}</li>
          <li>{this.state.amigos[2].descricao}</li>
        </ul>

        <ul>
          <li>{this.state.amigos[3].Nome}</li>
          <li>{this.state.amigos[3].idade}</li>
          <li>{this.state.amigos[3].profissao}</li>
          <li>{this.state.amigos[3].descricao}</li>
        </ul>
      </div>
    )
  }
}

