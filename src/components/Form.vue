<template>
    <section class="block-form">
        <div class="block-form__group">
            <h3 class="title title--small">
                Введите обязательные расходы
            </h3>
            <ul class="block-form__list">
                <app-form-one-item :key="item.id" v-for="item of getFormOne">
                    {{ item }}
                </app-form-one-item>
                <button
                    class="btn-form btn-form--del"
                    title="Удалить форму"
                    @click="delForm">-
                </button>
                <button
                    class="btn-form btn-form--add"
                    title="Добавить форму"
                    @click="addForm">+
                </button>
            </ul>
            <button class="btn btn--small">Утвердить</button>
        </div>
        <div class="block-form__group">
            <h3 class="title title--samll">
                Введите необязательные расходы
            </h3>
            <ul class="block-form__list">
                <li class="block-form__item">
                    <input class="input block-form__input" type="text">
                    <input class="input block-form__input" type="text">
                    <input class="input block-form__input" type="text">
                </li>
            </ul>
            <button class="btn btn--small">Утвердить</button>
        </div>
        <div class="block-form__group">
            <h3 class="title title--small">
                Расчет дневного бюджета
            </h3>
            <button class="btn btn--small">Расчитать</button>
        </div>
        <div class="block-form__group">
            <h3 class="title title--small">
                Статьи возможного дохода
            </h3>
            <div class="block-form__list">
                <input placeholder="Введите статьи возможного дохода через запятую"
                       class="input block-form__input block-form__input--big"
                       type="text">
            </div>
        </div>
        <div class="block-form__group">
            <label for="check1">
                Есть ли накопления:
                <input type="checkbox" id="check1">
            </label>
        </div>
        <div class="block-form__group block-form__group--label">
            <label for="check2">
                Сумма
                <input placeholder="Введите число" type="text" id="check2">
            </label>
            <label for="check3">
                Процент
                <input placeholder="Введите число" type="text" id="check3">
            </label>
        </div>
        <button class="btn btn--big">Начать расчет</button>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FormOneItem from './FormOneItem.vue'

export default {
    name: 'Form',
    components: {
        'app-form-one-item': FormOneItem,
    },
    methods: {
        ...mapActions([
            'addForm',
            'delForm',
        ]),
    },
    computed: {
        ...mapGetters([
            'getFormOne',
        ]),
    },
};
</script>

<style lang="scss">
    input {
        border: 1px solid rgba(lightgray, .5);
        border-radius: 3px;
        &[type="text"] {
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
</style>

<style lang="scss" scoped>
    .block-form {
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 0 30px;
        width: 65%;
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
        &__list {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            margin-bottom: 5px;
            flex-direction: column;
        }
        &__item {
            display: flex;
            align-items: center;
        }
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
</style>
