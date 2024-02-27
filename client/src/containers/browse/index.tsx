import {useState, useEffect} from 'react'
import * as ROUTES from '@src/constants/routes'
import {Card, Header, Loading, Player} from '@src/components'
import {SelectProfileContainer, Profile} from '../profiles'
import {FooterContainer} from '../footer'
import {BrowseContainerType} from './types'
import {MovieSection} from '@src/types/movie.types'
import {getImage} from '../../utils'
import {useNavigate} from 'react-router-dom'

export * from './types'

export const BrowseContainer: BrowseContainerType = ({slides, searchTerm, setSearchTerm}) => {
    const navigate = useNavigate()
    const [category, setCategory] = useState('series')
    const [profile, setProfile] = useState<Profile>({displayName: ''})
    const [loading, setLoading] = useState(true)
    const [innerSearchTerm, setInnerSearchTerm] = useState(searchTerm)
    const [slideRows, setSlideRows] = useState<MovieSection[]>([])

    const user: Profile = /*firebase.auth().currentUser || {}*/{displayName: 'User Name', avatar: '1'}

    useEffect(() => {
        if (searchTerm !== innerSearchTerm)
            setInnerSearchTerm(searchTerm)
    }, [searchTerm])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category])

    useEffect(() => {
        if (innerSearchTerm.length === 0 || innerSearchTerm.length > 3 && innerSearchTerm !== searchTerm)
            setSearchTerm(innerSearchTerm)
    }, [innerSearchTerm])

    const movie = slideRows?.[0]?.data?.[0]

    return profile.displayName ? (
        <>
            {loading ? <Loading src={user.avatar}/> : <Loading.ReleaseBody/>}

            <Header src={movie?.poster_path && getImage(movie.poster_path)} dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo/>
                        <Header.TextLink active={category === 'series' ? 'true' : 'false'}
                                         onClick={() => setCategory('series')}>
                            Series
                        </Header.TextLink>
                        <Header.TextLink active={category === 'films' ? 'true' : 'false'}
                                         onClick={() => setCategory('films')}>
                            Films
                        </Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={innerSearchTerm} setSearchTerm={setInnerSearchTerm}/>
                        <Header.Profile>
                            <Header.Picture src={user.avatar}/>
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.avatar}/>
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => navigate(ROUTES.HOME)}>Sign out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureCallOut>Watch {movie?.title} Now</Header.FeatureCallOut>
                    <Header.Text>
                        {movie?.description}
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>

            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.id} item={item}>
                                    <Card.Image
                                        src={getImage(item.backdrop_path || item.poster_path)}/>
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button/>
                                <Player.Video src=''/>
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>
            <FooterContainer/>
        </>
    ) : (
        <SelectProfileContainer profile={user} setProfile={setProfile}/>
    )
}
