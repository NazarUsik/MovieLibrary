import {useEffect, useState, useContext} from 'react'
import {MovieDetail} from '@src/types/movie.types'

export default function useContent(target: string, query?: string) {
    const [content, setContent] = useState<MovieDetail[]>([])

    useEffect(() => {
        fetch(`${process.env.SERVICE}/${target}/search`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query}),
        })
            .then((response) => {
                if (!response.ok)
                    throw new Error(`Response status is: ${response.status}`)
                return response.json()
            })
            .then(data => setContent(data))
            .catch((error) => {
                console.log(error)
            })
    }, [target, query])

    return {[target]: content}
}
