import {JSX} from 'react'

export type LoadingProps = JSX.IntrinsicElements['div'] & {
    src: string
}

export type LoadingComponent = (props: LoadingProps) => JSX.Element
export type LoadingType = LoadingComponent & {
    ReleaseBody: () => JSX.Element
}
