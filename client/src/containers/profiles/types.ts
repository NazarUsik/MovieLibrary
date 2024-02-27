import {JSX, Dispatch, SetStateAction} from 'react'

export interface Profile {
    displayName: string
    avatar?: string
}

export interface SelectProfileContainerProps {
    profile: Profile
    setProfile: Dispatch<SetStateAction<Profile>>
}

export type SelectProfileContainerType = (props: SelectProfileContainerProps) => JSX.Element
