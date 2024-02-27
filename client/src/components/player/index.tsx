import {useState} from 'react'
import * as Styles from './styles'
import {PlayerProvider} from './context/player'
import {PlayerButton} from './button'
import {PlayerVideo} from './video'
import {PlayerType} from './types'

export * from './types'

export const Player: PlayerType = ({children, ...restProps}) => {
    const [showPlayer, setShowPlayer] = useState(false)

    return (
        <PlayerProvider showPlayer={showPlayer} setShowPlayer={setShowPlayer}>
            <Styles.Container {...restProps}>{children}</Styles.Container>
        </PlayerProvider>
    )
}

Player.Button = PlayerButton
Player.Video = PlayerVideo

export default Player
