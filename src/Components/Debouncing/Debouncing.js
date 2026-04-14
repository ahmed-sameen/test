import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addSearches } from "../../Utils/searchSlice";

const Debouncing = () => {
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState("");
    const [displayResults, setDisplayResults] = useState([]);
    const allResults = useSelector(store => store.searchSlice);

    useEffect(() => {
        const debouncer = setTimeout(() => {
            if (allResults[searchText]) {
                setDisplayResults(allResults[searchText])
            } else {
                fetchSearchResults();
            }
        }, 500)

        return () => clearTimeout(debouncer)
    }, [searchText])

    async function fetchSearchResults() {
        const resp = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + searchText)
        const data = await resp.json();
        setDisplayResults(data[1])
        // setAllResults(prev => Object.assign(prev, { [searchText]: data[1] }))
        dispatch(addSearches({ [searchText]: data[1] }))
    }

    return (
        <div>
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            {displayResults && <ul>
                {displayResults?.map((each, index) => {
                    return <li key={index}>{each}</li>
                })}
            </ul>}
        </div>
    )
}

export default Debouncing;