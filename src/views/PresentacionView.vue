<template>
  <section id="presentacion" class="h-full flex flex-row justify-end overflow-hidden relative p-30">
    <img src="@/assets/images/png.png" alt="" class="absolute -left-85 -bottom-10" />
    <div class="info flex flex-col p-15 w-150 gap-10">
      <h1 class="text-5xl font-bold">Adrián Ibáñez Moya</h1>
      <p>
        anim laborum sint non laboris exercitation et culpa commodo officia sint voluptate sit magna
        in duis aute velit est sit ipsum fugiat ex commodo incididunt aute ipsum nulla magna aliquip
        exercitation deserunt adipisicing dolore exercitation ut occaecat voluptate ad reprehenderit
        aliquip cupidatat minim quis aute nisi amet labore deserunt enim
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="sass" scoped>
@import "@/assets/styles/neumorphic.sass"

.info
  @include outset
</style>
