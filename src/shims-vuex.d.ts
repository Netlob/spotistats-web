import { Store } from 'vuex';
import { State } from './store/index';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

declare module 'vuex' {
  export function useStore(key?: string): Store<State>;
}
