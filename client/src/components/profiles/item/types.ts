import {JSX} from 'react'

export type ProfilesItemProps = JSX.IntrinsicElements['li'] & {}

export type ProfilesItemType = (props: ProfilesItemProps) => JSX.Element
