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
import Fade from 'react-reveal/Fade';


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
                                    Kendall Jenner
                                </p>
                                <span>CSE 25, 21 mutual friends</span>
                                <span style={{ fontWeight: '200', fontSize: '0.6rem' }}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, officia.
                                </span>
                            </UserDesc>
                            {/* <InfoIcon style={{ fill: '#ffffffad', fontSize: '1.5rem' }} /> */}
                        </section>
                        {/*  */}
                        <Response>
                            <span>
                                <ClearIcon   style={{ fill: 'grey', fontSize: '1.5rem' }} />
                            </span>
                            <span  style={{height: '55px', width: '55px'}}>
                                <DashboardIcon  style={{ fill: 'white', fontSize: '1.4rem', fontSize: '2rem'  }} />
                                {/* <FavoriteIcon  style={{ fill: 'red' , fontSize: '2rem'  }} /> */}
                            </span>
                            {/* <span style={{height: '55px', width: '55px'}}>
                                <EmojiFoodBeverageIcon  style={{ fill: 'orange', fontSize: '2rem' }} />
                            </span> */}
                            {/* <span>
                                <StarIcon  style={{ fill: 'cornflowerblue', fontSize: '1.5rem' }} />
                            </span> */}
                            <span>
                                <FavoriteIcon  style={{ fill: 'red', fontSize: '1.5rem' }} />
                                {/* <DashboardIcon  style={{ fill: 'white', fontSize: '1.5rem' }} /> */}
                            </span>
                        </Response>
                    </Card>

                    <Fade bottom>
                        <DescCard>
                            <div>
                                92%
                            </div>
                            <section>
                                <strong>Highly compatible. </strong>
                                You both like bollywood movies and 7 other tags.
                            </section>
                        </DescCard>
                    </Fade>
                </CardsContainer>
    )
}

export default CardsComponent

const CardsContainer = styled.div`
    background-color: #1f2225;
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
    bottom: 5px;
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
    /* box-shadow: 0px 18px 53px 0px #a9a2a24d; */
    /* box-shadow: 0px 0px 10px #646161, 2px -4px 34px #c9c9c9; */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, #000000db 100%), url('https://cdn.vox-cdn.com/thumbor/D7r069WE1aLClhY1c3oeoH2frWk=/0x0:3000x1995/1400x1400/filters:focal(1220x366:1700x846):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54625997/678055686.0.jpg') center center / cover no-repeat;
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
    background-color: #2e3136;
    border-radius: 10px;
    margin-bottom: 50px;
    padding: 0.3rem;
    /* box-shadow: 0px 1px 53px 0px #a9a2a24d; */
    /* box-shadow: 0px 0px 10px #bfbaba, 2px -4px 34px #ddcece; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    

    section{
        flex: 1;
        margin-left: 10px;
        font-size: 0.7rem;
        line-height: 1rem;
        letter-spacing: 0.05rem;
        color: white;

        strong{
            color: green;
        }
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

