<template>
    <section class="block-result">
        <ul class="block-result__list">
            <li class="block-result__item" :key="item.key" v-for="item of getResultArr">
                <span class="block-result__key">
                    {{ item.key }}
                </span>
                <span class="block-result__value">
                    {{ item.value }}
                </span>
            </li>
        </ul>
        <div class="block-result__data">
            <label for="year">
                Год
                <input type="text" disabled id="year">
            </label>
            <label for="mouth">
                Месяц
                <input type="text" disabled id="mouth">
            </label>
            <label for="day">
                День
                <input type="text" disabled id="day">
            </label>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Result',
    computed: {
        ...mapGetters([
            'getResultArr',
        ]),
    },
}
</script>

<style lang="scss" scoped>
    span {
        font-weight: 700;
    }
    label {
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 125px;
    }
    input {
        width: 60px;
    }
    .block-result {
        background-color: #fff;
        width: calc(100% - 65%);
        margin-right: 30px;
        margin-top: 20px;
        &__list {
            align-items: center;
            display: flex;
            flex-direction: column;
            padding: 30px;
            box-shadow: 0 2.5px 10px 0 rgba(1,0,42,.1);
            border: 1px solid rgba(lightgray, .5);
            border-radius: 3px;
            margin-bottom: 20px;
        }
        &__item {
            align-items: center;
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 15px;
        }
        &__key {
            color: #222;
            margin-right: 15px;
            white-space: nowrap;
        }
        &__value {
            color: #61a654;
            text-align: right;
        }
        &__data {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            padding: 0 30px;
        }
    }
</style>
