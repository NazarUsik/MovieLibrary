import {JSX} from 'react'

export type PlayerVideoProps = JSX.IntrinsicElements['div'] & {
    src: string
}

export type PlayerVideoType = (props: PlayerVideoProps) => JSX.Element
