import React, {useState} from 'react'
import useDocTilte from './useDocTilte';
import '../css.css';


function DocTitle2() {

    const [change, setChange] = useState(0)


    useDocTilte(change);

    return (
        <div>
            <button onClick={()=>setChange(change + 1)}>Change Title: {change}</button>
        </div>
    )
}

export default DocTitle2;
