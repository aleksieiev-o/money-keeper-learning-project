<template>
    <div class="wrap">
        <ul class="block-form__list block-form__list--first">
            <li class="block-form__item">
                <input placeholder="Наименование" class="input block-form__input"
                       type="text"
                       maxlength="20"
                       v-model="name">
                <input placeholder="Цена" class="input block-form__input"
                       type="number"
                       max="9999999999999"
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
            <transition-group name="slide" type="animation" tag="p">
                <li class="block-form__array-item"
                    :key="item.id"
                    v-for="item of arrayList">
                    <p>{{ item.name }}</p>
                    <p>{{ item.prise }}</p>
                </li>
            </transition-group>
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
            this.arrayList.unshift({
                id: this.arrayList.length + 1,
                name: this.name,
                prise: this.prise,
            })
            this.name = null
            this.prise = null
        },
        delInData() {
            this.arrayList.shift()
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
        & p {
            width: 100%;
        }
        &__array {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-bottom: 10px;
            max-width: 374px;
            width: 100%;
        }
        &__array-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-right: 10px;
            padding-left: 10px;
            & > * {
                &:not(:last-child) {
                    margin-right: 15px;
                }
            }
        }
    }

    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in .5s linear;
        transition: opacity .5s;
    }
    .slide-leave-active {
        animation: slide-out 1s linear;
        transition: opacity .5s;
        opacity: 0;
        position: absolute;
    }
    .slide-move {
        transition: transform .5s;
    }
    @keyframes slide-in {
        from {
            transform: translateX(-300px);
        }
        to {
            transform: translateX(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-300px);
        }
    }
</style>
