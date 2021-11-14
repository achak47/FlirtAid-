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


const Profile = () => {
    return (
        <>
            <Container>
                <HeadProfilePic>
                    <img src="https://i.pinimg.com/originals/b3/3f/1f/b33f1f9baceb448d08327fb83b97224f.jpg" alt="" />
                    <section>
                        <AddAPhotoIcon style={{ fill: 'white' }} />
                    </section>
                </HeadProfilePic>

                <ShowUserCredentials>
                    <OneLineDown>
                        <span>
                            Zayn Malik
                            <p>21</p>
                        </span>
                    </OneLineDown>
                    <Caption>
                        When you want to let the world know you're not really sure what's happening, but you also don't care:
                    </Caption>
                    <OneLineCenter>
                        <SchoolIcon style={{ fontSize: '1.4rem', fill: 'grey', marginBottom: '-0.4rem' }} />
                        <p>Economics and Sales</p>
                    </OneLineCenter>
                    <OneLineCenter>
                        <BusinessCenterIcon style={{ fontSize: '1.4rem', fill: 'grey', marginBottom: '-0.4rem' }} />
                        <p>Fresher, 25</p>
                    </OneLineCenter>
                    <OneLineCenter>
                        <BubbleChartIcon style={{ fontSize: '1.4rem', fill: 'grey', marginBottom: '-0.4rem' }} />
                        <p>Sketch and paintings</p>
                    </OneLineCenter>
                    <OneLineCenter>
                        <CheckCircleIcon style={{ fontSize: '1.4rem', fill: 'grey', marginBottom: '-0.4rem' }} />
                        <p>Hookups and one night stands</p>
                    </OneLineCenter>


                    <OneLineDown>
                        <section>
                            Other Accounts
                        </section>
                    </OneLineDown>
                    <OneLineCenter>
                        <InstagramIcon style={{ fontSize: '1.4rem', fill: 'grey', marginBottom: '-0.4rem' }} />
                        <p>@iamatanunayak</p>
                    </OneLineCenter>
                    <OneLineCenter>
                        <TwitterIcon style={{ fontSize: '1.4rem', fill: 'grey', marginBottom: '-0.4rem' }} />
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
                            Bollywood Movies
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
            <EditProfile>
                <CreateIcon style={{ fill: 'white' }} />
            </EditProfile>
            <BottomNavbar/>
            </Container>
        </>
    )
}

export default Profile

const Container = styled.div`
    padding-bottom: 1.8rem;
    position: relative;
    margin-bottom: 70px;
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
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background: rgb(176,28,51);
        background: linear-gradient(90deg, rgba(176,28,51,1) 13%, rgba(134,101,106,1) 100%);
        position: absolute;
        bottom: -15px;
        right: 10px;
        display: grid;
        place-items: center;
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

        p{
            font-size: 1.25rem;
            display: inline-block;
            margin-left: 0.4rem;
            font-weight: 300;
        }
    }

    section{
        font-size: 1.05rem;
        font-weight: 600;
        letter-spacing: 0.15rem;
        margin-top: 1.4rem;

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
        color: grey;
        display: inline-block;
        margin-left: 10px;
        margin-top: -10px;
    }
`

const Caption = styled.div`
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
`

const Passions = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Passion = styled.div`
    padding: 0.3rem;
    border-radius: 100px;
    font-size: 0.7rem;
    color: grey;
    border: 1px solid grey;
    margin: 0 0.3rem 0.3rem 0;
`