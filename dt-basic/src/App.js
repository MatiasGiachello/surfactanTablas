import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import TiposFiltro from './components/TiposFiltro/TiposFiltro';
import TiposSistemaFiltro from './components/tiposSistema/tiposSistema';
import RangoFechasFiltro from './components/filtradoFechas/filtradoFechas';

//import React, { useState, useEffect } from 'react';
//import 'styled-components'

const data = [
  {
    id: 1,
    timeStamp: "08/01/23",
    tipo: "LOG",
    name: "Pedro Martin",
    motivo: "Inicio de sesion exitoso",
    sistema: "Cotiza",
    acciones: "Ver Detalles"
  },
  {
    id: 2,
    timeStamp: "24/01/23",
    tipo: "LOG",
    name: "Lucio Bertolini",
    motivo: "Inicio de sesion fallido",
    sistema: "Farma",
    acciones: "Ver Detalles"
  },
  {
    id: 3,
    timeStamp: "09/01/23",
    tipo: "LOG",
    name: "Andres dordi",
    motivo: "Inicio de sesion exitoso",
    sistema: "Labora",
    acciones: "Ver Detalles"
  },
  {
    id: 4,
    timeStamp: "01/02/23",
    tipo: "LOG",
    name: "Lucio Bertolini",
    motivo: "Cierre por inactividad",
    sistema: "Farma",
    acciones: "Ver Detalles"
  },
  {
    id: 5,
    timeStamp: "22/01/23",
    tipo: "ERROR",
    name: "Andres dordi",
    motivo: "Inicio de sesion exitoso",
    sistema: "Labora",
    acciones: "Ver Detalles"
  },
  {
    id: 5,
    timeStamp: "18/02/23",
    tipo: "LOG",
    name: "Lucio Bertolibi",
    motivo: "Cierre por inactividad",
    sistema: "Farma",
    acciones: "Ver Detalles"
  },
  {
    id: 6,
    timeStamp: "12/02/23",
    tipo: "LOG",
    name: "Pedro Martin",
    motivo: "Cierre por inactividad",
    sistema: "Cotiza",
    acciones: "Ver Detalles"
  },
  {
    id: 7,
    timeStamp: "17/02/23",
    tipo: "LOG",
    name: "Andres Dordi",
    motivo: "Inicio de sesion exitoso",
    sistema: "Labora",
    acciones: "Ver Detalles"
  },
  {
    id: 8,
    timeStamp: "07/02/23",
    tipo: "LOG",
    name: "Lucio Bertolini",
    motivo: "Cierre por inactividad",
    sistema: "Farma",
    acciones: "Ver Detalles"
  },
  {
    id: 9,
    timeStamp: "09/08/23",
    tipo: "MODIFI",
    name: "Andres dordi",
    motivo: "Inicio de sesion exitoso",
    sistema: "Labora",
    acciones: "Ver Detalles"
  },
  {
    id: 10,
    timeStamp: "11/08/23",
    tipo: "ERROR",
    name: "Pedro Martin",
    motivo: "Inicio de sesion exitoso",
    sistema: "Farma",
    acciones: "Ver Detalles"
  },
  {
    id: 11,
    timeStamp: "10/07/21",
    tipo: "MODIFI",
    name: "Lucio Bertolini",
    motivo: "generacion de tickets de Sistema ",
    sistema: "Cotiza",
    acciones: "Ver Detalles"
  },
  {
    id: 12,
    timeStamp: "04/09/23",
    tipo: "ERROR",
    name: "Andres dordi",
    motivo: "inicio de sesion",
    sistema: "Labora",
    acciones: "Ver Detalles"
  },
  {
    id: 13,
    timeStamp: "08/03/23",
    tipo: "LOG",
    name: "Lucio bertolini",
    motivo: "Cierre de Sesion por inactividad",
    sistema: "Farma",
    acciones: "Ver Detalles"
  },
  {
    id: 14,
    timeStamp: "12/05/23",
    tipo: "MODIFI",
    name: "Pedro Martin",
    motivo: "Cierre de sesion de manera exitosa",
    sistema: "Farma",
    acciones: "Ver Detalles"
  },

]
const paginacionOpciones = {
  rowsPerPageText: 'Filas por Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
}

class App extends Component {
  state = {
    busqueda: '',
    empleados: [],
    columnas: [],
    empleadosFiltrados: []
  };

  actualizarElementosFiltrados = (elementosFiltrados) => {
    this.setState({ empleadosFiltrados: elementosFiltrados });
  }

  onChange = async e => {
    e.persist();
    await this.setState({ busqueda: e.target.value });
    this.filtrarElementos();
  }
  asignarColumnas = () => {
    const columnas = [
      {
        name: 'TIMESTAMP',
        selector: row => row.timeStamp
      },
      {
        name: 'TIPO',
        selector: row => row.tipo
      },
      {
        name: 'NAME',
        selector: row => row.name
      },
      {
        name: 'MOTIVO',
        selector: row => row.motivo
      },
      {
        name: 'SISTEMA',
        selector: row => row.sistema
      },
      {
        name: 'ACCIONES',
        selector: row => row.acciones
      }
    ];
    this.setState({ columnas: columnas });
  }


  filtrarElementos = () => {
    var search = data.filter(item => {
      if (
        item.timeStamp.toLowerCase().includes(this.state.busqueda) ||
        item.tipo.toLowerCase().includes(this.state.busqueda) ||
        item.name.toLowerCase().includes(this.state.busqueda) ||
        item.motivo.toLowerCase().includes(this.state.busqueda) ||
        item.sistema.toLowerCase().includes(this.state.busqueda) ||
        item.acciones.toLowerCase().includes(this.state.busqueda)
      ) {
        return true;
      }
      return false;
    });

    this.setState({ empleados: search });
  }

  crearIndex = () => {
    var contador = 1;
    data.map(elemento => {
      elemento["id"] = contador;
      contador++;
      return elemento;
    });
  }

  componentDidMount() {
    this.crearIndex();
    this.asignarColumnas();
    this.setState({ empleados: data });
  }

  render() {
    return (
      <div className="table-responsive">
        <div className="barraBusqueda">
          <input
            type="text"
            placeholder="Buscar"
            className="textField"
            name="busqueda"
            value={this.state.busqueda}
            onChange={this.onChange}
          />
          <button type="button" className="btnBuscar" /*onClick={onClear}*/>
            {" "}
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <DataTable
          columns={this.state.columnas}
          data={this.state.empleados}
          title="Surfactan"
          pagination
          paginationComponentOptions={paginacionOpciones}
          fixedHeader
          fixedHeaderScrollHeight="600px"
          noDataComponent={<span>No se encontró ningún elemento</span>}
        />
        <div className="tiposFiltroContainer">
          <TiposFiltro />
        </div>
        <TiposSistemaFiltro />
        <RangoFechasFiltro data={this.state.empleados} actualizarElementosFiltrados={this.actualizarElementosFiltrados} />
      </div>

    )
  }
}
export default App;
