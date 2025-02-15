import { FcGoogle } from "react-icons/fc";
import Button from '@mui/material/Button';
import logo from "../assets/logo.png"
import { Card, CardContent, TextField } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import api from "../services/api";



const Auth: React.FC = () => {

    const [username, setUsername] = useState<string | undefined>("")
    const [password, setPassword] = useState<string | undefined>("")
    const [jwtToken, setJwtToken] = useState<string | undefined>("")

    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate()


    const handleSuccessfulLogin = (token: string, decodedToken) => {
        const user = {
            username: decodedToken.sub,
            roles: decodedToken.roles ? decodedToken.roles.split(",") : [],
        };
        localStorage.setItem("JWT_TOKEN", token);
        localStorage.setItem("USER", JSON.stringify(user));

        //store the token on the context state  so that it can be shared any where in our application by context provider
        // setToken(token); //TODO

        navigate("/home");
    };


    const onLogin = async () => {
        try {
            setLoading(true);
            const data = { username, password }
            const response = await api.post("/auth/public/signin", data);
            //showing success message with react hot toast
            toast.success("Login Successful");

            //reset the input field by using reset() function provided by react hook form after submission


            if (response.status === 200 && response.data.jwtToken) {
                setJwtToken(response.data.jwtToken);
                const decodedToken = jwtDecode(response.data.jwtToken);

                handleSuccessfulLogin(response.data.jwtToken, decodedToken);

            }
            else {
                toast.error(
                    "Login failed. Please check your credentials and try again."
                );
            }
        } catch (error) {
            if (error) {
                toast.error("Invalid credentials");
            }


        } finally {
            setLoading(false);
        }


    }

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <Card className="p-8 rounded-2xl shadow-lg w-96 bg-white">
                <CardContent className="text-center">
                    <img src={logo} alt="Logo" className="mx-auto mb-4 w-16" />
                    <h2 className="text-xl font-semibold mb-4"> Sign or Register</h2>
                    <TextField onChange={(e) => setUsername(e.target.value)} label="Email or Username" variant="outlined" fullWidth margin="normal" />
                    <TextField onChange={(e) => setPassword(e.target.value)} label="Password" type="password" variant="outlined" fullWidth margin="normal" />
                    {loading ? (<p>Loading</p>) : (<Button onClick={onLogin} className="w-full py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 mb-4">
                        Sign in
                    </Button>)}
                    <div className="text-gray-500 my-2">or</div>
                    <Button className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 mb-2 gap-x-4">
                        <FcGoogle className='text-2xl' />
                        Sign in with Google
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default Auth;
