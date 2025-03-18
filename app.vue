<template>
  <div>
    <AboutSection />

    <ExperienceSection />

    <ProjectsSection />

    <PostsSection />

    <SectionsController />

    <LanguageSelector />
    <p>{{ $t("role") }}</p>
  </div>
</template>

<script setup>
import AboutSection from "@/components/AboutSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import PostsSection from "@/components/PostsSection.vue";
import SectionsController from "@/components/SectionsController.vue";
import LanguageSelector from "@/components/LanguageSelector.vue";
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #0e172a;
  color: white;
}
</style>
