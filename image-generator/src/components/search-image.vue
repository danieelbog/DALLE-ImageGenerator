<template>
    <div class="d-flex justify-content-center">
        <div class="input-group w-50">
            <input v-model="searchText" type="text" class="form-control" placeholder="ex: Arasaka Weapons">
            <div class="input-group-append">
                <button @click="searchImages" class="btn btn-light" type="button">
                    <span class="material-icons-outlined">
                        search
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { API_KEY } from "../assets/keys/key";
import { api } from "@/api/index"
import { DalleDto } from '../types/dalleDto';

export default defineComponent({
    setup(props, ctx) {
        const searchText = ref("");
        async function searchImages() {
            try {
                var url = "https://api.openai.com/v1/images/generations";
                var body = JSON.stringify({
                    "prompt": searchText.value,
                    "n": 4,
                    "size": "1024x1024"
                })
                var headers = {
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                }

                const response = await api.post<DalleDto>(url, body, { headers })
                if (response.data)
                    ctx.emit("imagesLoaded", response.data);
            } catch (error) {
                console.log("error", error)
            }
        }

        return {
            searchText,
            searchImages
        }
    }
})

</script>

<style>
@font-face {
    font-family: CyberpunkFont;
    src: url("../assets/fonts/TechnoCharmDemoVersionRegular-ALaZm.otf");
    font-weight: bold;
}

h2 {
    font-family: CyberpunkFont;
}

.form-control {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
    border-radius: 0 !important;
}

.btn-light {
    border-radius: 0 !important;
}
</style>