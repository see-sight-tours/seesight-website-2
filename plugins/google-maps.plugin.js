import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBe97F3_ub8vnEk2Jk_XKvqBPpkoLOK4xU',
    libraries: 'places'
  }
})