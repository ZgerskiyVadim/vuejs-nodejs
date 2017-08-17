export default {
  getVacancies(state){
    return state.vacanciesModule.vacancies;
  },
  getVacancyById(state){
    return state.vacanciesModule.vacancy
  },
  getTotalNumber(state){
    return state.vacanciesModule.totalNumber
  },
  getOptions(state){
    return state.vacanciesModule.options
  }
}