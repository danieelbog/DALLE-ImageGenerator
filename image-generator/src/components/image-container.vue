<template>
    <div class="wrapper p-5">
        <div v-for="image in dalleResponse.data" class="card m-3">
            <img :src="image.url" class="img-fluid" alt="Responsive image">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { DalleDto } from "@/types/dalleDto";

export default defineComponent({
    props: {
        dalleResponse: {
            type: Object as PropType<DalleDto>,
            required: true,
        }
    },
    setup() {
        return {

        }
    }
})
</script>

<style>
.wrapper {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-gap: 5px;
}

@property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
}

.card {
    background: #191c29;
    position: relative;
    border-radius: 6px;
    color: rgb(88 199 250 / 0%);
    cursor: pointer;
}

.card:hover {
    color: rgb(88 199 250 / 100%);
    transition: color 1s;
}

.card:hover:before,
.card:hover:after {
    animation: none;
    opacity: 0;
}

.card::before {
    content: "";
    width: 102%;
    height: 102%;
    border-radius: 8px;
    background-image: linear-gradient(var(--rotate), #5dffbc, #3c67e3 43%, #c20061);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -1%;
    animation: spin 2.5s linear infinite;
}

.card::after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
    transition: opacity .5s;
    animation: spin 2.5s linear infinite;
}

@keyframes spin {
    0% {
        --rotate: 0deg;
    }

    100% {
        --rotate: 360deg;
    }
}
</style>