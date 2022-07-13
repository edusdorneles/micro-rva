<template>
    <div className="vue-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue logo" />

        <div className="vue-counter-container">
            <div className="vue-counter vue-counter-minus" @click="decrement">-</div>

            <div className="vue-counter vue-counter-value" @click="reset">
                {{ counter }}
            </div>

            <div className="vue-counter vue-counter-plus" @click="increment">+</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "App",
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
        reset() {
            this.counter = 0;
        }
    }
});
</script>

<style>
.vue-container {
    height: calc(100vh - 65px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.vue-container img {
    width: 180px;
    animation: rotation 5s infinite linear;
    margin-bottom: 45px;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
}

.vue-counter-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.vue-counter {
    border-radius: var(--border-radius);
    font-size: var(--font-size-large);
    font-weight: bold;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 600;
    margin: 0px 5px;
    cursor: pointer;
}

.vue-counter-minus {
    background-color: red;
}

.vue-counter-value {
    background-color: var(--primary-color);
}

.vue-counter-plus {
    background-color: green;
}
</style>
