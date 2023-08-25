<template>
  <nav
    class="nav nav flex align-items-center justify-content-between container"
  >
    <div class="logo">
      <img
        src="https://static.vecteezy.com/system/resources/previews/013/222/468/original/people-finder-logo-magnifying-glass-logo-loupe-and-people-logo-design-icon-vector.jpg"
        alt="logo"
      />
      <span>Welcome</span>
    </div>
    <div>Employee Finder</div>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.nav {
  min-height: 80px;
  background-color: rgb(211, 224, 28);
  position: sticky;
  top: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

img {
  width: 40px;
  height: 40px;
}
</style>
