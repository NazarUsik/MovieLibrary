import {useState} from 'react'
import * as Styles from './styles'
import {FeatureProvider} from './context/feature'
import {CardType} from './types'
import {CardEntities} from './entities'
import {CardFeature} from './feature'
import {CardGroup} from './group'
import {CardImage} from './image'
import {CardItem} from './item'
import {CardMeta} from './meta'
import {CardSubTitle} from './subTitle'
import {CardText} from './text'
import {CardTitle} from './title'

export * from './types'

export const Card: CardType = ({children, ...restProps}) => {
    const [showFeature, setShowFeature] = useState(false)
    const [featureItem, setFeatureItem] = useState({})

    return (
        <FeatureProvider
            showFeature={showFeature}
            setShowFeature={setShowFeature}
            featureItem={featureItem}
            setFeatureItem={setFeatureItem}
        >
            <Styles.Container {...restProps}>{children}</Styles.Container>
        </FeatureProvider>
    )
}

Card.Entities = CardEntities
Card.Feature = CardFeature
Card.Group = CardGroup
Card.Image = CardImage
Card.Item = CardItem
Card.Meta = CardMeta
Card.SubTitle = CardSubTitle
Card.Text = CardText
Card.Title = CardTitle

export default Card
