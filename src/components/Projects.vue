<template>
    <div class="h-60"></div>
    <div class="text-white w-full h-fit ml-20">
        <div class="text-3xl sm:text-5xl md:text-5xl font-semibold mb-5">Projects</div>

        <div class="grid md:grid-cols-2 sm:grid-cols-1 sm:my-[100px] md:my-[200px]">
            <div class="">
                <div class="text-2xl mb-3">iBMS</div>
                <div class="text-lg mr-10 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, 
                    nisi dicta veniam officiis unde aliquid distinctio inventore velit eum, expedita 
                    corporis, magnam et quae quisquam hic ab beatae in minima? Lorem ipsum dolor sit 
                    amet consectetur adipisicing elit. Optio ea nobis illum, quis quibusdam molestias
                    nulla eligendi, corrupti consequatur dolor quo ipsum dicta quaerat dolores sed, 
                    tenetur blanditiis aliquid eum.</div>
            </div>
            <div class="flex justify-center">
                <div class="relative sm:mt-10 lg:mt-0">
                    <div class="bg-project clip-circle flex justify-center lg:visible md:visible sm:invisible">
                        <img src="@/assets/logo.svg">
                    </div>
                    <img class="project-thumbnail" src="@/assets/logo.svg" width="300px">
                </div>
            </div>
        </div>
    </div>
    <div class="h-60"></div>
</template>
<script setup>
</script>
<style scoped>


.clip-circle {
    clip-path: circle(200px at center);
    transition: 300ms;
}


.bg-project {
    position: absolute;
    top:-160px;
    left: -125px;
    height: 550px;
    width: 550px;
    z-index: 2;
    opacity: 0.4;
}

.project-thumbnail {
    opacity: .4;
}

</style>
