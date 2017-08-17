import actions from '../actions/vacancyAction'
import mutations from '../mutations/vacancyMutation'

const state = {
  vacancies: [],
  vacancy: '',
  totalNumber: 0,
  options: {
    params: {
      numberOfPage: 1,
      limit: 10
    },
  }
};

export default {
  state,
  mutations,
  actions
}
