import axios from 'axios';
import { useEffect, useState } from 'react';


export const UseRequestData = (url) => {
    const [respApi, setRespApi] = useState([])

    useEffect(()=>{

        axios.get(url)
        .then((resp)=>{
            setRespApi(resp.data)
        })
        .catch((err)=>{
            alert(err)
        })

    },[url])

    return respApi
}