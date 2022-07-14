import Api from '@/services/Api'

export default {
  indexClient (bookmark) {
    return Api().get('bookmarks', {
      params: bookmark
    })
  },
  postClient (bookmark) {
    return Api().post('bookmarks', bookmark)
  },
  deleteClient (bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`)
  }
}
