<template>
    <div class="h-60">

    </div>
    <h1 class="text-white w-full h-screen ml-20">
        <div class="text-3xl md:text-5xl sm:text-5xl font-semibold mb-5">Experience</div>
        <div class="flex h-48">
            <div class="">
                <div class="line-experience bg-gray-400">
                </div>
                <div class="circle-experience current">
                </div>
            </div>
            <div class="ml-4 flex flex-col justify-center h-full">
                <div class="text-xl">Tensei Philippines Inc.</div>
                <div class="text-md text-gray-400">Systems Engineer</div>
                <div class="text-l text-gray-400 italic">2017 ~ 2021</div>
            </div>
        </div>
    </h1>
</template>
<script setup>
</script>
<style scoped>
.line-experience {    
    position: relative;
    top:0px;
    left:0px;
    margin-left: 6px;
    width: 2px;
    height: 100%;
}

.circle-experience.current {
    background-color: hsla(160, 100%, 37%, 1);
}


.circle-experience:not(.current) {
    background-color: #0a192f;
}

.circle-experience {
    position: relative;
    top:-53%;
    left:0px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: white 2px solid;

}

</style>