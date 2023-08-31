<template>
    <Layout>
        <template v-slot:title>
            Search an Image
        </template>
        <template v-slot:content>
            <SearchImage @imagesLoaded="ShowImages"></SearchImage>
            <ImageContainer v-if="dalleResponse.data?.length > 0" :dalleResponse="dalleResponse"></ImageContainer>
        </template>
    </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layout.vue";
import SearchImage from "@/components/search-image.vue";
import ImageContainer from "@/components/image-container.vue";

import { defineComponent, ref } from "vue";
import { DalleDto } from "@/src/types/dalleDto";

export default defineComponent({
    components: {
        Layout,
        SearchImage,
        ImageContainer
    },
    setup() {
        const dalleResponse = ref({} as DalleDto)
        function ShowImages(dalle: DalleDto) {
            dalleResponse.value = dalle;
        }

        return {
            dalleResponse,
            ShowImages
        }
    }
})
</script>

