import React from 'react'
import styled from 'styled-components'
import BasicBottomNav from './BasicBottomNav'

const Market = () => {
    return (
        <>
        <Container>
            <CardOne>
                    <img src="https://vlpnet.org/wp-content/uploads/2020/08/hand_heart_donate_icon.png" alt="" />
                    <section>
                        <main>
                            <h4>Support us</h4>
                            <p>
                                Lorem ipsum dolor si alias maio. Nam esse necessitatibus at. Error facilis ipsum fugit sapiente?
                            </p>
                        </main>
                        <a>
                            Donate
                        </a>
                    </section>
                </CardOne>
                <CardOne>
                    <img src="https://images.vexels.com/media/users/3/217965/isolated/preview/2cb861fa77b417b70acf59f8c9e1380d-dotted-gift-box-illustration.png" alt="" />
                    <section>
                        <main>
                            <h4>Gifts for your Valantine</h4>
                            <p>
                                Lorem ipsum dolor si alias maio. Nam esse necessitatibus at. Error facilis ipsum fugit sapiente?
                            </p>
                        </main>
                        <a>
                            Comming soon
                        </a>
                    </section>
                </CardOne>
        </Container>
        <BasicBottomNav/>
        </>
    )
}

export default Market

const Container = styled.div`
    min-height: 100vh;
    background-color: #1f2225;
    padding: 0.3rem;
`

const CardOne = styled.div`
    height: 130px;
    overflow: hidden;
    background: #34322f;
    border-radius: 10px;
    margin-bottom: 0.3rem;
    padding: 0.3rem;
    display: flex;
    justify-content: space-between;
    

    img{
        height: 100%;
        border-radius: 50%;
        margin-right: 9px;
    }

    section{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        main{
            h4{
                color: white;
                letter-spacing: 0.1rem;
            }
    
            p{
                font-size: 0.5rem;
                color: white;
                letter-spacing: 0.05rem;
                line-height: 1rem;
            }
        }

        a{
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.25rem;
            color: orange;
        }

    }
`
