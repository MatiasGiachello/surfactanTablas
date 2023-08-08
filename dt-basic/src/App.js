import './App.css';
import './user.json';
import React, { useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import 'styled-components'


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

]

// const App = () => {
//   const [users, setUsers] = useState([])

//   const = './user.json'
//   const showData = async () => {
//     const response = await fetch(URL)
//     const data = await response.json()
//     console.log(data)
//     setUsers(data)
//   }

//   useEffect(() => {
//     showData()
//   }, [])

const columns = [
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
  },


]
function App() {
  return (
    <div className="App">

      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}


// const data = [
//   {
//     id: 1,
//     timeStamp: '08/01/23',
//     tipo: 'LOG',
//     name: 'Pedro Martin',
//     motivo: 'Inicio de sesion exitoso',
//     sistema: 'Cotiza',
//     acciones: 'Ver Detalles',
//   },
//   {
//     id: 2,
//     timeStamp: '08/01/23',
//     tipo: 'LOG',
//     name: 'Lucio Bertolini',
//     motivo: 'Inicio de sesion Fallido',
//     sistema: 'farma',
//     acciones: 'Ver Detalles',
//   },
//   {
//       id: 3,
//       timeStamp: '08/01/23',
//       tipo: 'LOG',
//       name: 'Andres Dordi',
//       motivo: 'Inicio de sesion exitoso',
//       sistema: 'Cotiza',
//       acciones: 'Ver Detalles',
//     },
//     {
//     id: 4,
//     timeStamp: '08/01/23',
//     tipo: 'MODIFI',
//     name: 'Andres Dordi',
//     motivo: 'Cierre por inactividad',
//     sistema: 'farma',
//     acciones: 'Ver Detalles',
//   },
//   {
//     id: 5,
//     timeStamp: '08/01/23',
//     tipo: 'ERROR',
//     name: 'Andres Dordi',
//     motivo: 'Cierre de sesion del usuario',
//     sistema: 'Labora',
//     acciones: 'Ver Detalles',
//   },
// ]

// const columns = [
//   {
//     name: 'TIMESTAMP',
//     selector: row => row.timeStamp
//   },
//   {
//     name: 'TIPO',
//     selector: row => row.tipo
//   },
//   {
//     name: 'NAME',
//     selector: row => row.name
//   },
//   {
//     name: 'MOTIVO',
//     selector: row => row.motivo
//   },
//   {
//     name: 'SISTEMA',
//     selector: row => row.sistema
//   },
//   {
//     name: 'ACCIONES',
//     selector: row => row.acciones
//   },
// ]







export default App;
