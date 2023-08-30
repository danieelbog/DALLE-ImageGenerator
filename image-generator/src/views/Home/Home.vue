<template>
    <Background>
        <template v-slot:content>
            <SearchImage></SearchImage>
            <ImageContainer></ImageContainer>
        </template>
    </Background>
</template>

<script lang="ts">
import Background from "@/components/background.vue";
import SearchImage from "@/components/search-image.vue";
import ImageContainer from "@/components/image-container.vue";

import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Background,
        SearchImage,
        ImageContainer
    },
    setup() {
        return {

        }
    }
})
</script>

