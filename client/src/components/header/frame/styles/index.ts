import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 100px;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`
