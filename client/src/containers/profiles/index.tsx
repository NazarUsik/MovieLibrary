import {Header, Profiles} from '../../components'
import {SelectProfileContainerType} from './types'

export * from './types'

export const SelectProfileContainer: SelectProfileContainerType = ({profile, setProfile}) => (
    <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo/>
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>Who's watching?</Profiles.Title>
            <Profiles.List>
                <Profiles.User
                    onClick={() => setProfile(profile)}
                    data-testid='user-profile'
                >
                    <Profiles.Picture src={profile.avatar}/>
                    <Profiles.Name>{profile.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
    </>
)
