import * as Styles from './styles'
import {CardFeatureType} from './types'
import {useFeature} from '../context/feature'
import {CardGroup} from '../group'
import {icon} from '@src/icons'
import {getImage} from '../../../utils'

export * from './types'

export const CardFeature: CardFeatureType = ({children, category, ...restProps}) => {
    const {showFeature, featureItem, setShowFeature} = useFeature()

    return showFeature && (
        <Styles.Feature {...restProps}
                        src={getImage(featureItem.poster_path)}>
            <Styles.Content>
                <Styles.FeatureTitle>{featureItem.title}</Styles.FeatureTitle>
                <Styles.FeatureText>{featureItem.description}</Styles.FeatureText>
                <Styles.FeatureClose onClick={() => setShowFeature(false)}>
                    {icon('MdCloseCircle', {size: '48pt', color: 'black'})}
                </Styles.FeatureClose>

                <CardGroup margin='30px 0' flexDirection='row' alignItems='center'>
                    <Styles.Maturity rating={featureItem.maturity}>{featureItem.maturity}</Styles.Maturity>
                    <Styles.FeatureText fontWeight='bold'>
                        {featureItem.genres.join(', ')}
                    </Styles.FeatureText>
                </CardGroup>

                {children}
            </Styles.Content>
        </Styles.Feature>
    )
}
