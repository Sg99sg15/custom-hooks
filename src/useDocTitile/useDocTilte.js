import {useEffect} from 'react'

function useDocTilte(change) {
    useEffect(() => {
        document.title = `Title Changed ${change}`
    }, [change])
}

export default useDocTilte;
