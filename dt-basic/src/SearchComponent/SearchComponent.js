import React, { useState, useEffect } from 'react'


const SearchComponent = () => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useEffect("")


    //const necesito traer los datos de mi user.json

    const showData = async () => {
        const response = await fetch //(user.json)
        const data = await response.json()
        setUsers(data)
        //console.log(data)
    }


    const searcher = (e) => {
        setSearch(e.target.value)
        //console.log(e.target.value)
    }
    let results = []
    if (!search) {
        results = users
    } else {
        users.filter((dato) =>
            dato.name.toLoweCase(). includes (search.toLocaletLowerCase())
        )
    }


    useEffect(() => {
        showData()
    }, [])

    //console.log("Bienvenidos")
    return (
        <div>
            <input value={search} onChange={searcher} type='text' placeholder='Search' className='form-control' />

        </div>
    )


}

export default SearchComponent