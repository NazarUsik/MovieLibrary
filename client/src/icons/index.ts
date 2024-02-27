import {ReactElement} from 'react'

import * as MdReactIcons from 'react-icons/md'
import {
    IoMdCloseCircleOutline as MdCloseCircle,
    IoMdClose as MdClose,
} from 'react-icons/io'
import {CustomIcons} from './custom'

import {svgToUrl, cacheSvgIcon, getCachedSvgIcon, getIconName} from '@src/utils/icons'

import {ToCssIconFunction, IconFunction, IconDictionary} from './types'

// @ts-ignore
const Icons: IconDictionary = {
    ...MdReactIcons,
    MdClose, MdCloseCircle,
    ...CustomIcons,
}

export const icon: IconFunction = (name: string, props) => {
    const Icon = Icons[name]
    !Icon && console.error(`Doesn't have an Icon with [${name}] name.`)
    return Icon?.({...props, name, fill: props?.color})
}

export const toCssIcon: ToCssIconFunction = (icon) => {
    const formattedSvg: ReactElement = {...icon, props: {...icon.props.attr, ...icon.props}}
    const svgStoreKey = getIconName(formattedSvg)

    let svgUrl = getCachedSvgIcon(svgStoreKey)

    if (!svgUrl) {
        svgUrl = svgToUrl(formattedSvg)
        cacheSvgIcon(svgStoreKey, svgUrl)
    }

    return svgUrl
}
