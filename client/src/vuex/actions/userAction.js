import axios from 'axios'

function UpdateUser({commit}, user) {
  console.log("ACTION", user);
  commit('UPDATE_USER', user);
  axios.put('someUrl' + "id", user)
    .then(response => {
      console.log("ACTION", response);

    })
    .catch(err => err);
}

function SingIn({commit}, user) {
  console.log('SingInACTION', user);
  axios.post('/login', user)
    .then(response => {
      commit('SINGIN', response.data.user);
      localStorage.setItem('tokenKey', response.data.token);
      localStorage.setItem('userName', response.data.user.userName);
      location.href = '/';
    })
    .catch(err => err);
}

export default {
  UpdateUser,
  SingIn
}