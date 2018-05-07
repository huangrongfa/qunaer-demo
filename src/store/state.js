let defaultlocalStorage = '北京'

try {
  if (localStorage.city) {
    defaultlocalStorage = localStorage.city
  }
} catch (e) {

}
export default {
  city: defaultlocalStorage
}
