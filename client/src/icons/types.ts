import {ReactElement} from 'react'
import {IconBaseProps} from 'react-icons'

export type IconDictionary = {
    [name: string]: IconComponent,
}

export type IconComponent = (props: IconProps) => ReactElement


export interface IconProps extends IconBaseProps {
}

export type IconFunction = (name: string, props?: IconProps) => ReactElement
export type ToCssIconFunction = (icon: ReactElement) => string
