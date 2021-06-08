/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import { Link } from "react-router-dom";

/// 1 
import { FetchUsers } from "../actions/user-actions";

///2
import { connect } from "react-redux";


class User extends Component {
    componentDidMount() {
        //5.Call Action
        this.props.FetchUsers();
    }

    render() {
    
        return (
            <React.Fragment>
                <div className="container">

                <h1 className="text-center p-3" style={{ color: '#787878' }}> All users </h1>

                    <div className="row">
                    {this.props.users.map( (user, index) => (
                        <div key={index}  className="col-lg-6">

                            <div className="card p-3 text-center  mb-5 mx-auto" style={{ width: '18rem', boxShadow: '5px 10px 8px #888888' }}>
                                <img className="card-img-top mx-auto" src={`/images/${user.profile}`} alt="" style={{ width: '100px', height: '100px'}} />
                                <div className="card-body">
                                    <Link to={`/user/${user._id}`} style={{color:'black'}}>
                                        <h5 className="card-text"> {user.username} </h5>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

//4.
function mapStateToProps(state) {
    return {
        users: state.users.items,
        user: state.users.item
    };
}

//3.
export default connect(mapStateToProps, { FetchUsers })(User);