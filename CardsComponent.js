import React, { useState } from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import TopNavigation from './TopNavigation';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import ClearIcon from '@material-ui/icons/Clear';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';

const CardsComponent = () => {
    return (
            <CardsContainer>
                    <Card >
                    <CardTopBar>
                        <span></span>
                        <main></main>
                        <span></span>
                        <span></span>
                        <span></span>
                    </CardTopBar>
                        <section>
                            <UserDesc>
                                <p>
                                    Zayn Malik
                                </p>
                                <span>CSE 25, 21 mutual friends</span>
                                <span style={{ fontWeight: '200', fontSize: '0.6rem' }}>
                                    Party hard, till I die. Work | Create | Enjoy 
                                </span>
                            </UserDesc>
                            {/* <InfoIcon style={{ fill: '#ffffffad', fontSize: '1.5rem' }} /> */}
                        </section>
                        {/*  */}
                        <Response>
                            <span>
                                <ClearIcon   style={{ fill: 'grey', fontSize: '1.5rem' }} />
                            </span>
                            <span  style={{height: '60px', width: '60px'}}>
                                {/* <DashboardIcon  style={{ fill: 'white', fontSize: '1.5rem', fontSize: '2rem'  }} /> */}
                                <FavoriteIcon  style={{ fill: 'red' , fontSize: '2rem'  }} />
                            </span>
                            {/* <span style={{height: '55px', width: '55px'}}>
                                <EmojiFoodBeverageIcon  style={{ fill: 'orange', fontSize: '2rem' }} />
                            </span> */}
                            {/* <span>
                                <StarIcon  style={{ fill: 'cornflowerblue', fontSize: '1.5rem' }} />
                            </span> */}
                            <span>
                                {/* <FavoriteIcon  style={{ fill: 'red', fontSize: '1.5rem' }} /> */}
                                <DashboardIcon  style={{ fill: 'white', fontSize: '1.5rem' }} />
                            </span>
                        </Response>
                    </Card>
                    <DescCard>
                        <div>
                            92%
                        </div>
                        <section>
                            <strong>Highly compatible. </strong>
                            You both like bollywood movies and 7 other tags.
                        </section>
                    </DescCard>
                </CardsContainer>
    )
}

export default CardsComponent

const CardsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    /* height: 96vh; */
    padding: 0.8rem 0.6rem 0 0.6rem;
`

const CardTopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0rem 0.1rem;

    main{
        height: 4px;
        width: 19%;
        border-radius: 100px;
        background-color: pink;
    }

    span{
        height: 4px;
        width: 19%;
        border-radius: 100px;
        background-color: grey;
    }
`

const Response = styled.div`
    height: 70px;
    overflow: hidden;
    padding: 0.1rem 1rem 0.3rem 1rem;
    display: flex;
    /* align-items: center; */
    align-items: flex-end;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    width: 100%;

    span{
        height: 45px;
        width: 45px;
        border-radius: 50%;
        border: 1px solid orange;
        display: grid;
        place-items: center;
    }
`

const Card = styled.div`
    height: 70vh;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    margin: 0 0 8px 0;
    box-shadow: 0px 18px 53px 0px #a9a2a24d;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://www.glasgowtimes.co.uk/resources/images/4053884/?type=responsive-gallery') center center / cover no-repeat;
    overflow: hidden;
    position: relative;

    section{
        position: absolute;
        bottom: 65px;
        width: 100%;
        padding: 0.3rem 0.4rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
`

const DescCard = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 0.3rem;
    box-shadow: 0px 1px 53px 0px #a9a2a24d;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #FFDBC5;
    

    section{
        flex: 1;
        margin-left: 10px;
        font-size: 0.7rem;
        line-height: 1rem;
        letter-spacing: 0.05rem;
    }

    div{
        height: 50px;
        width: 50px;        
        background-color: #EF4339;
        border-radius: 50%;
        color: white;
        display: grid;
        place-items: center;
        font-size: 0.95rem;
    }
`

const UserDesc = styled.div`
    padding: 0 1rem;
    

    p{
        color: white;
        font-size: 0.85rem;
        font-weight: 600;
    }

    span{
        display: block;
        color: white;
        font-size: 0.65rem;
    }
`

