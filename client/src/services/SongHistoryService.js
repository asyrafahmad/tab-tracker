import Api from '@/services/Api'

export default {
  indexClient (params) {
    return Api().get('histories', {
      params: params
    })
  },
  postClient (history) {
    return Api().post('histories', history)
  }
}
