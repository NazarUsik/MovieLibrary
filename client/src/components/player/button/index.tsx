import * as Styles from './styles'
import {PlayerButtonType} from './types'
import {usePlayer} from '../context/player'

export * from './types'

export const PlayerButton: PlayerButtonType = ({children, ...restProps}) => {
    const {setShowPlayer} = usePlayer()

    const handleClick = () => setShowPlayer((showPlayer: boolean) => !showPlayer)

    return (
        <Styles.Button
            onClick={handleClick} {...restProps}
        >Play</Styles.Button>
    )
}
