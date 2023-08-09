// import React, { useState, useEffect } from 'react'


// const SearchComponent = () => {

//     const [users, setUsers] = useState([])
//     const [search, setSearch] = useEffect("")


//     //const necesito traer los datos de mi user.json
//     const data = [
//         {
//             id: 1,
//             timeStamp: "08/01/23",
//             tipo: "LOG",
//             name: "Pedro Martin",
//             motivo: "Inicio de sesion exitoso",
//             sistema: "Cotiza",
//             acciones: "Ver Detalles"
//         },
//         {
//             id: 2,
//             timeStamp: "24/01/23",
//             tipo: "LOG",
//             name: "Lucio Bertolini",
//             motivo: "Inicio de sesion fallido",
//             sistema: "Farma",
//             acciones: "Ver Detalles"
//         },
//         {
//             id: 3,
//             timeStamp: "09/01/23",
//             tipo: "LOG",
//             name: "Andres dordi",
//             motivo: "Inicio de sesion exitoso",
//             sistema: "Labora",
//             acciones: "Ver Detalles"
//         },
//         {
//             id: 4,
//             timeStamp: "01/02/23",
//             tipo: "LOG",
//             name: "Lucio Bertolini",
//             motivo: "Cierre por inactividad",
//             sistema: "Farma",
//             acciones: "Ver Detalles"
//         },
//         {
//             id: 5,
//             timeStamp: "22/01/23",
//             tipo: "ERROR",
//             name: "Andres dordi",
//             motivo: "Inicio de sesion exitoso",
//             sistema: "Labora",
//             acciones: "Ver Detalles"
//         },
//         {
//             id: 5,
//             timeStamp: "18/02/23",
//             tipo: "LOG",
//             name: "Lucio Bertolibi",
//             motivo: "Cierre por inactividad",
//             sistema: "Farma",
//             acciones: "Ver Detalles"
//         },
//         {
//             id: 6,
//             timeStamp: "12/02/23",
//             tipo: "LOG",
//             name: "Pedro Martin",
//             motivo: "Cierre por inactividad",
//             sistema: "Cotiza",
//             acciones: "Ver Detalles"
//         },
//         {
//             id: 7,
//             timeStamp: "17/02/23",
//             tipo: "LOG",
//             name: "Andres Dordi",
//             motivo: "Inicio de sesion exitoso",
//             sistema: "Labora",
//             acciones: "Ver Detalles"
//         },
//         {
//             id: 8,
//             timeStamp: "07/02/23",
//             tipo: "LOG",
//             name: "Lucio Bertolini",
//             motivo: "Cierre por inactividad",
//             sistema: "Farma",
//             acciones: "Ver Detalles"
//         },

//     ]

//     const showData = async () => {
//         const response = await fetch(data)
//         const data = await response.json()
//         //console.log(data)
//         setUsers(data)

//     }


//     const searcher = (e) => {
//         setSearch(e.target.value)
//         //console.log(e.target.value)
//     }
//     //let results = []
//     // if (!search) {
//     //     results = users
//     // } else {
//     //     users.filter((dato) =>
//     //         dato.name.toLoweCase().includes(search.toLocaletLowerCase())
//     //     )
//     // }


//     useEffect(() => {
//         showData()
//     }, [])

//     //console.log("Bienvenidos")
//     return (
//         <div>
//             <input value={search} onChange={searcher} type='text' placeholder='Search' className='form-control' />
//             <table className='table table-scriped table-hover mt-5 shadow-lg'>
//                 <thead>
//                     <tr className='bg-curso text-white'>
//                         <th>TIMESTAMP</th>
//                         <th>TIPO</th>
//                         <th>NAME</th>
//                         <th>MOTIVO</th>
//                         <th>SISTEMA</th>
//                         <th>ACCIONES</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user.id}>
//                             <td>{user.timestamp}</td>
//                             <td>{user.tipo}</td>
//                             <td>{user.name}</td>
//                             <td>{user.motivo}</td>
//                             <td>{user.sistema}</td>
//                             <td>{user.acciones}</td>

//                         </tr>

//                     ))}

//                 </tbody>

//             </table>

//         </div>
//     )


// }

// export default SearchComponent