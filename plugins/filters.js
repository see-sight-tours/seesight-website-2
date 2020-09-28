import Vue from 'vue'

Vue.filter('formatDate', date => formatDate(date))

const formatDate = (date) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  return date ? `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}` : null
}