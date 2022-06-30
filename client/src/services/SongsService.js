import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  createClient (song) {
    return Api().post('songs', song)
  },
  showClient (songId) {
    return Api().get(`songs/${songId}`)
  }
}
