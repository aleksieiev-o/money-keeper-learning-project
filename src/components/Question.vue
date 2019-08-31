<template>
    <section class="block-result">
        <div class="block-form__group">
            <h3 class="title title--samll">
                Введите дату
            </h3>
            <input
                class="input block-form__input"
                v-model="result.date"
                type="date">
        </div>
        <div class="block-form__group">
            <h3 class="title title--samll">
                Введите ваш бюджет на месяц
            </h3>
            <input
                class="input block-form__input"
                v-model="result.budget"
                type="number">
        </div>
        <button
            class="btn btn--big"
            @click="nextScreen">
            Начать расчет
        </button>
    </section>
</template>

<script>
export default {
    name: 'Question',
    methods: {
        nextScreen() {
            if (this.result.date !== null && this.result.budget !== null) {
                this.$store.commit('next', this.result)
            }
            return false
        },
    },
    data() {
        return {
            result: {
                date: null,
                budget: null,
            },
        }
    },
};
</script>

<style lang="scss" scoped>
    .block-result {
        background-color: #fff;
        width: calc(100% - 65%);
        border-radius: 5px;
        margin-right: 30px;
        margin-top: 20px;
        overflow-y: auto;
        padding: 10px;
        box-shadow: 0 2.5px 10px 0 rgba(1,0,42,.1);
        border: 1px solid rgba(lightgray, .5);
    }
    input {
        border: 1px solid rgba(lightgray, .5);
        border-radius: 3px;
        background-color: #fff;
        box-shadow: 0 2.5px 10px 0 rgba(1,0,42,.1);
        height: 35px;
        padding: 3px;
        margin: 5px;
        transition: all linear .3s;
        &:focus {
            outline: rgba(lightgray, .9);
            border: 1px solid rgba(#999, 1);
        }
        &::placeholder {
            opacity: .5;
        }
    }
    .block-form {
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 0 30px;
        width: 65%;
        height: 100%;
        overflow-y: auto;
        &__group {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-bottom: 10px;
        }
    }
</style>
