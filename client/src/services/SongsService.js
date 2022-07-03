import Api from '@/services/Api'

export default {
  indexClient (search) {
    return Api().get('songs', {
      params: {
        searchParams: search
      }
    })
  },
  createClient (song) {
    return Api().post('songs', song)
  },
  showClient (songId) {
    return Api().get(`songs/${songId}`)
  },
  putClient (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
