<template>
  <div
    id="app"
    class="App"
  >
    <div class="editor">
      <div class="code">
        <label for="code"> Code </label>
        <input
          id="code"
          v-model.trim="code"
          placeholder="Enter up to 19 digits"
          type="text"
          maxlength="19"
          class="value"
          @keypress="rejectNonDigits"
          @paste.prevent="validateOnPaste"
        >
      </div>

      <div class="checksum">
        <label> CS </label>
        <div
          class="value"
          v-text="checksum"
        />
      </div>

      <div class="colors">
        <label for="primary">
          <input
            id="primary"
            v-model="colorPrimary"
            type="color"
          > Primary
        </label>

        <label for="secondary">
          <input
            id="secondary"
            v-model="colorSecondary"
            type="color"
          > Secondary
        </label>
      </div>
    </div>

    <Barcode
      :digits="digitsArray"
      :checksum="checksum"
      :style="{
        '--color-primary': colorPrimary,
        '--color-secondary': colorSecondary
      }"
    />

    <!--a
      href="https://github.com/vilinicz/barcode_editor"
      class="link-to-github"
    >
      Source on Github
    </a-->
  </div>
</template>

<script>
import Barcode from './components/Barcode.vue';

export default {
  name: 'App',
  components: { Barcode },

  data() {
    return {
      code: '0123456789',

      // Primary and Secondary colors for Barcode component
      colorPrimary: '#409EFF',
      colorSecondary: '#E6A23C',
    };
  },

  computed: {
    // Convert code string to array of digits
    digitsArray() {
      return Array.from(String(this.code.replace(/\s/g, '')), Number);
    },

    // Calculate checksum
    checksum() {
      if (!this.code) return null;

      const evenSum = this.digitsArray
        .filter((v, i) => i % 2 !== 0)
        .reduce((a, b) => a + b, 0);
      const oddSum = this.digitsArray
        .filter((v, i) => i % 2 === 0)
        .reduce((a, b) => a + b, 0);

      const remainder = (evenSum + oddSum * 3) % 10;
      return remainder === 0 ? 0 : 10 - remainder;
    },
  },

  methods: {
    // Check if pressed key is digit
    rejectNonDigits(e) {
      if (!e.key.match(/\d/)) {
        e.preventDefault();
      }
    },

    // Prevent and validate text on paste event
    validateOnPaste(e) {
      const copied = e.clipboardData.getData('text');
      if (copied.match(/\d/)) {
        this.code = copied;
      }
    },
  },
};
</script>

<style lang="scss">
.App {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;

  .link-to-github {
    position: fixed;
    z-index: 1;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    background-color: rgba(#fff, 0.9);
    color: var(--blue);
    bottom: 1rem;
    right: 1rem;
    box-shadow: 1px 1px 2px rgba(#000, 0.075);
  }

  .editor {
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    border-bottom: 1px solid var(--gray-lightest);

    .code,
    .checksum,
    .colors {
      padding: 1rem;
    }

    .code {
      flex: 1 0 auto;
    }

    .checksum,
    .colors {
      border-left: 1px solid var(--gray-extra-ligth);
    }

    .checksum {
      text-align: center;
    }

    .colors {
      flex: 0 0 auto;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
    }

    .value {
      font-size: 1.5rem;
      letter-spacing: 2px;
      width: 100%;
    }

    @media (min-width: 800px) {
      .value {
        font-size: 2rem;
      }
    }
  }
}
</style>
