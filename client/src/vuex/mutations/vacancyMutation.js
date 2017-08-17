export default {
  posts(state, {item}) {
    state.posts = item
  },
  currentPage(state, {item}) {
    state.currentPage = item
  },
  total(state, {item}) {
    state.total = item
  },
  id(state, {item}) {
    state.id = item
  },
  GET_VACANCIES(state, {item}){
    state.vacancies = item;
    console.log('MUTATIONS', state.vacancies);
  },
  GET_TotalNumber(state, {item}){
    state.totalNumber = item;
  },
  GET_VacancyById(state, {item}){
    state.vacancy = item;
  },
  GET_OPTIONS(state, {item}){
    state.options = item;
  }
}