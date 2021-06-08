import React, { useState } from 'react';
import { Add_user } from "../actions/user-actions";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

//class Register extends Component {

const Register = (props) => {

    const history = useHistory();
    let [username, setName] = useState('');
    let [city, setCity] = useState('');
    let [email, setEmail] = useState('');
    let [userPicture, setPicture] = useState();

    // state = {
    //     username: "",
    //     email:"",
    //     city:"",
    //     profile:""
    //   };

    // handleChange = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    // };

    // setpic = e => {
    //     this.setState({ [e.target.name]: e.target.files[0] });
    // }

    // handleSubmit = e => {
    //     e.preventDefault();

    //     //create post Object
    //     const user = {
    //         username: this.state.username,
    //         email: this.state.email,
    //         city: this.state.city,
    //         profile: this.state.pic
    //     };

    //     this.props.Add_user(user);

    //     let path = '/';
    //     this.props.history.push(path);
    // };


    return (
        <div className="container">
            <h1 className="text-center mt-5">Rgister Component </h1>

            <form className="col-lg-6 mx-auto"
                //onSubmit={handleSubmit} 
                encType="multipart/form-data">

                <div className="form-group">
                    <label>Name</label>
                    <input type="text"
                        className="form-control"
                        name="username"
                        placeholder="enter your Name"
                        value={username}
                        onChange={(e) => { setName(e.target.value) }}
                        required />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required />
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input type="text"
                        className="form-control"
                        name="city"
                        placeholder="Enter your city"
                        value={city}
                        onChange={(e) => { setCity(e.target.value) }}
                        required />
                </div>

                <input type="file" name="pic" accept="image/png,image/jpeg" onChange={(e) => {
                    setPicture(e.target.files[0])
                }} />

                <br></br>
                <br></br>

                {/* <button className="btn btn-outline-info">  Upload Photo   </button> */}

                <button className="btn btn-warning  mb-3 mr-5" onClick={() => {
                    const user = new FormData();
                    user.append("username", username);
                    user.append("city", city);
                    user.append("email", email);
                    user.append("pic", userPicture);
                    props.Add_user(user);
                    history.push('/');
                }}> Register </button>

            </form>

        </div>
    )
}


export default connect(null, { Add_user })(Register);