import React from "react";
const TabelaHead = (props) => (
    <thead>
        <tr>
            <th colSpan="5">Tabela de livros</th>
        </tr>
        <tr>
            <th>ISBN</th>
            <th>Titulo
            <div class="container-setinhas">
            <div onClick={() => props.ordenarCrescente()}>&#129093;</div>
            <div onClick={() => props.ordenarDecrescente()}>&#129095;</div>
        </div>
            </th>
            <th>Autor</th>
            <th>Preço</th>
            <th></th>
        </tr>
        
    </thead>
);
export default TabelaHead;