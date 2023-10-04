import React, { Component } from 'react';
import Input from './input';
import * as yup from 'yup'
import axios from 'axios';

class Login extends Component {
    state ={
        account : {
            email : '',
            password: ''
        },
        errors : []
    }

    schema = yup.object().shape(
        {
            email: yup.string().email('Wrong format').required(),
            password: yup.string().min(4, "your password should be mor than 4 character")
        }
    )

    hanleSubmit = async(e) =>{
        e.preventDefault();
        const result = await this.validate();
        console.log(result);
        if(result){
            const response = await axios.post('https://reqres.in/api/login', result);
            console.log(response);
        }
    }

    handleChange = async({currentTarget : input}) =>{
        const account =  {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    }

    validate = async() => {
        try{
            const result = await this.schema.validate(this.state.account, {abortEarly : false});
            return (result);
        }
        catch(error){
            console.log(error.errors);
            this.setState({errors : error.errors})
        }
    }
    
    render() { 
        const {email, password} = this.state.account;
        return (
            <>
                {
                    this.state.errors.length !== 0 && (
                        <div className='alert alert-danger'>
                            <ul>
                                {this.state.errors.map((e,i) => 
                                <li key={i}>{e}</li>
                                )}
                            </ul>
                        </div>
                    )
                }   
                <form onSubmit={this.hanleSubmit}>                
                    <Input name="email"  value={email} label="Email" onChange={this.handleChange}/>
                    <Input name="password"  value={password} label="Password" onChange={this.handleChange}/>
                    <div>
                    <button className='btn btn-primary'>Login</button>
                    </div>
                </form>
            </>
            
        );
    }
}
 
export default Login;