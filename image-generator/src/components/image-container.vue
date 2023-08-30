<template>
    <div class=" d-flex justify-content-center border-1">
        Hello
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
    setup(props) {


        return {

        }
    }
})
</script>
