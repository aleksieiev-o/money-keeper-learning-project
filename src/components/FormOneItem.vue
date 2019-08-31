<template>
    <div class="wrap">
        <ul class="block-form__list block-form__list--first">
            <li class="block-form__item">
                <input placeholder="Наименование" class="input block-form__input"
                       type="text"
                       maxlength="25"
                       v-model="name">
                <input placeholder="Цена" class="input block-form__input"
                       type="number"
                       maxlength="10"
                       v-model.number="prise">
            </li>
            <button
                class="btn-form btn-form--del"
                title="Удалить из списка"
                @click="delInData">-
            </button>
            <button
                class="btn-form btn-form--add"
                title="Добавить в список"
                @click="addInData">+
            </button>
        </ul>
        <ul class="block-form__array">
            <li class="block-form__array-item"
                :key="key"
                v-for="(item, key) of arrayList">
                <p>{{ item.name }}</p>
                <p>{{ item.prise }}</p>
            </li>
        </ul>
        <button
            class="btn btn--small"
            @click="result">
            Утвердить
        </button>
    </div>
</template>

<script>
export default {
    name: 'FormOneItem',
    methods: {
        addInData() {
            if (this.name === null || this.prise === null) {
                return
            }
            this.arrayList.push({ name: this.name, prise: this.prise })
            this.name = null
            this.prise = null
        },
        delInData() {
            this.arrayList.pop()
            this.name = null
            this.prise = null
        },
        result() {
            this.summa = this.arrayList.reduce((sum, n) => sum + n.prise, 0)
            this.$store.commit('setResultFour', this.summa)
        },
    },
    data() {
        return {
            name: null,
            prise: null,
            summa: null,
            arrayList: [],
        }
    },
};
</script>

<style lang="scss" scoped>
    .wrap {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .btn-form {
        height: 20px;
        width: 40px;
        font-size: 17px;
        line-height: 0;
        margin-left: auto;
        margin-right: 5px;
        position: absolute;
        right: 3rem;
        &:focus {
            border: 1px solid lightgray;
        }
        &--del {
            bottom: 1.5rem;
        }
        &--add {
            bottom: 0;
        }
    }
    .block-form {
        &__array {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-bottom: 10px;
        }
        &__array-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > * {
                &:not(:last-child) {
                    margin-right: 15px;
                }
            }
        }
    }
</style>
