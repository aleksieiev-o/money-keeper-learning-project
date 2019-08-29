<template>
    <section class="wrapper">
        <header class="header">
            <h1 class="title">Расчет дневного бюджета</h1>
        </header>
        <main class="main">
            <app-form></app-form>
            <component :is="getRightComponents"></component>
        </main>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Form from './components/Form.vue'
import Result from './components/Result.vue'
import Question from './components/Question.vue'

export default {
    name: 'App',
    components: {
        'app-form': Form,
        'app-result': Result,
        'app-question': Question,
    },
    computed: {
        ...mapGetters([
            'getRightComponents',
        ]),
    },
    data() {
        return {
        }
    },
};
</script>

<style lang="scss">
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
    li {
        list-style: none;
    }
    .wrapper {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #faf8f5;
        max-width: 1200px;
        margin: 0 auto;
    }
    .header {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .main {
        align-items: flex-start;
        display: flex;
        justify-content: center;
        width: 100%;
        height: calc(100% - 80px);
    }
    .title {
        padding: 10px;
        text-align: center;
        color: #222;
    }
</style>
