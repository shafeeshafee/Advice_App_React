import {useState, useEffect} from "react"
import axios from "axios";
import {SEARCH_ADVICE_URL} from '../Constants'
import Advice from './Advice'

export default function SearchButton() {

    const [searchData, setSearchData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (event) => {
        setSearchInput(event.target.value)
    }

    const fetchData = async () => {
        // try {
        //     const response = await axios.get(`${SEARCH_ADVICE_URL}${searchInput}`);
        //     setSearchData(response.data.slips)
        // }
        // catch (err) {
        //     console.log('Error', err)
        // }

        const response = await axios.get(`${SEARCH_ADVICE_URL}${searchInput}`)
        .then(res => setSearchData(res.data.slips))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="search-container">
            <input onChange={handleChange} />
            <button onClick={fetchData}>Search Quotes</button>

            <ul style={{ marginTop: 25 }}>
                {searchData ? searchData.map((item, index) => {
                    const { advice } = item;
                    return  <Advice advice={advice} key={index} />;
                }) : ""}
            </ul>
        </div>
	);
}

