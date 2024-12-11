import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const key1InputRef = useRef();
    const key2InputRef = useRef();

    // user?key1=value1&key2=value2   :   to get this in react
    const key1 = searchParams.get("key1")
    const key2 = searchParams.get("key2")

    const onClickSetSearchParams = () => {
        setSearchParams({key1: key1InputRef.current.value, key2: key2InputRef.current.value})
    }


    return(
        <>
            <h1>Filter Page</h1>

            <div className="set-params">
                <label htmlFor="key1"></label><input id="key1" type="text" ref={key1InputRef}/> <br /><br />
                <label htmlFor="key2"></label><input id="key2" type="text" ref={key2InputRef}/> <br /><br />
                <input type="button" value="set params" onClick={onClickSetSearchParams}/>
            </div>

            <ul className="get-params">
                <li>key1: {key1}</li>
                <li>key2: {key2}</li>
            </ul>

        </>
    )
}

export default Filter;