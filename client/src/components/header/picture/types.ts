import {JSX} from 'react'

export type HeaderPictureProps = JSX.IntrinsicElements['button'] & {
    src: string
}

export type HeaderPictureType = (props: HeaderPictureProps) => JSX.Element
