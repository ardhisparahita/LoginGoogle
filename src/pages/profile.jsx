import{useParams} from 'react-router-dom'
import axios from 'axios'
import {useEffect} from 'react'
import { useState } from 'react'

const Profile = () => {
    const{token} = useParams()   
    const [data, setData] = useState()

    const getData = async () => {
        const {data} = await axios("https://fadfaasd.herokuapp.com/api/v1/profile", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        setData(data)
        console.log(data)
    }
    useEffect(() => {
        getData()
    },[])
    return(
        <h1>Selamat Datang, {data?.data.email}</h1>
    )
}

export default Profile