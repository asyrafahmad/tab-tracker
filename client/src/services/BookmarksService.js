import Api from '@/services/Api'

export default {
  indexClient (bookmark) {
    return Api().get('bookmarks', {
      params: bookmark
    })
  },
  postClient (bookmark) {
    return Api().post('bookmarks', {
      params: bookmark
    })
  },
  deleteClient (bookmarkId) {
    return Api().get(`bookmarks/${bookmarkId}`)
  }
}
