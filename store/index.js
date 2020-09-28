export const state = () => ({
    modalName: '',
    searchInputOffsetTop: 0,
    modalText: '',
    isModalOpen: false,
    isFooter: true,
    isNotificationVisible: false,
    notificationText: null,
    pages: [],
    mediaUrl: 'https://res.cloudinary.com/see-sight-tours/image/upload/',
    currentCurrency: { name: 'US Dollars ($)', value: 'usd' },
    reviewPageNumber: 1,
    reviewLocation: '',
    currency: [
      { name: 'US Dollars ($)', value: 'usd' }
    ],
    reviewsFilters: {
      city: { value: 'All', name: 'All' },
      tour: { value: 'All', name: 'All' },
      platform: { value: 'All', name: 'All' }
    },
    PRInfo: []
  })
  // These mutations update the state with the payload we pass in //
  export const mutations = {
    setModalName (state, payload) {
      state.modalName = payload
    },
    setReviewPageNumber (state, payload) {
      state.reviewPageNumber = payload
    },
    setSearchInputOffsetTop (state, payload) {
      state.searchInputOffsetTop = payload
    },
    setModalText (state, payload) {
      state.modalText = payload
    },
    setIsModalOpen (state, payload) {
      state.isModalOpen = payload
    },
    setIsFooter (state, payload) {
      state.isFooter = payload
    },
    setPages (state, payload) {
      state.pages = payload
    },
    setReviewLocation (state, payload) {
      state.reviewLocation = payload
    },
    setPRInfo (state, payload) {
      state.PRInfo = payload
    },
    setIsNotificationVisible (state, payload) {
      state.isNotificationVisible = payload
    },
    setNotificationText (state, payload) {
      state.notificationText = payload
    },
    setCurrentCurrency (state, payload) {
      state.currentCurrency = payload
    },
    setReviewsFilters (state, payload) {
      state.reviewsFilters = payload
    }
  }