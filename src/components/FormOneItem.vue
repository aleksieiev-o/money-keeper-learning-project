<template>
    <li class="block-form__item">
        <input placeholder="Наименование" class="input block-form__input"
               type="text"
               v-model="getFormOne.first">
        <input placeholder="Цена" class="input block-form__input"
               type="text"
               v-model="getFormOne.second">
    </li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'FormOneItem',
    computed: {
        ...mapGetters([
            'getFormOne',
        ]),
    },
};
</script>

<style lang="scss" scoped>
    .block-form__item {
        align-items: center;
        display: flex;
    }
</style>
