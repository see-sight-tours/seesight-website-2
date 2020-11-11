<template>
  <div v-if="questions">
    <div v-for="(item, index) in questionsByGeneral" :key="index" class="w-3/4 mt-50">
        <p class="font-bold text-desktop-h3 mb-10">
          {{ item.question }}{{item.question[item.question.length - 1] !== "?" ? "?" : ""}}</p>
        <p class="mb-20">{{ item.answer }}</p>
    </div>
  </div>
</template>

<script>
import AppAccordion from '@/components/shared/AppAccordion'
import AppAccordionItem from '@/components/shared/AppAccordionItem'
import { questions } from '@/api/queries/faq'
export default {
  name: 'FAQ',
  components: {
    AppAccordion,
    AppAccordionItem
  },
  computed: {
    questionsByGeneral() {
      return this.questions.filter(question => question.general === true)
    }
  },
  apollo: {
    questions: {
      prefetch: true,
      query: questions
    }
  }
}
</script>