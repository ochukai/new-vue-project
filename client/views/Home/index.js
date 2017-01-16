import Counter from 'components/Counter'
import { Toast } from 'mint-ui'

export default {

  created() {
    console.log('app created');
  },

  mounted() {
    console.log('app mounted');
  },

  methods: {
    startHacking () {
      Toast('It Works!')
    }
  },

  render(h) {
    return (
      <div class="page">
        <Counter />
        <mt-button on-click={this.startHacking}>Let's do it</mt-button>
      </div>
    )
  }
}
