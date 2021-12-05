import React, { useState } from 'react'
import styled from 'styled-components'
import ClearIcon from '@material-ui/icons/Clear';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const SignUp = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('Male');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(gender);

        if (!name) {
            alert("Please Enter your Name");
        }
        else if (!email) {
            alert("Please Enter your Email");
        }
        else if (!password) {
            alert("Please Enter your Password");
        }
        else if (!gender) {
            alert("Please Enter your Gender");
        }
        else{
            const onSignup = () => {
                fetch('https://flirtaid.herokuapp.com/register', {
                    method: 'post',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password,
                        gender: gender,
                    })
                }).then(response => response.json())
                    .then(user => {
                        if (user.name) {
                            this.setState({ route: 'Dashboard' });
                            // Change dashboard to otp
                        }
                        else {
                            alert(user);
                        }
                    })
            }
        }

        setName("");
        setEmail("");
        setPassword("");
    }


    return (
        <>
        <Container>
                <section>
                    <ClearIcon style={{ fill: "white" }} />
                </section>
                <section>
                    <h1 style={{marginLeft: '0.5rem'}}>
                        Sign Up
                    </h1>
                </section>
                <Inputs>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Inputs>
                <OptionsImp>
                    <input type="radio" id="exampleRadios1" name="gender" value="option1"  style={{marginLeft: '0.5rem'}}/>
                    <label class="form-check-label-local" for="exampleRadios1" style={{color: 'grey', fontSize: '0.9rem', margin: '0 1rem 0 0.4rem'}}>
                        Male
                    </label>
                    <input type="radio" id="exampleRadios2" name="gender" value="option2"/>
                    <label class="form-check-label-local" for="exampleRadios2"  style={{color: 'grey', fontSize: '0.9rem', margin: '0 1rem 0 0.4rem'}}>
                        Female
                    </label>
                    <input type="radio" id="exampleRadios2" name="gender" value="option2"/>
                    <label class="form-check-label-local" for="exampleRadios2"  style={{color: 'grey', fontSize: '0.9rem', margin: '0 1rem 0 0.4rem'}}>
                        Others
                    </label>
                </OptionsImp>


                <RightButtonContainer  onSubmit={handleSubmit}>
                    <button type="submit">
                        <ArrowForwardIcon style={{ fill: 'white' }}/>
                    </button>
                </RightButtonContainer>

            </Container>
            <HideNav>
                <section>
                    <span>
                        Already have an account? <ChangeToRed>Sign in</ChangeToRed> 
                    </span>
                </section>
            </HideNav>
        </>
    )
}

export default SignUp

const ChangeToRed = styled.main`
    color: #ef4239;
    display: inline;
`

const Container = styled.div`   
    min-height: 100vh;
    padding: 0.5rem;
    background-color:  black;
    position: relative;
    position: fixed;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    z-index: 10;

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

const OptionsImp = styled.div`
    margin-left: 0.6rem;
`

const HideNav = styled.div`
    position: absolute;
    bottom: 0;
    height: 65px;
    width: 100vw;
    background-color:  black;
    z-index: 11;

    section{
        display: flex;
        justify-content: space-between;
        align-items: center;

        span{
            color: white;
            text-align: center;
            font-size: 0.75rem;
            letter-spacing: 0.05rem;
            margin: auto;
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
    margin: 5rem 0.8rem 1rem 0.8rem;


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
            font-size: 0.7rem;
            color: white;
            letter-spacing: 0.05rem;
        }
    }

    
`

const RightButtonContainer = styled.form`
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    margin-top: 2rem;

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