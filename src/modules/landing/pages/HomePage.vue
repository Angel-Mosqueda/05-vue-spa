<template>
    <!-- Main -->
    <main class="flex-1 flex items-center justify-center py-6">
        <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">
                Bienvenido al sitio web
            </h1>
            <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                Sigo practicando para ser mejor cada dia.
            </p>
            <p>
                Counter: {{ counter }}
            </p>
            <button @click="counter++">+1</button>
        </div>
    </main>
    <!-- Fin Main -->
</template>

<script lang="ts" src="./HomePage.ts">

</script>