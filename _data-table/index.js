import { createApp } from 'vue'
import naive from 'naive-ui'

const App = {
  template: `
<div>
<n-button>naive-ui</n-button>
</div>
  `,
  data() {
    return {
    }
  },
}


createApp(App).use(naive).mount('#app')