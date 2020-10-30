<template>
  <div>
    <!-- Hero -->
    <hero
      :title="contactPage && contactPage.header"
      :text="contactPage && contactPage.subText"
      :image="contactPage && contactPage.header_image"
      :location="' '"
      custom-class-wrap="pt-24 md:pt-104 pb-24 md:pb-48"
      custom-class-location="mt-56 md:mt-80"
    />

    <div
      class="max-w-1180 w-full px-16 md:px-30 pt-24 pb-36 md:py-64 mx-auto flex flex-col md:flex-row items-center"
    >
      <div class="max-w-full md:max-w-1/2 w-full mb-28 md:mb-0">
        <img
          src="@/static/img/contact-us.png"
          alt="contact-us"
          class="max-w-175 sm:max-w-496 w-full h-auto"
        />
      </div>
      <div class="max-w-full md:max-w-1/2 w-full pl-0 md:pl-40 lg:pl-80">
        <h2
          class="flex flex-col text-terciary text-mobile-h2 md:text-desktop-h1 leading-2sm md:leading-3sm font-bold mb-24 md:mb-16"
        >
          <span>Call Anytime from:</span>
          <span>8am – 4pm</span>
          <span>Monday - Friday</span>
        </h2>
        <div
          class="text-grey-40 md:text-secondary text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm mb-24 md:mb-16"
        >
          <p class="md:mb-25">
            Toll Free:&nbsp;<span class="text-terciary md:text-grey-400"
              >1-888-961-6584</span
            >
          </p>
          <p class="md:mb-25">
            Local:&nbsp;<span class="text-terciary md:ext-grey-400"
              >1-289-271-9767</span
            >
          </p>
          <p>
            Fax:&nbsp;<span class="text-terciary md:text-grey-400"
              >1-888-908-6056</span
            >
          </p>
        </div>
        <div>
          <a
            href="mailto:info@seesight-tours.com"
            class="text-secondary text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm font-bold"
          >
            info@seesight-tours.com
          </a>
        </div>
      </div>
    </div>

    <div class="bg-grey-700 py-40 md:py-64">
      <div class="max-w-640 w-full px-16 md:px-40 mx-auto">
        <h2
          class="text-terciary text-mobile-h2 md:text-desktop-h1 leading-2sm md:leading-3sm font-bold mb-8 md:mb-16 text-center"
        >
          Send us a message
        </h2>
        <h4
          class="text-terciary text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm mb-40 md:mb-56 text-center"
        >
          We’d love to hear from you
        </h4>
        <div
          class="text-grey-400 text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm"
        >
          <input
            type="text"
            placeholder="Your Name"
            class="contact-us__input border-b border-grey-400 w-full pl-8 md:pl-0 pr-8 pb-12 md:pb-15 mb-22 md:mb-31"
          />
          <input
            type="text"
            placeholder="Your e-mail"
            class="contact-us__input border-b border-grey-400 w-full pl-8 md:pl-0 pr-8 pb-12 md:pb-15 mb-22 md:mb-31"
          />
          <input
            type="text"
            placeholder="Message"
            class="contact-us__input border-b border-grey-400 w-full pl-8 md:pl-0 pr-8 pb-12 md:pb-15 mb-39"
          />
        </div>
        <app-button
          type="default"
          class="flex text-mobile-h2 md:text-desktop-h3 leading-2sm md:leading-5sm px-32 md:px-70 py-1050 md:py-12 ml-0 md:ml-auto rounded-8"
        >
          Send Message
        </app-button>
      </div>
    </div>

    <div class="flex flex-col w-full">
      <div class="flex w-full flex-col md:flex-row">
        <div
          class="flex flex-col items-center justify-center bg-primary max-w-full md:max-w-1/2 w-full py-32 md:py-72 pl-40 pr-20 md:px-30"
        >
          <h2
            class="max-w-200 md:max-w-320 w-full text-white text-mobile-h2 md:text-desktop-h2 leading-2sm font-bold mb-16 md:mb-24 mr-auto md:mr-0"
          >
            Where are we Canada
          </h2>
          <p
            class="max-w-full md:max-w-320 w-full flex flex-col text-white text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm"
          >
            <span>5779 Desson Avenue</span>
            <span>Niagara Falls</span>
            <span>Ontario, Canada L2G 3T5</span>
          </p>
        </div>
        <div class="max-w-full md:max-w-1/2 w-full">
          Google map
          <GmapMap
            :center="center"
            :zoom="8"
            map-type-id="terrain"
            class="w-full h-200 md:h-full"
          >
            <GmapMarker
              v-for="(m, index) in markers"
              :key="index"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center = m.position"
            />
          </GmapMap>
        </div>
      </div>
      <div class="flex w-full flex-col-reverse md:flex-row">
        <div class="max-w-full md:max-w-1/2 w-full">
          Google map
          <GmapMap
            :center="center"
            :zoom="8"
            map-type-id="terrain"
            class="w-full h-200 md:h-full"
          >
            <GmapMarker
              v-for="(m, index) in markers"
              :key="index"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center = m.position"
            />
          </GmapMap>
        </div>
        <div
          class="flex flex-col items-center bg-primary max-w-full md:max-w-1/2 w-full py-32 md:py-72 pr-40 pl-20 md:px-30 text-right md:text-left"
        >
          <h2
            class="max-w-200 md:max-w-320 w-full text-white text-mobile-h2 md:text-desktop-h2 leading-2sm font-bold mb-16 md:mb-24 ml-auto md:ml-0"
          >
            Where are we USA
          </h2>
          <p
            class="max-w-full md:max-w-320 w-full flex flex-col text-white text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm"
          >
            <span>486 19th street</span>
            <span>Niagara Falls</span>
            <span>Buffalo, USA NY 14303</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { contactPage } from "@/api/queries/contact";
import Hero from "@/components/pages/Hero";
import AppButton from "@/components/shared/AppButton";
export default {
  name: "ContactUsPage",
  components: {
    Hero,
    AppButton,
  },
  apollo: {
    contactPage: {
      prefetch: true,
      query: contactPage,
    },
  },
  data() {
    return {
      heroData: {
        title: "Contact Us",
        text: "We’s love to hear from you!",
        location: "Mount Royal, Montreal",
      },
      center: { lat: 43.0901, lng: -79.055 },
      markers: [
        { position: { lat: 43.09, lng: -79.0851 } },
        { position: { lat: 43.091, lng: -79.0389 } },
      ],
    };
  },
  head() {
    return {
      title: this.getSiteInfo
        ? this.getSiteInfo.contactPageTitle
        : "Get In Touch",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.getSiteInfo
            ? this.getSiteInfo.contactPageMetaDescription
            : "",
        },
      ],
      link: [{ rel: "canonical", href: "https://seesight-tours.com/contact" }],
    };
  },
};
</script>

<style lang="scss">
.contact-us__input {
  background: transparent;
  &::placeholder {
    color: #6d6e71;
  }
}
</style>