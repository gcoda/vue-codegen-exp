// import Vue, { VNode } from 'vue'
// declare module '*.vue' {
//   import Vue from 'vue'
//   export default Vue
// }
import 'vue-cli-plugin-apollo'
import { ApolloClient } from 'apollo-client'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'

declare type VueApolloClient = ApolloClient<InMemoryCache> & {
  wsClient: SubscriptionClient
}
