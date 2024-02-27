import * as Styles from './styles'
import {LoadingType} from './types'

export const Loading: LoadingType = ({src, ...restProps}) => (
    <Styles.Spinner {...restProps}>
        <Styles.LockBody/>
        <Styles.Picture
            src={`/images/users/${src}.png`}
            data-testid='loading-picture'/>
    </Styles.Spinner>
)

Loading.ReleaseBody = () => <Styles.ReleaseBody/>

export default Loading