import React, { Component } from 'react';
import Input from './input';

class Login extends Component {
    state ={
        account : {
            email : '',
            password: ''
        }
    }

    hanleSubmit = async(e) =>{
        e.preventDefault();
    }

    handleChange = async({currentTarget : input}) =>{
        const account =  {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    }
    
    render() { 
        const {email, password} = this.state.account;
        return (
            <form onSubmit={this.hanleSubmit}>                
                <Input name="email"  value={email} label="Email" onChange={this.handleChange}/>
                <Input name="password"  value={password} label="Password" onChange={this.handleChange}/>
                <div>
                <button className='btn btn-primary'>Login</button>
                </div>
            </form>
        );
    }
}
 
export default Login;