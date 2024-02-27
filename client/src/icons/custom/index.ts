import {CustomIcon} from './types'
import {IconDictionary} from '../types'

import {Logo} from './logo'

const customIconsArray: CustomIcon[] = [Logo]

const tag = 'Cs'

export const CustomIcons: IconDictionary = Object.fromEntries(customIconsArray
    .map(customIcon => ([tag + customIcon.alias, customIcon])))
