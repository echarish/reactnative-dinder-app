import ConfigStore from './config.store'
import AuthStore from './auth.store'

const config = new ConfigStore()
const auth = new AuthStore()


export default {config,auth}