export default {
  UPDATE_USER(state, userUpdated){
  state.user = userUpdated;
  console.log('MUTATION', state.user);
},
  SINGIN(state, data){
    console.log('data', data);
    state.user = data.user;
  }
}