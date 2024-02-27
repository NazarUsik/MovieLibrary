import {createPortal} from 'react-dom'
import * as Styles from './styles'
import {PlayerVideoType} from './types'
import {usePlayer} from '../context/player'

export * from './types'

export const PlayerVideo: PlayerVideoType = ({src, ...restProps}) => {
    const {showPlayer, setShowPlayer} = usePlayer()

    const handleClick = () => setShowPlayer(false)

    return showPlayer && createPortal(
        <Styles.Overlay {...restProps} onClick={handleClick} data-testid='player'>
            <Styles.Inner>
                <video id='netflix-player' controls>
                    <source src={src} type='video/mp4'/>
                </video>
                <Styles.Close/>
            </Styles.Inner>
        </Styles.Overlay>,
        document.body,
    )
}
