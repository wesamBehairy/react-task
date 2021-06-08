import React, { Component } from 'react';
/// 1 
import { FetchUserDetails, Delete_user , clearDetails} from "../actions/user-actions";

///2
import { connect } from "react-redux";


class UserDetails extends Component {
    componentDidMount() {
        //5.Call Action
        this.props.FetchUserDetails(this.props.match.params.id);
        // this.props.Delete_user(this.props.match.params.id);
    }

    componentWillUnmount()
    {
        this.props.clearDetails();
       // console.log(this.props.detailsObj)
    }

    renderuserdetail({ user }) {

        if (user) {


            return (
                <div className="container">

                    <div className="row">

                        <div className="col-lg-4  mt-5">

                            <div className="card" style={{ boxShadow: '5px 10px 8px #888888' }}>

                                <div className="card-body text-center">

                                    <img src={`/images/${user.profile}`} alt="" style={{ width: '100px', height: '100px' }} />

                                    <div className="mt-3">

                                        <button className="btn btn-danger" onClick={() => { this.props.Delete_user(this.props.user._id); this.routeChange(); }}> Delete </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6 mt-5">
                            <div className="card " style={{ boxShadow: '5px 10px 8px #888888' }}>
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-sm-3"><h6 className="mb-0">User Name</h6></div>
                                        <div className="col-sm-9 text-secondary" style={{ fontSize: '15px' }}> {user.username} </div>
                                    </div>

                                    <hr></hr>

                                    <div className="row">
                                        <div className="col-sm-3"><h6 className="mb-0">Email</h6></div>
                                        <div className="col-sm-9 text-secondary" style={{ fontSize: '15px' }}> {user.email} </div>
                                    </div>

                                    <hr></hr>

                                    <div className="row">
                                        <div className="col-sm-3"><h6 className="mb-0">City</h6></div>
                                        <div className="col-sm-9 text-secondary" style={{ fontSize: '15px' }}> {user.city} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )

        }
        else {
            return (
                <div>
                    <h1> no user details</h1>
                </div>
            )
        }
    }

    routeChange = () => {
        let path = '/';
        this.props.history.push(path);
    }

    render() {

        return (
            <div>
                <h1> {this.renderuserdetail(this.props)} </h1>
            </div>
        );
    }
}

//4.
function mapStateToProps(state) {
    return {

        user: state.users.item
    };
}

export default connect(mapStateToProps, { FetchUserDetails, clearDetails ,Delete_user })(UserDetails);