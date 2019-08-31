<template>
    <section class="block-form">
        <div class="block-form__overlay" v-if="!getStart"></div>
        <div class="block-form__group">
            <h3 class="title title--small">
                Введите обязательные расходы
            </h3>
            <app-form-one-item></app-form-one-item>
        </div>
        <div class="block-form__group">
            <h3 class="title title--samll">
                Введите необязательные расходы
            </h3>
            <ul class="block-form__list">
                <li class="block-form__item">
                    <input
                        class="input block-form__input"
                        type="text"
                        v-model="dopForm.dopFormOne">
                    <input
                        class="input block-form__input"
                        type="text"
                        v-model="dopForm.dopFormTwo">
                    <input
                        class="input block-form__input"
                        type="text"
                        v-model="dopForm.dopFormThree">
                </li>
            </ul>
            <button class="btn btn--small" @click="result">Утвердить</button>
        </div>
        <div class="block-form__group">
            <h3 class="title title--small">
                Расчет дневного бюджета
            </h3>
            <button class="btn btn--big" @click="greatResult">
                Расчитать
            </button>
        </div>
        <div class="block-form__group">
            <h3 class="title title--small">
                Статьи возможного дохода
            </h3>
            <div class="block-form__list block-form__list--three">
                <textarea
                    class="input block-form__input block-form__input--big"
                    placeholder="Ведите статьи возможного дохода через запятую"
                    name="dop"
                    rows="5"
                    v-model="message">
                </textarea>
            </div>
        </div>
        <div class="block-form__group">
            <label for="check1">
                Есть ли накопления:
                <input type="checkbox" id="check1" v-model="deposit">
            </label>
        </div>
        <div class="block-form__group block-form__group--label">
            <label for="check2">
                Сумма
                <input
                    placeholder="Введите число"
                    type="number"
                    id="check2"
                    v-model.number="amountDeposit.sum">
            </label>
            <label for="check3">
                Процент
                <input
                    placeholder="Введите число"
                    type="number"
                    id="check3"
                    v-model.number="amountDeposit.prosent">
            </label>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import FormOneItem from './FormOneItem.vue'

export default {
    name: 'Form',
    components: {
        'app-form-one-item': FormOneItem,
    },
    methods: {
        result() {
            this.$store.commit('setResultFive', this.dopForm)
            this.dopForm.dopFormOne = ''
            this.dopForm.dopFormTwo = ''
            this.dopForm.dopFormThree = ''
        },
        greatResult() {
            if (this.deposit) {
                this.$store.commit('setDeposit', this.amountDeposit)
            }
            this.$store.commit('setGreatResult', this.message)
        },
    },
    computed: {
        ...mapGetters(['getStart']),
    },
    data() {
        return {
            dopForm: {
                dopFormOne: '',
                dopFormTwo: '',
                dopFormThree: '',
            },
            message: '',
            deposit: false,
            amountDeposit: {
                sum: '',
                prosent: '',
            },
        }
    },
};
</script>

<style lang="scss">
    input {
        border: 1px solid rgba(lightgray, .5);
        border-radius: 3px;
        &[type="text"],
        &[type="number"] {
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
        }
        &::placeholder {
            opacity: .5;
        }
    }
    .block-form__input {
        &--big {
            width: 100%;
        }
    }
    textarea {
        border: 1px solid rgba(lightgray, .5);
        border-radius: 3px;
        background-color: #fff;
        box-shadow: 0 2.5px 10px 0 rgba(1,0,42,.1);
        padding: 3px;
        margin: 5px;
        transition: all linear .3s;
        resize: none;
        overflow-y: auto;
        &:focus {
            outline: rgba(lightgray, .9);
            border: 1px solid rgba(#999, 1);
        }
        &::placeholder {
            opacity: .5;
        }
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        cursor: pointer;
        font-weight: 700;
        color: #fff;
        border: none;
        transition: all linear .3s;
        &:focus {
            outline: none;
        }
    }
    .btn {
        height: 35px;
        margin: 0 auto;
        background-image: linear-gradient(336deg, #ffbd75, #ff964b), linear-gradient(#fff, #fff);
        box-shadow: 0 2.5px 10px 0 rgba(1,0,42,.1);
        padding: 0 20px;
        &:focus {
            border: 1px solid #ff964b;
        }
        &:hover {
            background-image: linear-gradient(336deg, #ff964b, #ff964b),
                linear-gradient(#fff, #fff);
        }
        &--big {
            height: 45px;
            padding: 0 30px;
            text-transform: uppercase;
        }
    }
    .block-form {
        &__list {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-bottom: 5px;
            flex-direction: column;
            &--first,
            &--three {
                max-width: 565px;
            }
        }
        &__item {
            display: flex;
            align-items: center;
        }
    }
</style>

<style lang="scss" scoped>
    .block-form {
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 0 30px;
        width: 65%;
        height: 100%;
        overflow-y: auto;
        position: relative;
        &__overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 10;
        }
        &__group {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-bottom: 10px;
            &--label {
                flex-direction: row;
                justify-content: center;
                margin-bottom: 20px;
            }
        }
    }
</style>
