import React from 'react'
import jumboData from '@src/fixtures/jumbo.json'
import {Jumbotron} from '@src/components'
import {JumbotronContainerType} from './types'

export * from './types'

export const JumbotronContainer: JumbotronContainerType = () => (
    <Jumbotron.Container>
        {jumboData.map((item) => (
            <Jumbotron key={item.id} direction={item.direction !== 'row' ? 'column' : item.direction}>
                <Jumbotron.Pane>
                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                    <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                    <Jumbotron.Image src={item.image} alt={item.alt}/>
                </Jumbotron.Pane>
            </Jumbotron>
        ))}
    </Jumbotron.Container>
)
