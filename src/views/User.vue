<template>
  <div class="block">
    <div class="profile">
      <img
        src="https://i.scdn.co/image/ab6775700000ee85491b935efc2385031a2fa18e"
        alt=""
        class="profile-picture"
      />
      <h2 class="profile-name">Sjoerd</h2>
      <p class="profile-bio">shi daggoetje geswiped</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  width: 100vw;
  height: 35vh;
  background-color: var(--body-lighter);
  border-radius: 0 0 40px 40px;
  padding: 80px 0;

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .profile-picture {
      border-radius: 100%;
      height: 200px;
      width: 200px;
      object-fit: cover;
    }

    .profile-name {
      font-size: 34px;
    }

    .profile-bio {
      font-size: 24px;
    }
  }
}
</style>
