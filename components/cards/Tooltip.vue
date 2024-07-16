<template>
  <div class="mt-20">
    <p href="#" class="group relative inline-block text-blue-500 underline hover:text-red-500 duration-300">
        Link with top tooltip
        <!-- Tooltip text here -->
        <span
            class="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-48 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">This
            is some extra useful information</span>
    </p>
  </div>
</template>
