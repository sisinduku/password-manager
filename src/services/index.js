import axios from 'axios'

const http = axios.create({baseURL: 'http://localhost:3003/accounts'})

export const getAccountsApi = () => {
  return http.get().then(({data}) => {
    return {data}
  }).catch(reason => {
    return {error: reason}
  })
}

export const postAccountApi = (account) => {
  return http.post('', account).then(({data}) => ({data})).catch(reason => ({error: reason}))
}

export const putAccountApi = (account) => {
  return http.put(`/${account.id}`, account).then(({data}) => ({data})).catch(reason => ({error: reason}))
}

export const deleteAccountApi = (id) => {
  return http.delete(`/${id}`).then(({data}) => ({data})).catch(reason => ({error: reason}))
}
