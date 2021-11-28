import React from 'react'
import BottomNavbar from './BottomNavbar'
import CardsComponent from './CardsComponent'
import TopNavigation from './TopNavigation'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from 'styled-components';


const Home = () => {
    return (
        <Container>
        <div>
            {/* <ShowOptions>
                <span>
                    <ChevronLeftIcon style={{ fontSize: '0.8rem', fill: 'red' }} />
                </span>
                <span>
                    <ChevronRightIcon style={{ fontSize: '0.8rem', fill: 'red' }} />
                </span>
            </ShowOptions> */}
            <TopNavigation/>
            <CardsComponent/>
        </div>
        <BottomNavbar/>
        </Container>
    )
}

export default Home

const Container = styled.div`
    background-color: #1f2225;
`

const ShowOptions = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    top: 45%;
    padding: 0 0.2rem;
    z-index: 1;

    span{
        display: grid;
        place-items: center;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        /* background-color: white; */
        background-color: #e7e1de;
    }
`