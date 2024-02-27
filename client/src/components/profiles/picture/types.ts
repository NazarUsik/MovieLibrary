import {JSX} from 'react'

export type ProfilesPictureProps = JSX.IntrinsicElements['img'] & {
    src?: string
}

export type ProfilesPictureType = (props: ProfilesPictureProps) => JSX.Element
