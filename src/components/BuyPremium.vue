<template>
  <div id="back" @click="$store.commit('showModal', null)">
    <div v-if="$store.state.PremiumModal == 'premium'" id="modal">
      <div id="card">
        <img src="../assets/img/silverCoin.png" alt="silverCoin" />
        <h2>get premium and enjoy with unlimited music</h2>
      </div>

      <div id="benefits">
        <h3>ad-free music listening</h3>
        <h3>unlimited downloads</h3>
        <h3>free for 1 month</h3>
        <h3>Only $9.99/month</h3>
      </div>

      <button>get started</button>
    </div>

    <div v-else id="modal">
      <h2>Log In</h2>
      <h2>coming soon ...</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#back {
  position: absolute;
  background-color: rgba(51, 51, 51, 0.8);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  #modal {
    background: var(--backgroundColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    height: fit-content;
    border-radius: 1rem;
    padding: 2rem;

    #card {
      font-family: dancing;
      display: flex;
      align-items: center;
      text-align: center;
      font-size: 2rem;
      text-transform: capitalize;

      img {
        width: 30%;
      }
    }

    #benefits {
      display: flex;
      text-align: center;
      gap: 0.5rem;
      padding: 3rem 0;

      h3 {
        width: 25%;
        border: 0.1rem solid white;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        text-transform: capitalize;
        cursor: default;

        &:hover {
          box-shadow: 0 0 1rem black;
        }
      }
    }

    button {
      color: white;
      background: var(--backgroundColor);
      text-transform: uppercase;
      font-size: 2rem;
      border: none;
      border-radius: 5rem;
      padding: 0.5rem 1rem;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 1rem white;
        transform: scale(1.05);
      }
    }
  }
}
</style>