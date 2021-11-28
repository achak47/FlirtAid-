import React from 'react'
import styled from 'styled-components'
import ClearIcon from '@material-ui/icons/Clear';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';

const CreateProfile = () => {
    return (
        <>
            <Pagination>
                <div></div>
            </Pagination>
            <Container>
                <PageOne>
                    <section>
                        <FormStatus>Create Profile > Basic Information</FormStatus>
                        <ClearIcon style={{ fill: 'grey', fontSize: '1.5rem' }} />
                    </section>
                    <MainHeader>
                        <h1>create your account</h1>
                        <span>All the information to given below will be later shown on your profile</span>
                    </MainHeader>
                    <InputsContainer>
                        <input type="text" placeholder='Full Name' />
                        <input type="number" placeholder='Age' />
                        <input type="text" placeholder='Branch or Major' />
                        <input type="text" placeholder='University' />
                        <input type="number" placeholder='Year of Passout, eg. 2024' />
                    </InputsContainer>
                    <InputsContainer>
                        <input type="text" placeholder='Something you love to do' />
                        <InstructionSpan>
                            Your primary skill like painter, coder or maybe overthinker 
                        </InstructionSpan>
                        <input type="text" placeholder='About yourself - Bio' />
                        <input type="text" placeholder='In search of' />
                        <InstructionSpan>
                            serious relationship, simple dating or hookups etc
                        </InstructionSpan>
                    </InputsContainer>
                    <SubmitButton>
                        Continue
                    </SubmitButton>
                </PageOne>
                {/* <PageTwo>
                    <section>
                        <FormStatus>Create Profile > Accouts and Interests</FormStatus>
                        <ClearIcon style={{ fill: 'grey', fontSize: '1.5rem' }} />
                    </section>
                    <MainHeaderPartTwo>
                        <h1>Social Media Accounts</h1>
                        <span>Enter accounts which ever you have</span>
                    </MainHeaderPartTwo>
                    
                    <SocialAccInputsContainer>
                    <SideBySide>
                        <InstagramIcon style={{ fill: '#fd4f6c', fontSize: '2rem' }} />
                        <input type="text" placeholder='Instagram'/>
                    </SideBySide>
                    <SideBySide>
                        <FacebookIcon style={{ fill: '#fd4f6c', fontSize: '2rem' }} />
                        <input type="text" placeholder='FaceBook'/>
                    </SideBySide>
                    <SideBySide>
                        <TwitterIcon style={{ fill: '#fd4f6c', fontSize: '2rem' }} />
                        <input type="text" placeholder='Twitter'/>
                    </SideBySide>
                    <SideBySide>
                        <RedditIcon style={{ fill: '#fd4f6c', fontSize: '2rem' }} />
                        <input type="text" placeholder='Reddit'/>
                    </SideBySide>
                    </SocialAccInputsContainer>


                    <MainHeaderPartTwo style={{marginTop: '3rem'}}>
                        <h1>Personal Interests</h1>
                        <span>Choose any 15 of your top interests, this will also be a way to match your compatibility with your date.</span>
                    </MainHeaderPartTwo>
                    <ChooseInterests>
                        <section>Bollywood Movies</section>
                        <section>Hollywood Movies</section>
                        <section>Edm</section>
                        <section>Punjabi Songs</section>
                        <section>Pop Songs</section>
                        <section>Gamming</section>
                        <section>Sports</section>
                        <section>FootBall</section>
                        <section>Cricket</section>
                        <section>Chess</section>
                        <section>Hiking</section>
                        <section>Evening Tours</section>
                        <section>Night Walks</section>
                        <section>Slow Dance</section>
                        <section>Night Clubs</section>
                        <section>Bollywood Movies</section>
                        <section>Hollywood Movies</section>
                        <section>Edm</section>
                        <section>Punjabi Songs</section>
                        <section>Pop Songs</section>
                        <section>Gamming</section>
                        <section>Sports</section>
                        <section>FootBall</section>
                        <section>Cricket</section>
                        <section>Chess</section>
                        <section>Hiking</section>
                        <section>Evening Tours</section>
                        <section>Night Walks</section>
                        <section>Slow Dance</section>
                        <section>Night Clubs</section>
                        <section>Bollywood Movies</section>
                        <section>Hollywood Movies</section>
                        <section>Edm</section>
                        <section>Punjabi Songs</section>
                        <section>Pop Songs</section>
                        <section>Gamming</section>
                        <section>Sports</section>
                        <section>FootBall</section>
                        <section>Cricket</section>
                        <section>Chess</section>
                        <section>Hiking</section>
                        <section>Evening Tours</section>
                        <section>Night Walks</section>
                        <section>Slow Dance</section>
                        <section>Night Clubs</section>
                    </ChooseInterests>
                    <SubmitButton>
                        Continue
                    </SubmitButton>
                </PageTwo> */}
            </Container>
        </>
    )
}

export default CreateProfile

const InstructionSpan = styled.span`
    font-size: 0.5rem;
    color: #ff6b5c;
    margin-bottom: 0.2rem;
    width: 80%;
` 

const ChooseInterests = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    margin-top: 1rem;

    section{
        padding: 0.3rem;
        border-radius: 100px;
        font-size: 0.7rem;
        color: grey;
        border: 1px solid grey;
        margin: 0 0.3rem 0.3rem 0;
    }
`

const SocialAccInputsContainer = styled.div`
    margin-top: 0.9rem;
`

const SideBySide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: auto;
    margin-top: 0.3rem;

    input{
        flex: 1;
        padding: 0.5rem;
        font-size: 0.8rem;
        outline: none;
        border: 1px solid #d5c5c5;
        border-radius: 4px;
        margin-left: 0.2rem;
    }
`

const SubmitButton = styled.button`
    padding: 0.5rem 1.1rem;
    width: 80%;
    margin: 1.5rem auto;
    border: none;
    background: linear-gradient(#fd4670, #ff6b5c);
    border-radius: 4px;
    color: white;
    font-weight: 500;
    cursor: pointer;
    display: grid;
    place-items: center;
    letter-spacing: 0.05rem;
`

const Pagination = styled.div`
    height: 10px;
    background: rgb(176,28,51);
    background: linear-gradient(90deg, rgba(134,101,106,1) -10%, green 100%);
    display: block;
    width: 33vw;
`

const InputsContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 80%;
        padding: 9px 0 7px 8px;
        font-size: 0.8rem;
        outline: none;
        margin-top: 0.3rem;
        border: 1px solid #d5c5c5;
        border-radius: 4px;
    }
`

const Container = styled.div`
    padding: 0.3rem;
`

const FormStatus = styled.div`
    font-size: 0.65rem;
    color: grey;
`

const PageOne = styled.div`
    section{
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
`

const PageTwo = styled.div`
    section{
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
`

const MainHeader = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1{
        font-size: 1.2rem;
        letter-spacing: 0.15rem;
        text-transform: uppercase;
    }

    span{
        font-size: 0.8rem;
        color: #ff6b5c;
    }
`

const MainHeaderPartTwo = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1{
        font-size: 0.9rem;
        letter-spacing: 0.15rem;
        text-transform: uppercase;
    }

    span{
        font-size: 0.7rem;
        color: #ff6b5c;
    }
`