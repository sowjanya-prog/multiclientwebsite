import React from 'react';

const SignUp = () => {
return (
	<div>
        <form >
            <h1>Register now</h1>
        <table>
            <tr>
                <td>Name</td><td><input type= "text"></input></td>
            </tr>
            <tr>
                <td>Phonenumber</td><td><input type= "int"></input></td>
            </tr>
            <tr>
                <td>Address</td><td><input type= "text"></input></td>
            </tr>
           
			<tr>
                <td>Email</td><td><input type= "text"></input></td>
            </tr>
			<tr>
                <td>Password</td><td><input type= "Password"></input></td>
            </tr>
			
			<tr>
            <td align="right"><input name="submit" type= "submit" value="Submit"/></td>
            </tr>
        
        </table>
        
        
    

        </form>
	
	</div>
);
};

export default SignUp;
