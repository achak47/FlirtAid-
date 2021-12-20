import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import Fade from 'react-reveal/Fade';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ClearIcon from '@material-ui/icons/Clear';
import { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';



const LandInChina = () => {
    
    const [sideBar, setSideBar] = useState(false);

    return (
        <div>
            <Container>
                <PageOne>
                    <ShowTop>
                        <h1 style={{letterSpacing: '0.15rem', fontSize: '1.4rem'}}>FlirtAid</h1>
                        <button onClick={(e) => setSideBar(true)}>
                            <MenuIcon style={{ fontSize: '1.8rem', fill: 'white' }} />
                        </button>
                    </ShowTop>
                    <Mid>
                        <Fade bottom>
                            <h1><i>Start something epic.</i></h1>
                        </Fade>
                    </Mid>
                    <Bottom>
                        <Fade bottom>
                            <Link to="/signup" style={{textDecoration: 'none'}}>
                                <CreateAccBtn>
                                    create account
                                </CreateAccBtn>
                            </Link>
                        </Fade>
                        <Fade bottom>
                            <Link to="/login" style={{textDecoration: 'none'}}>
                                <LoginAccBtn>
                                    log in
                                </LoginAccBtn>
                            </Link>
                        </Fade>
                    </Bottom>
                    <DancerDownIcon>
                        <ExpandMoreIcon style={{ fontSize: '1.5rem', fill: 'white' }} />
                    </DancerDownIcon>
                </PageOne>

                <PageTwo>
                    <Fade bottom>
                        <h3>Why Flirtaid?</h3>
                    </Fade>
                    <Fade bottom>
                        <span>
                            Watch David and Jenny's struggles and how their love overcomes all in the song Sapna Jahan from the film Brothers starring Akshay Kumar, Sidharth Malhotra & Jacqueline Fernandez. With its soft melody, soulful vocals by Sonu Nigam & Neeti Mohan and a heart-warming video, Sapna Jahan is one of the biggest love songs of the year!
                            SME (on behalf of Sony Music Entertainment India Pvt. Ltd.); LatinAutor - UMPG, CMRRA, LatinAutorPerf, UNIAO BRASILEIRA DE EDITORAS DE MUSICA - UBEM, ASCAP, LatinAutor - SonyATV, SMEIndia_Pub, SOLAR Music Rights Management, Sony ATV Publishing, and 12 Music Rights Societies
                        </span>
                    </Fade>
                </PageTwo>


                <PageThree>
                    <h3>Features</h3>

                    <FeatureContainer>
                        <Fade bottom>
                            <img src="https://media-exp1.licdn.com/dms/image/C4E22AQH21evYiDZPLw/feedshare-shrink_2048_1536/0/1639243748629?e=1642032000&v=beta&t=Eowmh0GbqQJ1tBcK3270eIdJk8hJMKuEucyoEyjewh0" alt="" />
                        </Fade>
                        <Fade bottom>
                            <p>Signal Lights</p>
                        </Fade>
                        <Fade bottom>
                            <span> Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor. </span>
                        </Fade>
                    </FeatureContainer>

                    <FeatureContainer>
                        <Fade bottom>
                            <img src="https://media-exp1.licdn.com/dms/image/C4E22AQG3WMlFDXqlrw/feedshare-shrink_800/0/1638702524630?e=1642032000&v=beta&t=kdqpRiaihtxqKsy9H3nbFRFOnxXgTM_QAlVMDOA4Fx8" alt="" />
                        </Fade>
                        <Fade bottom>
                            <p>Love Percentage</p>
                        </Fade>
                        <Fade bottom>
                            <span> Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor. </span>
                        </Fade>
                    </FeatureContainer>

                    <FeatureContainer>
                        <Fade bottom>
                            <img src="https://media-exp1.licdn.com/dms/image/C4E22AQE2jZyMB9E2gw/feedshare-shrink_2048_1536/0/1638703591367?e=1642032000&v=beta&t=ptbH3YnX7rCyHGSVUG5EMmXeK54FoWTSviDHyHcyATU" alt="" />
                        </Fade>
                        <Fade bottom>
                            <p>A.I. protected user signup</p>
                        </Fade>
                        <Fade bottom>
                            <span> Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor. </span>
                        </Fade>
                    </FeatureContainer>
                </PageThree>

                <PageFour>
                    <Fade bottom>
                        <h3>Our Mission</h3>
                    </Fade>
                    <Fade bottom>
                        <span>
                            Dating someone could be a dicy process, and probably even more so if you do so over dating apps. A lot of sketchy variables come to the fore: is the opposite person authentic or someone interacting behind a fake profile? How do I start the conversation: I don’t want to sound boring but also don’t want to go overboard. I like the person but can’t express my feelings towards him/her. I wish to gift things specially customized for my loved ones. FlirtAid aims to bring a viable solution to all these problems.
                        </span>
                    </Fade>
                </PageFour>
                <Footer>

                    <Fade bottom>
                        <h1>Grinder</h1>
                    </Fade>

                    <div>
                        <Fade bottom>
                            <FooterLinks href="/privacy-policy">Privacy policy</FooterLinks>
                        </Fade>
                        <Fade bottom>
                            <FooterLinks href="/terms-and-co">Terms and Conditions</FooterLinks>
                        </Fade>
                        <Fade bottom>
                            <FooterLinks href="/faq">FAQ</FooterLinks>
                        </Fade>
                        <Fade bottom>
                            <FooterLinks href="/our-team">Our Team</FooterLinks>
                        </Fade>


                    </div>

                    <section>
                        <Fade left>
                            <SocialLink target="_blank" href="https://www.facebook.com/flirtaidju">
                                <span>
                                    <FacebookIcon style={{ fontSize: '1.3rem', fill: 'white' }} />
                                </span>
                            </SocialLink>
                        </Fade>
                        <SocialLink target="_blank" href="https://www.instagram.com/flirtaid/">
                            <span>
                                <InstagramIcon style={{ fontSize: '1.3rem', fill: 'white' }} />
                            </span>
                        </SocialLink>
                        <Fade right>
                            <SocialLink target="_blank" href="https://www.linkedin.com/company/flirtaid/?viewAsMember=true">
                                <span>
                                    <LinkedInIcon style={{ fontSize: '1.3rem', fill: 'white' }} />
                                </span>
                            </SocialLink>
                        </Fade>
                    </section>
                </Footer>
            </Container>
        
            <SideBar className={`${sideBar ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <SbComponentOne>
                    <Link to="/learn">How to use</Link>
                    <Link to="/community-guidelines">Community Guidelines</Link>
                    <Link to="/">Contact Us</Link>
                </SbComponentOne>
                <JoinNow onClick={(e) => setSideBar(false)}>
                    <ArrowBackIosIcon style={{fontSize: '0.7rem', marginRight: '0.25rem'}} /> Create Account
                </JoinNow>
                <RemoveSideBar onClick={(e) => setSideBar(false)}>
                    <ClearIcon style={{fontSize: '1.5rem', fill: 'white'}} />
                </RemoveSideBar>
            </SideBar>

        </div>
    )
}

export default LandInChina

const Container = styled.div`
    background-color: #282626;
    min-height: 200vh;
`

const PageOne = styled.div`
    padding: 1rem;
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('https://media.istockphoto.com/photos/finger-pushing-heart-icon-on-screen-in-mobile-smartphone-application-picture-id1179846145?k=20&m=1179846145&s=612x612&w=0&h=0GcWfkbbxpDm0Xnjs8QWx4gpCrbSdRqGY1T-hRcbWuc=') center center / cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`

const ShowTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
    }

    button{
        background-color: transparent;
        border: none;
    }
`

const Mid = styled.div`
    h1{
        font-size: 2.15rem;
        line-height: 2.75rem;
        text-align: center;
        font-weight: 600;
        
        i{
            color: white;
        }
    }
`

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 75px;
`

const CreateAccBtn = styled.button`
    width: 80vw;
    height: 3rem;
    border-radius: 100px;
    display: grid;
    place-items: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    background-color: #ef4239;
    border: none;
    color: white;

    &:hover{
        background-color: red;
        transition-duration: 0.3s;
    }
`

const LoginAccBtn = styled.button`
    width: 80vw;
    height: 3rem;
    border-radius: 100px;
    display: grid;
    place-items: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    margin-top: 16px;

    &:hover{
        background-color: white;
        color: black;
        transition-duration: 0.3s;
    }
`

const DancerDownIcon = styled.div`
    position: absolute;
    bottom: 40px;
    width: 95%;
    display: grid;
    place-items: center;
    animation: animateDown infinite 1.5s;


    @keyframes animateDown{
        0%, 20%, 50%, 80%, 100%{
            transform: translateY(0);
        }
        40%{
            transform: translateY(5px);
        }
        60%{
            transform: translateY(3p);
        }
    }
`

const PageTwo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    color: white;
    min-height: 100vh;
    background-color: #1c1a1a;
    width: 100vw;
    background: linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .5)), url('https://media-exp1.licdn.com/dms/image/C4E22AQF4c4c3JIYLbw/feedshare-shrink_800/0/1638699718727?e=1642032000&v=beta&t=I05KtG7QJF49DIjUwDvEdjpui7QlEiPL0GQdY5hH_Z0') center center / cover no-repeat;

    h3{
        color: white;
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    span{
        color: grey;
        font-size: 0.8rem;
        text-align: center;
    }
`


const PageThree = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 1rem;
    color: white;
    /* background: linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .5)), url('https://media-exp1.licdn.com/dms/image/C4E22AQFo8PUivs-Ybw/feedshare-shrink_800/0/1638699654577?e=1642032000&v=beta&t=47UKyKWm47V9zuXOdK0EynOEglNne2iJaWsg-p95Clw') center center / cover no-repeat; */
    background-color: black;

    
    h3{
        color: white;
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: -1rem;
    }
`

const FeatureContainer = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;

    img{
        height: 80px;
        margin-bottom: 0.8rem;
        border-radius: 10px;
        border: 1px solid #855353;
    }

    p{
        color: white;
    }

    span{
        color: grey;
        font-size: 0.8rem;
        text-align: center;
    }
`

const PageFour = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    min-height: 100vh;
    color: white;
    background-color: #1c1a1a;
    justify-content: center;
    background: linear-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .5)), url('https://media-exp1.licdn.com/dms/image/C4E22AQFo8PUivs-Ybw/feedshare-shrink_800/0/1638699654577?e=1642032000&v=beta&t=47UKyKWm47V9zuXOdK0EynOEglNne2iJaWsg-p95Clw') center center / cover no-repeat;


    h3{
        color: white;
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    span{
        color: #c3bfbf;
        font-size: 0.8rem;
        text-align: center;
    }
`

const Footer = styled.div`
    height: 50vh;
    scroll-snap-align: center;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem;
    background: linear-gradient(rgba(0, 0, 0, .99), rgba(0, 0, 0, .5)), url('https://searchera.io/img/pattern.svg') center center / cover no-repeat;


    h1{
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* a{
        
    } */

    section{
        display: flex;
        justify-content: space-between;
        align-items: center;

        span{
            height: 33px;
            width: 33px;
            border-radius: 50%;
            border: 1px solid white;
            display: grid;
            place-items: center;
            margin: 0 0.3rem;
        }
    }
`

const FooterLinks = styled.a`
    text-decoration: none;
    color: white;
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
`

const SocialLink = styled.a`

`

const SideBar = styled.div`
/* index.css */
    position: fixed;
`

const SbComponentOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

        a{
            text-decoration: none;
            color: white;
            border: 1px solid white;
            padding: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.15rem;
            margin-bottom: 0.75rem;
            width: 130%;
            font-size: 0.95rem;
            text-align: center;
            
            &:hover{
                background-color: white;
                color: #333;
                transition-duration: 0.3s;
            }
        }
`

const JoinNow = styled.div`
    margin-top: 5rem;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
`

const RemoveSideBar = styled.div`
position: absolute;
top: 1rem;
right: 1rem;
`