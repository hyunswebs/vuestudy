
import vmenu from './menu/vue_menu/index.vue'
import vmenuItem from './menu/menu_item/index.vue'
import vsubMenu from './menu/sub_menu/index.vue'
import profile from '../left-profile/index.vue'
export default {
  name: 'left-side',
  components: {
    vmenu,
    vsubMenu,
    vmenuItem,
    profile
  },
  data() {
    return {
    }
  }
}
