import {useState, useEffect} from "react"
import axios from "axios";
import {RANDOM_ADVICE_URL} from '../Constants'
import Advice from './Advice'


export default function RandomButton() {

    const [randomAdvice, setRandomAdvice] = useState('')
    
    const fetchData = async () => {
        try {
            const response = await axios.get(RANDOM_ADVICE_URL);
            const { slip } = response.data;
            setRandomAdvice(slip)
        }
        catch (err) {
            console.log('Error', err)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <h1>Random Advice</h1>
            <Advice advice={randomAdvice.advice} /><button onClick={fetchData}>Get Random Advice</button>
        </div>
    )
}