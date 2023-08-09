import React, { Component } from 'react';

const tipos = [
  {
    id: 1,
    nombre: 'MODIFI',
  },
  {
    id: 2,
    nombre: 'ERROR',
  },
  {
    id: 3,
    nombre: 'LOG',
  },

];

class TiposFiltro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipos: tipos,
      tipoSeleccionado: 'Todos',
    };
  }

  handleTipoChange = (tipo) => {
    this.setState({ tipoSeleccionado: tipo });
  };

  render() {
    const { tipos, tipoSeleccionado } = this.state;

    const tiposFiltrados = tipos.filter((tipo) => {
      return tipoSeleccionado === 'Todos' || tipo.nombre === tipoSeleccionado;
    });

    return (
      <div>
        <h2>Filtrar por Tipos</h2>
        <div>
          <label>Seleccionar Tipo:</label>
          <select
            value={tipoSeleccionado}
            onChange={(e) => this.handleTipoChange(e.target.value)}
          >
            <option value="Todos">Todos</option>
            {tipos.map((tipo) => (
              <option key={tipo.id} value={tipo.nombre}>
                {tipo.nombre}
              </option>
            ))}
          </select>
        </div>
        <ul>
          {tiposFiltrados.map((tipo) => (
            <li key={tipo.id}>{tipo.nombre}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TiposFiltro;
