import React from 'react'
import styled from 'styled-components'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CreateIcon from '@material-ui/icons/Create';
import BottomNavbar from './BottomNavbar';
import { Link } from "react-router-dom";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Fade from 'react-reveal/Fade';

const ViewProfile = () => {
    return (
        <>
            <Fade big>
                <Container>
                    <HeadProfilePic>
                        <CardTopBar>
                            <span></span>
                            <main></main>
                            <span></span>
                            <span></span>
                            <span></span>
                        </CardTopBar>
                        <CoverImage>
                            <img src="https://3.bp.blogspot.com/-O5dO33AFgBc/XDJTH318A8I/AAAAAAAASSU/vCy-wfjnF78S-DSDCUaH1hMDMC-GAJYswCLcBGAs/s1600/kendall%2Bjenner%2Bgo%2Bprofile%2B1.jpg" alt="" />
                        </CoverImage>
                        <Link to="/chats/personal-chat">
                            <section>
                                <ChatBubbleIcon style={{ fontSize: '0.9rem', margin: '0 0.4rem 0 0' }} />
                                Chat
                            </section>
                        </Link>
                    </HeadProfilePic>

                    <ShowUserCredentials>
                        <OneLineDown>
                            <span>
                                Kendall Jenner
                                <p>19</p>
                            </span>
                        </OneLineDown>
                        <Caption>
                            I want to be the next Gisele Bundchen . Everything she does, who she is, what she's done, she's just amazing.
                        </Caption>
                        <OneLineCenter>
                            <SchoolIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                            <p>Plastic Surgery</p>
                        </OneLineCenter>
                        <OneLineCenter>
                            <BusinessCenterIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                            <p>Fresher, 25</p>
                        </OneLineCenter>
                        <OneLineCenter>
                            <BubbleChartIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                            <p>Modeling and Instagram</p>
                        </OneLineCenter>
                        <OneLineCenter>
                            <CheckCircleIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                            <p>Tall Black Boys</p>
                        </OneLineCenter>


                        <OneLineDown>
                            <section>
                                Other Accounts
                            </section>
                        </OneLineDown>
                        <OneLineCenter>
                            <InstagramIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                            <p>@iamatanunayak</p>
                        </OneLineCenter>
                        <OneLineCenter>
                            <TwitterIcon style={{ fontSize: '1.4rem', fill: '#efc8c8', marginBottom: '-0.4rem' }} />
                            <p>@nayakerrrr</p>
                        </OneLineCenter>


                        <OneLineDown>
                            <section>
                                Passions
                                <div style={{ marginBottom: '0.5rem' }}></div>
                            </section>
                        </OneLineDown>
                        <Passions>
                            <Passion>
                                Plastic Sergery
                            </Passion>
                            <Passion>
                                BasketBall
                            </Passion>
                            <Passion>
                                Slow Dance
                            </Passion>
                            <Passion>
                                Paintings
                            </Passion>
                            <Passion>
                                English songs
                            </Passion>
                            <Passion>
                                Blogging
                            </Passion>
                            <Passion>
                                Road Trips
                            </Passion>
                            <Passion>
                                Punjabi Songs
                            </Passion>
                            <Passion>
                                Night Clubs
                            </Passion>
                            <Passion>
                                Football
                            </Passion>
                            <Passion>
                                Web Series
                            </Passion>
                        </Passions>

                    </ShowUserCredentials>

                    {/* <Link to="/edit-account">
                    <EditProfile>
                        <CreateIcon style={{ fill: 'white' }} />
                    </EditProfile>
                </Link> */}
                    <BottomNavbar />
                </Container>
            </Fade>
        </>
    )
}

export default ViewProfile

const Container = styled.div`
    padding-bottom: 1.8rem;
    position: relative;
    padding-bottom: 90px;
    background-color: #1f2225;
    min-height: 100vh;
`

const EditProfile = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: rgb(176,28,51);
    background: linear-gradient(90deg, green 13%, rgba(134,101,106,1) 100%);
    position: fixed;
    bottom: 80px;
    right: 10px;
    display: grid;
    place-items: center;
`

const HeadProfilePic = styled.div`
    position: relative;

    img{
        width: 100%;
    }

    section{
        padding: 0.35rem 1rem;
        border-radius: 100px;
        background: orange;
        position: absolute;
        bottom: -10px;
        right: 10px;
        display: flex;
        align-items: center;
        font-size: 0.85rem;
        letter-spacing: 0.1rem;
    }
`

const CoverImage = styled.div`
    max-height: 70vh;
    overflow: hidden;
`

const CardTopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.1rem;
    position: absolute;
    top: 0;
    width: 99vw;

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

const ShowUserCredentials = styled.div`
    padding: 0.3rem 0.6rem;
`

const OneLineDown = styled.div`
    display: flex;
    align-items: flex-end;


    span{
        font-size: 1.65rem;
        font-weight: 600;
        letter-spacing: 0.15rem;
        color: white;

        p{
            font-size: 1.25rem;
            display: inline-block;
            margin-left: 0.4rem;
            font-weight: 300;
            color: white;
        }
    }

    section{
        font-size: 1.05rem;
        font-weight: 600;
        letter-spacing: 0.15rem;
        margin-top: 1.4rem;
        color: white;


        p{
            font-size: 1.25rem;
            display: inline-block;
            margin-left: 0.4rem;
            font-weight: 300;
            
        }
    }
`

const OneLineCenter = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    display: block;
    margin-bottom: 0.2rem;
    
    p{
        color: #efc8c8;
        display: inline-block;
        margin-left: 10px;
        margin-top: -10px;
    }
`

const Caption = styled.div`
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
    color: white;
`

const Passions = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Passion = styled.div`
    padding: 0.3rem;
    border-radius: 100px;
    font-size: 0.7rem;
    color: #efc8c8;
    border: 1px solid #efc8c8;
    margin: 0 0.3rem 0.3rem 0;
`