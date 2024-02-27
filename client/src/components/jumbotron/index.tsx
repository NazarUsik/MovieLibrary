import * as Styles from './styles'
import {JumbotronType} from './types'
import {JumbotronContainer} from './container'
import {JumbotronImage} from './image'
import {JumbotronPane} from './pane'
import {JumbotronSubTitle} from './subTitle'
import {JumbotronTitle} from './title'

export * from './types'

export const Jumbotron: JumbotronType = ({children, direction = 'row', ...restProps}) => (
    <Styles.Item {...restProps}>
        <Styles.Inner direction={direction}>{children}</Styles.Inner>
    </Styles.Item>
)

Jumbotron.Container = JumbotronContainer
Jumbotron.Image = JumbotronImage
Jumbotron.Pane = JumbotronPane
Jumbotron.SubTitle = JumbotronSubTitle
Jumbotron.Title = JumbotronTitle

export default Jumbotron
