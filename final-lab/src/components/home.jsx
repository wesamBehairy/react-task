import Search from './search'
import User from './user';
import {connect} from 'react-redux';
import { FetchUsers } from "../actions/user-actions";

const Home = (props) => {
    return (
     <div>
        <Search></Search>
        <User {...props}></User>
     </div>
    )
}

// //4.
// function mapStateToProps(state) {
//     return {
//         users: state.users.items,
//         user: state.users.item
//     };
// }

export default connect( FetchUsers )(Home);