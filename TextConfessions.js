import React from 'react'
import { Avatar } from '@material-ui/core'
import styled from 'styled-components'

const TextConfessions = ({username, gender, branch, age, desc, date}) => {
    return (
        <div>
            <Container>
            <Header>
                <Avatar style={{cursor: 'pointer'}}/>
                <User>
                    <a>{username}</a>
                    <span>{gender} - {branch}, {age}</span>
                </User>
            </Header>
            <Desc>
                {desc}
            </Desc>
            <Date>{date? `${date}` :' 18/10/2021, 20:10:46'}</Date>
        </Container>
        </div>
    )
}

export default TextConfessions

const Container = styled.div`
    margin-top: 0.6rem;
    width: 100%;
    background-color: #ff6969;
    border-radius: 7px;
    border: 1px solid black;
    overflow: hidden;
    position: relative;
    padding-bottom: 1.2rem;
    color: white;
    font-weight: 200;
    letter-spacing: 0.05rem;
`

const Header = styled.div`
    padding: 0.6rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #33333345;
    position: relative;
    color: white;

`

const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
    justify-content: center;
    margin-bottom: -6px;
    color: white;


    a{
        text-decoration: none;
        font-size: 0.82rem;
        font-weight: 700;
        line-height: 0.85rem;
        cursor: pointer;
    color: white;
        
    }

    span{
        font-size: 0.75rem;
    color: white;

    }
`

const Date = styled.div`
    position: absolute;
    left: 10px;
    bottom: 4px;
    font-size: 0.75rem;
    color: white;

`



const Desc = styled.div`
    font-size: 0.9rem;
    line-height: 1.2rem;
    padding: 0.6rem;
    padding-top: 0.1rem;
    margin-top: 0.3rem;
    color: black;
`
