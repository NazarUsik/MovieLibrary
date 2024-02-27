import {ReactElement} from 'react'

import {componentsPropsToString, componentsToStringTag} from '@src/utils/components'
import {coding} from '@src/utils/string/coding'

const svgPropsTemplateKey: string = '|props|'
const svgChildrenTemplateKey: string = '|children|'
const svgStringTemplate: string = `<svg xmlns="http://www.w3.org/2000/svg" ${svgPropsTemplateKey}>${svgChildrenTemplateKey}</svg>`

export const svgComponentToStringTag = (svgIcon: ReactElement): string =>
    svgStringTemplate
        .replace(svgPropsTemplateKey, componentsPropsToString(svgIcon))
        .replace(svgChildrenTemplateKey, componentsToStringTag(svgIcon.props.children))

export const svgToUrl = (svgIcon: ReactElement): string => (
    `url('data:image/svg+xml;charset=utf-8;base64,${coding('base64').encode(svgComponentToStringTag(svgIcon))}')`
)

export const getIconName = (icon: ReactElement) => `svg-url-${icon.props.name || icon.type?.['name'] || icon.type}`

export const cacheSvgIcon = (key: string, iconUrl: string) => sessionStorage.setItem(key, iconUrl)
export const getCachedSvgIcon = (key: string) => sessionStorage.getItem(key)
