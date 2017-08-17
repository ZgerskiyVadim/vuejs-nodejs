import actions from '../actions/userAction'
import mutations from '../mutations/userMutation'

const state = {
    user: {
        name: "",
        email: "",
        city: "",
        password: ""
    }
}


export default {
    state,
    mutations,
    actions
}
