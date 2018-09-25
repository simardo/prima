import Vue from 'vue';
import Vuex, { Store, MutationTree } from 'vuex';
import { MyState } from './my-State';
import { ChangeValueMutations } from './mutations';

Vue.use(Vuex);

const myState: MyState = new MyState();
const mutations: MutationTree<MyState> = {
    [ChangeValueMutations.TYPE]: ChangeValueMutations.mutate
};

const store: Store<MyState> = new Store<MyState>({
    strict: true, // TODO debug mode only
    state: myState,
    mutations: mutations
});

export default store;
