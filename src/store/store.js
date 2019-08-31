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
        next(state, payload) {
            state.start = true
            state.rightComponents = 'app-result'
            state.resultQuest = Object.assign(state.resultQuest, payload)
            state.resultArr.one.value = state.resultQuest.budget
        },
        setResultFour(state, payload) {
            state.resultArr.four.value = payload
        },
        setResultFive(state, payload) {
            const { ...rest } = payload
            state.resultArr.five.value = `${rest.dopFormOne} / ${rest.dopFormTwo} / ${rest.dopFormThree}`
        },
        setDeposit(state, payload) {
            const { ...rest } = payload
            state.resultArr.seven.value = (rest.sum / 100 / 12 * rest.prosent).toFixed()
            state.resultArr.eight.value = (rest.sum / 100 * rest.prosent).toFixed()
        },
        setGreatResult(state, payload) {
            state.resultArr.six = payload
            state.resultArr.two.value = ((state.resultArr.one.value
                - state.resultArr.four.value) / 30).toFixed()
            if (state.resultArr.two.value < 200) {
                state.resultArr.three.value = 'Ваши обязательные расходы, возможно, не такие и обязательные?'
            } else if (state.resultArr.two.value < 1000 && state.resultArr.two.value > 200) {
                state.resultArr.three.valuee = 'Низкий уровень дохода'
            } else if (state.resultArr.two.value > 1000 && state.resultArr.two.value < 2000) {
                state.resultArr.three.value = 'Средний уровень дохода'
            } else if (state.resultArr.two.value > 2000) {
                state.resultArr.three.value = 'Высокий уровень дохода'
            }
        },
    },
    actions: {
    },
})
