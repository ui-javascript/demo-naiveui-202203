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
        <demo 
          @hello="hello"
        />
      </n-dialog-provider>
    </n-notification-provider>
  </n-message-provider>
</n-loading-bar-provider>
</div>
  `,
  components: {
    Demo,
  },
  setup() {
    function hello(msg) {
      console.log("家祭无忘告乃翁 -- " + msg)
    }
    return {
        hello
    }
  },
}

createApp(App).use(naive).mount("#app");
