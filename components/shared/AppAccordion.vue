<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppAccordion",
  props: {
    accordionBehave: {
      type: Boolean,
      default: false,
    },
    timeline: {
      type: Boolean,
      default: false,
    },
    // eslint-disable-next-line vue/require-default-prop
    defaultOpen: {
      type: Number,
      required: false,
    },
  },
  provide() {
    return {
      accordion: {
        isTimeline: this.timeline,
        defaultOpen: this.defaultOpen,
      },
    };
  },
  methods: {
    handleCollapseAction(activeIndex) {
      this.$children.map((accordion) => {
        if (this.accordionBehave && activeIndex !== accordion.index) {
          accordion.close();
        }
      });
    },
  },
};
</script>

<style lang="scss">
.accordion-wrap {
  &.bordered {
    &:last-child {
      border-bottom-width: 1px;
      border-color: #e5e5e5;
    }
    .accordion {
      &__list-item {
        &:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border: none;
        }
      }
    }
    .accordion-title {
      align-items: center;
    }
  }
  &.is-timeline {
    position: relative;
    &:after {
      position: absolute;
      content: "";
      left: 0;
      top: 5px;
      height: 24px;
      width: 24px;
      border: 1px solid #e6e7e8;
      background: #fff;
      border-radius: 50%;
    }
    &:before {
      position: absolute;
      content: "";
      top: 5px;
      left: 12px;
      height: 100%;
      width: 1px;
      background: #e6e7e8;
    }
    &:last-child {
      &:before {
        content: none;
      }
    }
    .accordion-title {
      color: #131313;
    }
    &.is-open {
      &:after {
        border: none;
        background-color: #57b8e8;
      }
      .accordion-title {
        color: #57b8e8;
      }
    }
  }
}
@media (max-width: 768px) {
  .accordion-wrap {
    &.is-timeline {
      position: relative;
      &:after {
        width: 16px;
        height: 16px;
        top: 2px;
      }
      &:before {
        left: 8px;
        top: 2px;
      }
    }
    &.bordered {
      &:first-child {
        border: none;
      }
    }
  }
}
</style>