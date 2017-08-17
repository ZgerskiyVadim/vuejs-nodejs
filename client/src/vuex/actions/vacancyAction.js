import axios from 'axios'

export default {
  favoriteVacancyId,
  getAllVacancies,
  getVacancyById
}


function getAllVacancies({ commit }, options) {

  commit('GET_OPTIONS', {item: options});
  axios.get('/vacancies', options)
    .then(response => {
      commit('GET_VACANCIES', { item: response.data.vacancies});
      commit('GET_TotalNumber', {item: response.data.count})
    })
    .catch(err => console.log(err));
}

function getVacancyById({ commit }, vacancyId) {
  axios.get('/vacancies/' + vacancyId, {headers:{'x-access-token': localStorage.getItem('tokenKey')}})
    .then(response => commit('GET_VacancyById', { item: response.data}))
    .catch(err => err);
}

function favoriteVacancyId ({commit}, idOfVacancy){
    console.log('favoriteVacancyId', idOfVacancy);
    axios.post('someUrl', idOfVacancy)
        .then(response => {if(response){console.log('Everything is greate')}})
        .catch(err => err)
}


