import {JSX} from 'react'
import {ProfilesListType} from './list'
import {ProfilesNameType} from './name'
import {ProfilesPictureType} from './picture'
import {ProfilesTitleType} from './title'
import {ProfilesItemType} from './item'


export type ProfilesProps = JSX.IntrinsicElements['div'] & {}

export type ProfilesComponent = (props: ProfilesProps) => JSX.Element
export type ProfilesType = ProfilesComponent & {
    List: ProfilesListType
    Name: ProfilesNameType
    Picture: ProfilesPictureType
    Title: ProfilesTitleType
    User: ProfilesItemType
}
