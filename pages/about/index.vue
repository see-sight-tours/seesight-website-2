<template>
  <div>
    <hero
      :title="aboutPage && aboutPage.header"
      :text="aboutPage && aboutPage.imageSubtitle"
      :image="aboutPage && aboutPage.imageHeader"
      custom-class-wrap="pt-48 md:pt-104 pb-64 md:pb-144"
    />

    <div class="flex flex-col">
      <about-us-card
        v-for="(aboutUsCardItem, index) in aboutUsCardItems"
        :key="index"
        :index="index"
        :about-us-card-item="aboutUsCardItem"
      />
    </div>

    <div class="bg-blue-200 pt-32 md:pt-88 pb-40 md:pb-96">
      <div
        class="max-w-1180 w-full px-16 md:px-30 mx-auto flex flex-wrap lg:flex-no-wrap"
      >
        <div class="why-us-card-wrap">
          <div>
            <h2
              class="text-white text-mobile-h1 sm:text-desktop-h1 leading-4sm sm:leading-3sm font-bold mb-0"
            >
              Why Us
            </h2>
          </div>
          <div v-for="(item, index) in whyUs" :key="index">
            <h3
              class="text-white text-mobile-h2 sm:text-desktop-h2 leading-2sm font-bold mb-8 sm:mb-16"
            >
              {{ item.title }}
            </h3>
            <p
              class="text-white text-mobile-h3 sm:text-desktop-h3 leading-3sm sm:leading-5sm"
            >
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="dasda"
      class="max-w-1220 w-full mx-auto px-16 md:px-30 py-40 md:py-64"
    >
      <div class="flex items-center flex-col-reverse md:flex-row">
        <div class="max-w-full md:max-w-600 w-full mr-0 md:mr-88">
          <div class="h-152 md:h-312">
            <img
              :src="`${imageUrl}${getSiteInfo.aboutUsBarImage.desktopUrl.trim()}`"
              alt="img"
              class="h-full w-full object-cover rounded-8"
            />
          </div>
          <div
            class="max-w-195 sm:max-w-full w-full ml-auto text-right mt-16 md:mt-24 flex items-center"
          >
            <span
              class="text-mobile-body sm:text-desktop-h4 leading-1sm sm:leading-normal text-grey-40"
            >
              <span
                class="icon-PIN text-mobile-body sm:text-desktop-h4 mr-7 sm:mr-8 text-secondary"
              />
              {{ getSiteInfo.aboutUsBarImageSubtitle }}
            </span>
          </div>
        </div>
        <div class="max-w-full md:max-w-440 w-full mb-40 md:mb-0">
          <h3
            class="text-mobile-h1 md:text-desktop-h1 leading-4sm md:leading-3sm text-terciary font-bold mb-24 md:mb-16"
          >
            {{ getSiteInfo && getSiteInfo.aboutUsBarHeader }}
          </h3>
          <p
            class="text-terciary text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm mb-24"
          >
            {{ getSiteInfo && getSiteInfo.aboutUsBarText }}
          </p>
          <app-button
            type="default"
            class="text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm px-46 py-1050 md:py-12 rounded-8"
          >
            {{ getSiteInfo && getSiteInfo.aboutUsBarButtonText }}
          </app-button>
        </div>
      </div>
    </div>

    <!-- Subscribe newsletter -->
    <!-- <subscribe-newsletter /> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import Hero from "@/components/pages/Hero";
import AboutUsCard from "@/components/AboutUsCard";
import AppButton from "@/components/shared/AppButton";
import { aboutPage } from "@/api/queries/about";
// import SubscribeNewsletter from "@/components/pages/SubscribeNewsletter";
export default {
  name: "AboutUsPage",
  components: { Hero, AboutUsCard, AppButton },
  apollo: {
    aboutPage: {
      prefetch: true,
      query: aboutPage,
    },
  },
  //   async asyncData({ app }) {
  //     try {
  //       const { data } = await app.apolloProvider.defaultClient.query({
  //         query: getSiteInfoAboutUsPage,
  //       });
  //       return { ...data };
  //     } catch (e) {
  //       throw new Error(e);
  //     }
  //   },
  data() {
    return {
      aboutUsCardItems: [
        {
          desc:
            "See Sight Tours provides intimate small-group tours of popular destinations across North America. Founded in Niagara Falls, Canada in 2006, See Sight Tours has developed a wealth of experience delivering uniquely intimate and immersive tour experiences. Our tour guides take pride in their personal expertise in showcasing the hidden beauty of the local areas where we operate and are determined to create lasting impressions on our guests from around the world.",
          img:
            "https://images.unsplash.com/photo-1463695970743-ae65cca05743?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          locationTitle: "Maid of the Mist in",
          locationSubtitle: "Niagara Falls",
        },
        {
          title: "How it all started",
          desc:
            "Daud Grewal, the company’s Founder was born and raised in Niagara Falls. He started See Sight Tours with the help of his beloved mother while still in high school. He came up with the idea while working as a parking lot attendant at a local tourist attraction. While working, he would often see big sightseeing buses crammed with tourists and he was sure there was a much more comfortable and personal way to provide sightseeing tours. His idea was simple - he would give personable, private tour experiences using his mother’s minivan.",
          img:
            "https://res.cloudinary.com/see-sight-tours/image/upload/t_mobile/v1582036499/happy-group-tour-guides.jpg",
          locationTitle: "Niagara Falls",
          locationSubtitle: "See Sight Tours Tour Guides",
        },
        {
          desc:
            "Knowing little about business, Daud quickly made up an 18-point plan on the back of a parking lot sheet. He made a makeshift booth and stood outside with a handmade sign offering his tours but had trouble selling them. After weeks with no business, he was ready to give up and get another job but on July 1st, 2006 - he made his first sale. Today, the company has taken this simple idea and expanded to over a dozen (and counting) different cities across Canada and USA. The tours are still personable, still small-groups and still use vans. ",
          img:
            "https://res.cloudinary.com/see-sight-tours/image/upload/t_mobile/v1581439795/See-Sight-Tours-Van.png",
          locationTitle: "See Sight Tours Van in",
          locationSubtitle: "Niagara Falls",
        },
      ],
      contentArea: {
        title: "This is what makes us special",
        subTitle:
          "Our tour guides are super friendly, energetic and happy to meet and guide guests from around the world.",
        img:
          "https://images.unsplash.com/photo-1463695970743-ae65cca05743?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        locationTitle: "Downtown  with Chris",
        locationSubtitle: "Halifax",
      },
      whyUs: [
        {
          title: "Small-Group Tours",
          text:
            "Small-groups create connections and allow us to be flexible and go places where large groups don’t. No crowded buses, no microphones. ",
        },
        {
          title: "Authentic, local experiences",
          text:
            "We believe in supporting the communities we live and operate in. By hiring locally, we create jobs to support the local economy and ensure guests receive an authentic experience. ",
        },
        {
          title: "Friendly, personable guides",
          text:
            "Our guides aim to create personal connections with each guest we serve. We truly care about delivering the best customer experience possible. ",
        },
      ],
    };
  },
  computed: {
    ...mapState({ mediaUrl: (state) => state.mediaUrl }),
    imageUrl() {
      if (process.browser && window.innerWidth <= 768) {
        return `${this.mediaUrl}t_mobile/`;
      } else {
        return `${this.mediaUrl}t_desktop/`;
      }
    },
  },
  head() {
    return {
      title: this.page ? this.page.title : "About us",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.page ? this.page.metaDescription : "",
        },
      ],
      link: [{ rel: "canonical", href: "https://seesight-tours.com/about" }],
    };
  },
};
</script>

<style lang="scss" scoped>
.why-us-card-wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 48px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 48px;
  }
  @media (max-width: 576px) {
    grid-row-gap: 40px;
  }
}
</style>