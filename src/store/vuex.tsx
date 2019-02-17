const store = new Vuex.Store({
  state: {
    // список книг
    books: [
      { id: 1, title: '...', finished: true },
      { id: 2, title: '...', finished: false }
    ]
  },
  getters: {
    books: state => state.books
  }
})

export default {
  computed: {
    books () {
      return this.$store.getters.books
    }
  }
}
