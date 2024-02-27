import * as Styles from './styles'
import {AccordionHeaderType} from './types'
import {icon} from '@src/icons'
import {useToggle} from '../context/toggle'

export * from './types'

export const AccordionHeader: AccordionHeaderType = ({children, ...restProps}) => {
    const {toggleShow, setToggleShow} = useToggle()

    return (
        <Styles.Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow ? <CloseIcon/> : <AddIcon/>}
        </Styles.Header>
    )
}

const AddIcon = () => icon('MdAdd', {size: '48pt', color: 'black'})
const CloseIcon = () => icon('MdClose', {size: '48pt', color: 'black'})
