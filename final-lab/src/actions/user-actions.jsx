import TYPES from "../reducers/types";


//Action Creator

////all users
export async function FetchUsers() {
  return async function (dispatch) {
    await fetch("http://localhost:4242/getusers")
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: TYPES.users,
          payload: data
        })
      );
  };
}


////one user
export async function FetchUserDetails(id) {
  return async function (dispatch) {
    await fetch(`http://localhost:4242/getuserinfo/${id}`)
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: TYPES.userDetails,
          payload: data
        })
      );
  };
}


export async function clearDetails() {
  return async function () {
    return {
      type: TYPES.clearDetails,
      payload: null
    }

  };
}


////delete user
export async function Delete_user(id) {
  return async function (dispatch) {
    await fetch(`http://localhost:4242/delete/${id}`, { method: 'DELETE', mode: 'cors' })
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: TYPES.deleteUser,
          payload: data
        })
      );
  };
}


////add user
export async function Add_user(user) {
  return async function (dispatch) {

    await fetch("http://localhost:4242/",
      {
        method: 'POST',
        // mode: 'cors',
        // body: user
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user)
      })

      .then(res => res.json())
      .then(data => dispatch({
        type: TYPES.addUser,
        // type: '',
        payload: data
      }

      ));
  };
}




