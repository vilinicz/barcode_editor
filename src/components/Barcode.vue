<template>
  <div class="Barcode">
    <template v-if="digits.length">
      <div
        v-for="(d, i) in digits"
        :key="`${d}_${i}`"
        class="bar"
        :style="barStyle(d)"
      >
        <span class="value">{{ d }}</span>
      </div>
      <div
        class="bar checksum"
        :style="barStyle(checksum)"
      >
        <span class="value">{{ checksum }}</span>
      </div>
    </template>

    <div
      v-else
      class="hint"
    >
      No data for Barcode
    </div>
  </div>
</template>

<script>
export default {
  props: {
    digits: {
      type: Array,
      default: () => [],
    },
    checksum: {
      type: Number,
      default: null,
    },
  },

  methods: {
    barStyle(d) {
      let width;
      let height;

      if (d < 4) {
        width = 4;
      } else if (d < 8) {
        width = 10;
      } else {
        width = 17;
      }

      if ([0, 4, 8].includes(d)) {
        height = 4;
      } else if ([1, 5, 9].includes(d)) {
        height = 8;
      } else if ([2, 6].includes(d)) {
        height = 12;
      } else {
        height = 16;
      }

      return {
        height: `${height * 5}%`,
        width: `${width}%`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.Barcode {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: var(--gray-extra-ligth);

  .bar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5%;
    border-radius: 2px;
    font-size: 0.8rem;
    font-variant-numeric: tabular-nums;
    color: #fff;
    background-color: var(--color-primary);

    &.checksum {
      background-color: var(--color-secondary);
    }
  }

  .hint {
    color: var(--gray);
  }

  @media (max-width: 800px) {
    .bar > .value {
      display: none;
    }
  }
}
</style>
