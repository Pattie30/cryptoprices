import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';


const Price = () => {
    const [coin, setCoin] = useState(null)

    useEffect(() => {
       getCoin()
    }, [])

    const apiKey = 'E0286BE5-43AB-4462-AE82-1DA68D288592';
    const params = useParams()

    
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${params.symbol}/USD?apikey=${apiKey}`

    const getCoin = async() => {
       try{
        const res = await fetch(url)
        const data = await res.json()
            setCoin(data)
       }catch (error) {
        console.log(error)
       }
    }


    const loaded = () => {
        return(
            <div>
                <h1>{coin.asset_id_base}/{coin.asset_id_quote} </h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    }

    const loading = () => {
        <h1>Loading...</h1>
    }

    return(
        <div>
            <h1>Price Page</h1>
            {coin && coin.rate ? loaded() : loading()}

        </div>
    )
}

export default Price