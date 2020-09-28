<template>
  <div
    class="accordion-wrap"
    :class="[
      { 'is-timeline': accordion.isTimeline },
      { 'is-open': isOpen && accordion.isTimeline },
    ]"
  >
    <div :class="customClass">
      <!-- Title -->
      <div
        class="accordion-title cursor-pointer flex justify-between items-start"
        @click="toggle"
      >
        <slot name="title" />

        <!-- collaps-icon -->
        <span
          class="icon-BACK text-secondary font-bold text-mobile-body"
          :class="[{ 'is-open-icon': isOpen }, collapseIcon]"
        />
      </div>

      <!-- Content -->
      <slot v-if="!isOpen" name="caption" />
      <slot v-else />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAccordionItem",
  props: {
    collapseIcon: {
      type: String,
      default: "",
    },
    defaultOpen: {
      type: Boolean,
      required: false,
    },
    index: {
      type: Number,
      required: true,
    },
    customClass: {
      type: String,
      default: "",
    },
  },
  inject: ["accordion"],
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    this.isOpen = this.accordion.defaultOpen === this.index;
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      this.$parent.handleCollapseAction(this.index);
    },
    close() {
      this.isOpen = false;
    },
    open() {
      this.isOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-BACK {
  transform: rotate(270deg);
  transition: 0.5s ease;
  &:before {
    font-weight: bold;
  }
}
.is-open-icon {
  transform: rotate(90deg);
}
@media (max-width: 768px) {
  .icon-BACK {
    font-size: 9px;
  }
}
</style>