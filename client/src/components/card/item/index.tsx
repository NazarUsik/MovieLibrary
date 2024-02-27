import * as Styles from './styles'
import {CardItemType} from './types'
import {useFeature} from '../context/feature'

export * from './types'

export const CardItem: CardItemType = ({item, children, ...restProps}) => {
    const {setShowFeature, setFeatureItem} = useFeature()

    return (
        <Styles.Item {...restProps}
                     onClick={() => {
                         setFeatureItem(item)
                         setShowFeature(true)
                     }}>
            {children}
        </Styles.Item>
    )
}
