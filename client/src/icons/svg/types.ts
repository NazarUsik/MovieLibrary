import {ReactElement} from 'react'
import {SvgIconProps as LibSvgProps} from '@mui/material/SvgIcon'

export interface SvgProps extends LibSvgProps {
}

export type SvgComponent = (props: SvgProps) => ReactElement
