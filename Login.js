import React from 'react'
import styled from 'styled-components'
import ClearIcon from '@material-ui/icons/Clear';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Login = () => {
    return (
        <>
            <Container>
                <section>
                    <ClearIcon style={{ fill: "white" }} />
                </section>
                <section>
                    <h1 style={{marginLeft: '0.5rem'}}>
                        Login
                    </h1>
                </section>
                <Inputs>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <div>
                        <span>
                            <ChangeToRed>
                                Forgot your password ?
                            </ChangeToRed>
                        </span>
                    </div>
                </Inputs>
                <RightButtonContainer>
                    <button>
                        <ArrowForwardIcon style={{ fill: 'white' }} />
                    </button>
                </RightButtonContainer>

            </Container>
            <HideNav>
                <section>
                    <span>
                        Login with media
                    </span>
                </section>
                <section>
                    <button>
                        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                    </button>
                    <button>
                        <img src="http://assets.stickpng.com/images/584ac2d03ac3a570f94a666d.png" alt="" />
                    </button>
                </section>
            </HideNav>
        </>
    )
}

export default Login


const ChangeToRed = styled.main`
    color: #ef4239;
    display: inline;
`

const Container = styled.div`   
    min-height: 100vh;
    padding: 0.5rem;
    background-color:black;
    position: relative;

    section{
        display: block;

        h1{
            color: white;
            font-weight: 500;
            font-size: 1.5rem;
            letter-spacing: 0.05rem;
        }
    }
`

const HideNav = styled.div`
    position: fixed;
    bottom: 0;
    height: 100px;
    width: 100vw;
    background-color: black;
    z-index: 10000;

    section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 25vw;

        span{
            color: white;
            text-align: center;
            width: 50vw;
            font-size: 0.75rem;
            margin-bottom: 0.75rem;
            letter-spacing: 0.05rem;
        }
    }

    button{
        height: 50px;
        width: 80px;
        border-radius: 25px;
        /* background-color: #f6f6f8; */
        background-color: transparent;
        display: grid;
        place-items: center;
        border: none;
        border: 1px solid #f6f6f8;

        img{
            height: 25px;
        }
    }
`

const Inputs = styled.div`
    margin: 5rem 0.8rem;

    input{
        width: 100%;
        display: block;
        margin-top: 1.5rem;
        border: 1px solid white;
        border-radius: 100px;
        padding: 0.5rem 1rem;
        outline: none;
        background-color: transparent;
        color: white;
        font-size: 0.85rem;
    }

    div{
        display: flex;
        justify-content: flex-end;
        padding: 0.1rem 0.4rem;

        span{
            margin-top: 0.75rem;
            font-size: 0.7rem;
            color: white;
            letter-spacing: 0.05rem;
        }
    }
`

const RightButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 16px;

    button{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: #ef4239;
        display: grid;
        place-items: center;
        border: none;
    }
`