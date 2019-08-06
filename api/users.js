const axios =import('./config')

export function callApiFetch(route,param = {}) {
    return axios.get(`/${route}`,{param})
  }

  export function callApiAdd(route,params) {
    return axios.post(`/${route}`, params)
      .then(response => response)
      .catch(error => error)
  }

  export function callApiEdit(route,id, params) {
    return axios.put(`/${route}/${id}`, params)
      .then(response => response)
      .catch(error => error)
  }

  export function callApiDelete(route,id) {
    return axios.delete(`/${route}/${id}`)
      .then(response => response)
    .catch(error => error)
}

export function callApiShow(route,id) {
  return axios.get(`/${route}/${id}`)
    .then(response => response)
    .catch(error => error)
}
