import { createApp } from "vue";
import naive from "naive-ui";
import Demo from './table-merge.vue'

const App = {
  template: `
<div>
<n-loading-bar-provider>
  <n-message-provider>
    <n-notification-provider>
      <n-dialog-provider>
        <demo />
      </n-dialog-provider>
    </n-notification-provider>
  </n-message-provider>
</n-loading-bar-provider>
</div>
  `,
  components: {
    Demo,
  }
}

createApp(App).use(naive).mount("#app");
