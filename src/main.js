import './assets/main.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// ============fontawsome==================
//參考網址: https://reurl.cc/4dQ4gD
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

// === 點擊回到頂端 ====//

router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});


library.add(faCircleNotch)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

createApp(App).component('font-awesome-icon', FontAwesomeIcon,);

