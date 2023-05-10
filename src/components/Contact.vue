<template>
    <div class="text-white h-[600px] w-full ml-2 sm:ml-20 md:ml-20 lg:ml-20">
        <div class="text-3xl sm:text-5xl md:text-5xl font-semibold mb-5">Contact me</div>
        <div class="rounded flex justify-center">
            <div class="py-8 w-10/12 lg:w-1/2 sm:w-10/12">
                <div class="my-5">
                    <label class="text-2xl  font-semibold block mb-2" for="email">Email</label>
                    <input class="text-xl pl-2 py-2 shadow border rounded w-full bg-transparent leading-tight focus:border-vueGreen focus:outline-none focus:shadow-outline transition transition-300" type="text" id="email" placeholder="Email"/>
                </div>
                <div class="my-5">
                    <label class="text-2xl  font-semibold block mb-2" for="email">Message</label>
                    <textarea class="text-xl pl-2 py-2 shadow border rounded w-full bg-transparent leading-tight focus:border-vueGreen focus:outline-none focus:shadow-outline transition transition-300" maxlength="1" type="input" rows="6" id="message" placeholder="Message"/>
                </div>
                <div class="flex justify-end">
                    <button class="rounded border text-xl px-5 py-2 border-white hover:border-vueGreen hover:bg-vueGreen active:bg-green-700 font-semibold transition transition-300">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
textarea {
  resize: none;
}
</style>