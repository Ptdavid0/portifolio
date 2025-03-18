<template>
  <div>
    <button @click="setLocale('en')">EN</button>
    <button @click="setLocale('es')">ES</button>
  </div>
</template>

<script setup>
const { setLocale } = useI18n();
</script>

<style lang="scss" scoped></style>
