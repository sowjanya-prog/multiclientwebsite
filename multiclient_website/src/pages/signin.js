import React from 'react';
import { useNavigate } from "react-router-dom";


const Signin = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate('/about');
    }
    return (
        <div>
            <form >
                <h1>Sign in</h1>
                <table>
                    <tr>
                        <td>Email id</td><td><input type="text"></input></td>
                    </tr>
                    <tr>
                        <td>Password</td><td><input type="password"></input></td>
                    </tr>

                    <tr>
                        <td align="right"><input name="submit" type="submit" onClick={(e) => handleClick(e)} value="Submit" /></td>
                    </tr>

                </table>




            </form>

        </div>
    );
};

export default Signin;
