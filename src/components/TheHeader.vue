<template>
  <header>
    <h2>enjoy with music</h2>

    <button id="premium" @click="$store.commit('showModal', 'premium')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        fill="white"
      >
        <path
          d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"
        />
      </svg>
      premium
    </button>

    <button id="login" @click="$store.commit('showModal', 'login')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="white"
      >
        <path
          d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
        />
      </svg>
      name
    </button>
  </header>
</template>

<style lang="scss" scoped>
svg {
  width: 1.5rem;
  height: 1.5rem;
}

header {
  display: flex;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  color: white;

  h2 {
    font-family: dancing;
    font-size: 3rem;
    text-transform: capitalize;
  }

  #premium {
    margin-left: auto;
  }

  #login {
    svg {
      outline: 0.2rem solid var(--navBackColor);
      border-radius: 5rem;
      background-color: var(--navBackColor);
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--silver);
    background-color: transparent;
    border: 0.1rem solid var(--silver);
    border-radius: 50rem;
    padding: 0.5rem 0.8rem;
    height: fit-content;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1rem;

    &:hover {
      --navBackColor: white;
      color: black;
      background: var(--silver);

      svg {
        fill: black;
      }
    }
  }
}
</style>