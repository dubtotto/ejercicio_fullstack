import React, { Component } from 'react';

class Content extends Component {
    contador = 0;

    state = {
        contador: 0
    }

    count = () => {
        this.setState({
            contador: (this.state.contador+1)
        })
    }

    render() {
        return (
            <section id="content">
                <h2>Pagina de Prueba</h2>
                <p>Contador: {this.state.contador}</p>
                <p>
                    <input type="button" value="Count" onClick={this.count}/>
                </p>
            </section>
        );
    }
}

export default Content;