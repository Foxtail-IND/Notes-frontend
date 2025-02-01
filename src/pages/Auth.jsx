    import React from 'react';
    import Button from '@mui/material/Button';
    import logo from "../assets/logo.png"
    import { Card, CardContent, TextField, Checkbox, FormControlLabel } from "@mui/material";

    const Auth = () => {
        const handleLogin = () => {
            window.location.href = 'http://localhost:8080/'; // Update with your backend URL
        };

        return (
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <Card className="p-8 rounded-2xl shadow-lg w-96 bg-white">
                    <CardContent className="text-center">
                        <img src={logo} alt="Logo" className="mx-auto mb-4 w-16" />
                        <h2 className="text-xl font-semibold mb-4">Sign In</h2>
                        <TextField label="Email or Username" variant="outlined" fullWidth margin="normal" />
                        <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
                        <FormControlLabel control={<Checkbox />} label="Stay signed in for 30 days" />
                        <Button className="w-full py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 mb-4">
                            Sign in
                        </Button>
                        <div className="text-gray-500 my-2">or</div>
                        <Button onClick={handleLogin} className="w-full py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 mb-2">
                            Sign in with Google
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    };

    export default Auth;
