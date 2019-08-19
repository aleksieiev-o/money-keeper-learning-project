import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        formOne: [
            { id: Math.random(), first: '', second: '' },
        ],
        resultArr: [
            { key: 'Доход:', value: '-' },
            { key: 'Бюджет на 1 день:', value: '-' },
            { key: 'Уровень дохода:', value: '-' },
            { key: 'Обязательные расходы:', value: '-' },
            { key: 'Возможные траты:', value: '-' },
            { key: 'Дополнительный доход:', value: '-' },
            { key: 'Накопления за 1 месяц:', value: '-' },
            { key: 'Накопления за 1 год:', value: '-' },
        ],
    },
    getters: {
        getFormOne(state) {
            return state.formOne
        },
        getResultArr(state) {
            return state.resultArr
        },
    },
    actions: {
        addForm({ commit }) {
            commit('addForm')
        },
        delForm({ commit }) {
            if (this.state.formOne.length < 2) {
                return false
            }
            commit('delForm')
        },
    },
    mutations: {
        addForm(state) {
            state.formOne.push({ id: Math.random(), first: '', second: '' })
        },
        delForm(state) {
            state.formOne.pop()
        },
    },
});
