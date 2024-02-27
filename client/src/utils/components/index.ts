import lodash from 'lodash'
import {ReactElement} from 'react'

const componentPropsToString = (component: ReactElement): string[] =>
    lodash.map(component.props, (value, key) => `${key}='${value}'`)

export const componentsPropsToString = (components: JSX.Element[] | JSX.Element): string =>
    lodash(lodash.castArray(components))
        .map(componentPropsToString)
        .flatten()
        .join(' ')

const componentToStringTag = (component: ReactElement): string =>
    (`<${component.type} ${componentsPropsToString(component)}/>`)

export const componentsToStringTag = (components: ReactElement[] | ReactElement): string =>
    lodash(lodash.castArray(components))
        .map(componentToStringTag)
        .join('\n')

export function extractProps<T extends Record<string, unknown>>
(components: ReactElement[] | ReactElement, propNames: (keyof T)[]): T[] {
    return lodash.compact(lodash.flatMap(lodash.castArray(components),
        (component) => {
            const props = lodash.pick(component.props, propNames)
            return !lodash.isEmpty(props) && props
        }))
}
