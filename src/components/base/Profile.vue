<template>
  <div class="profile">
    <img
      src="https://i.scdn.co/image/ab6775700000ee85491b935efc2385031a2fa18e"
      class="profile-picture"
      alt
    />
    <div class="profile-info">
      <h2 class="profile-name">Sjoerd</h2>
      <p class="profile-bio">shi daggoetje geswiped</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
}

.profile-info {
  margin-top: var(--gap-large);
  text-align: center;

  .profile-name {
    font-size: 2rem;
  }

  .profile-bio {
    font-size: 1.5rem;
  }
}
</style>
