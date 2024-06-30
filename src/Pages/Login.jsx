// import React, { useRef } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { loginSuccess, loginFailure, loginStart } from "../Redux/Slices/userSlice"; // Assuming these actions are defined in your userSlice

// const Container = styled.div`
//     width: 100vw;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;
// const Wrapper = styled.div`
//     width: 25%;
//     padding: 20px;
//     background-color: white;
// `;
// const Title = styled.h1`
//     font-size: 24px;
//     font-weight: 300;
// `;
// const Form = styled.form`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
// `;
// const Input = styled.input`
//     flex: 1;
//     min-width: 40%;
//     margin: 10px 0;
//     padding: 10px;
// `;
// const Button = styled.button`
//     width: 40%;
//     border: none;
//     padding: 15px 20px;
//     background-color: teal;
//     color: white;
//     cursor: pointer;
//     margin-bottom: 10px;
//     &:disabled {
//         color: teal;
//         cursor: not-allowed;
//     }
// `;
// const Links = styled.a`
//     margin: 5px 0;
//     font-size: 12px;
//     text-decoration: underline;
//     cursor: pointer;
// `;
// const Error = styled.span`
//     color: red;
// `;

// const Login = () => {
//     const username = useRef();
//     const password = useRef();
//     const dispatch = useDispatch();
//     const { isFetching, error } = useSelector((state) => state.user);

//     const loginHandler = async (e) => {
//         e.preventDefault();
//         dispatch(loginStart());
//         try {
//             const res = await axios.post("http://localhost:5000/api/auth/login", {
//                 username: username.current.value,
//                 password: password.current.value,
//             });
//             dispatch(loginSuccess(res.data));
//         } catch (err) {
//             dispatch(loginFailure());
//             alert(err.response.data.message);
//         }
//     };

//     return (
//         <Container>
//             <Wrapper>
//                 <Title>SIGN IN</Title>
//                 <Form onSubmit={loginHandler}>
//                     <Input placeholder="user name" type="text" ref={username} />
//                     <Input placeholder="password" type="password" ref={password} />
//                     <Button type="submit" disabled={isFetching}>LOGIN</Button>
//                     {error && <Error>Some thing went wrong...</Error>}
//                     <Links>DO NOT YOU REMEMBER THE PASSWORD?</Links>
//                     <Link to='/register' style={{color:'inherit'}}>
//                         <Links>CREATE A NEW ACCOUNT</Links>
//                     </Link>
//                 </Form>
//             </Wrapper>
//         </Container>
//     );
// };

// export default Login;
import React, { useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginSuccess, loginFailure, loginStart } from "../Redux/Slices/userSlice"; // Assuming these actions are defined in your userSlice

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled {
        color: teal;
        cursor: not-allowed;
    }
`;
const Links = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;
const Error = styled.span`
    color: red;
`;

const Login = () => {
    const username = useRef();
    const password = useRef();
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const loginHandler = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        try {
            const res = await axios.post("/api/auth/login", {
                username: username.current.value,
                password: password.current.value,
            });
            console.log(res.data); // Logging the response
            dispatch(loginSuccess(res.data));
        } catch (err) {
            console.error(err.response.data); // Logging the error response
            dispatch(loginFailure());
            alert(err.response.data.message);
        }
    };

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form onSubmit={loginHandler}>
                    <Input placeholder="user name" type="text" ref={username} />
                    <Input placeholder="password" type="password" ref={password} />
                    <Button type="submit" disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Some thing went wrong...</Error>}
                    <Links>DO NOT YOU REMEMBER THE PASSWORD?</Links>
                    <Link to='/register' style={{color:'inherit'}}>
                        <Links>CREATE A NEW ACCOUNT</Links>
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;

