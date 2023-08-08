import React, { useState, useEffect } from 'react'


const SearchComponent = () => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useEffect("")


    //const necesito tarer los datos de mi user.json

    const showData = async ( )=>{
        const response = await fetch //(user.json)
        const data = await response.json()
        console.log(data)
    }
    showData()
    return (
        <div> SearchComponent </div>
    )


}

export default SearchComponent