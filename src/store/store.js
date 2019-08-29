import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        start: false,
        rightComponents: 'app-question',
        formOne: [],
        resultQuest: {
            date: '',
            budget: '',
        },
        resultArr: {
            one: { key: 'Бюджет на месяц:', value: '-' },
            two: { key: 'Бюджет на 1 день:', value: '-' },
            three: { key: 'Уровень дохода:', value: '-' },
            four: { key: 'Обязательные расходы:', value: '-' },
            five: { key: 'Возможные траты:', value: '-' },
            six: { key: 'Дополнительный доход:', value: '-' },
            seven: { key: 'Накопления за 1 месяц:', value: '-' },
            eight: { key: 'Накопления за 1 год:', value: '-' },
        },
    },
    getters: {
        getRightComponents(state) {
            return state.rightComponents
        },
        getStart(state) {
            return state.start
        },
        getFormOne(state) {
            return state.formOne
        },
        getResultArr(state) {
            return state.resultArr
        },
        getResultQuest(state) {
            return state.resultQuest
        },
    },
    mutations: {
        next(state) {
            state.start = true
            state.rightComponents = 'app-result'
        },
        setDateBudget(state, payload) {
            state.resultQuest = Object.assign(state.resultQuest, payload)
            state.resultArr.one.value = state.resultQuest.budget
        },
        setResult(state, payload) {
            state.resultArr.four.value = payload
        },
    },
    actions: {
    },
});
