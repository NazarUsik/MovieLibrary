import {JSX} from 'react'
import {PlayerButtonType} from './button/types'
import {PlayerVideoType} from './video/types'

export type PlayerProps = JSX.IntrinsicElements['div'] & {}

export type PlayerComponent = (props: PlayerProps) => JSX.Element
export type PlayerType = PlayerComponent & {
    Button: PlayerButtonType
    Video: PlayerVideoType
}
