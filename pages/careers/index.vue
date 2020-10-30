<template>
  <div>
    <!-- Hero -->
    <hero
      :title="getSiteInfo && getSiteInfo.careersPageHeader"
      :text="getSiteInfo && getSiteInfo.careersPageHeaderSubtext"
      :image="getSiteInfo && getSiteInfo.careersPageHeaderImage"
      custom-class-wrap="pt-48 md:pt-104 pb-62 md:pb-144" />

    <div class="max-w-1180 w-full mx-auto px-16 md:px-30 pt-24 pb-32 md:py-64 flex flex-col">
      <div class="flex flex-col md:flex-row">
        <div class="max-w-full md:max-w-440 w-full mb-24 md:mb-0">
          <h3 class="text-mobile-h1 md:text-desktop-h1 leading-4sm md:leading-3sm text-terciary font-bold mb-24 md:mb-16">{{ workWithUsItem[0].title }}</h3>
          <p class="text-terciary text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm mb-24 md:mb-16">{{ workWithUsItem[0].desc }}</p>
          <p class="text-secondary text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm mb-24">{{ workWithUsItem[0].shortDesc }}</p>
          <img
            :src="require(`@/static/img/${ workWithUsItem[0].img2 }.svg`)"
            alt="trip advisor"
            class="w-132 md:w-176 h-48 md:h-64">
        </div>
        <div class="max-w-full md:max-w-600 w-full ml-0 md:ml-88">
          <div class="h-152 md:h-312">
            <img
              :src="workWithUsItem[0].img"
              alt="img"
              class="h-full w-full object-cover rounded-8">
          </div>
          <div class="max-w-220 sm:max-w-full w-full ml-auto text-right mt-16 md:mt-24">
            <span class="text-mobile-body sm:text-desktop-h4 leading-1sm sm:leading-normal text-grey-40">
              <span class="icon-PIN text-mobile-body sm:text-desktop-h4 mr-7 sm:mr-8 text-secondary" />
              {{ workWithUsItem[0].locationTitle }}&nbsp;<span class="text-blue-200">{{ workWithUsItem[0].locationSubtitle }}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="flex items-center flex-col-reverse md:flex-row mt-32 md:mt-56">
        <div class="max-w-full md:max-w-600 w-full mr-0 md:mr-88">
          <div class="h-152 md:h-312">
            <img
              :src="workWithUsItem[1].img"
              alt="img"
              class="h-full w-full object-cover rounded-8">
          </div>
        </div>
        <div class="max-w-full md:max-w-440 w-full mb-24 md:mb-0">
          <h3 class="text-mobile-h1 md:text-desktop-h1 leading-4sm md:leading-3sm text-terciary font-bold mb-24 md:mb-16">{{ workWithUsItem[1].title }}</h3>
          <p class="text-terciary text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm">{{ workWithUsItem[1].desc }}</p>
        </div>
      </div>
    </div>

    <div class="bg-grey-700 pt-32 md:pt-48 pb-44 md:pb-88">
      <div class="max-w-1180 w-full px-15 md:px-30 mx-auto">
        <div>
          <h2 class="text-mobile-h1 md:text-desktop-h1 leading-4sm md:leading-3sm text-terciary font-bold mb-8 md:mb-16">Open Positions</h2>
          <h3 class="text-terciary text-mobile-h3 md:text-desktop-h3 leading-3sm md:leading-5sm mb-0 mb-32 md:mb-56">Open positions at SeeSight </h3>
          <div id="bzOpeningsContainer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Hero from '@/components/pages/Hero'
export default {
  name: 'WorkWithUsPage',
  components: { Hero },
//   apollo: {
//     getSiteInfo: {
//       prefetch: true,
//       query: gql`
//         query {
//           getSiteInfo {
//             careersPageTitle
//             careersPageHeader
//             careersPageHeaderSubtext
//             careersPageMetaDescription
//             careersPageHeaderImage { desktopUrl altText }
//           }
//         }
//       `
//     }
//   },
  data () {
    return {
      heroData: {
        title: 'Work With Us',
        text: 'Our world deserves more you'
      },
      workWithUsItem: [{
        title: 'Connecting people through travel',
        img: 'https://res.cloudinary.com/see-sight-tours/image/upload/c_fill,g_faces,h_474,q_auto:eco,w_892,y_0/v1582036248/fun-guide-group-photo-2019.jpg',
        img2: 'trip-advisor',
        locationTitle: 'The most fun you’ve ever had on the job',
        locationSubtitle: '',
        shortDesc: 'That’s why we’re rated N1 On Trip Advisor for Niagara Falls tours from 2013 to 2019!',
        desc: 'We care about employee happiness and fulfillment. Our tour guides are fun, energetic and ready to greet guests from around the world. Our management team thrives with a collaborative and hard working yet fun and relaxed atmosphere. We also believe in empowering our employees and nurturing talent to provide opportunities for advancement and growth within the company. '
      },
      {
        title: 'Culture',
        img: 'https://res.cloudinary.com/see-sight-tours/image/upload/c_fill,g_faces,h_500,w_870,y_0/v1582036498/Guides-smiling.jpg',
        img2: 'trip-advisor',
        locationTitle: 'Notre-Dame Basilica,',
        locationSubtitle: 'Montreal',
        shortDesc: 'That’s why we’re rated N1 On Trip Advisor for Niagara Falls tours from 2013 to 2019!',
        desc: 'On our team, we celebrate individuality while working toward a common goal - to deliver the best guest experience possible. Our training is thorough enough to help every guide feel confident in delivering the “See Sight experience” while still allowing the personalities of each guide to shine through. Our management team works closely with one another to support each other and the team as a whole. '
      }]
    }
  },
  head () {
    return {
      title: this.getSiteInfo ? this.getSiteInfo.careersPageTitle : 'Work With Us',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.getSiteInfo ? this.getSiteInfo.careersPageMetaDescription : '' }
      ],
      script: [
        { src: 'https://see-sight-tours.breezy.hr/embed/js?inline=true', defer: true }
      ]
    }
  }
}
</script>

<style lang="scss">
  .bzOpeningsList {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 40px;
    .bzOpening {
      border-bottom-width: 1px;
      border-color: #D1D1D3;
      padding-bottom: 40px;
      &:nth-child(odd) {
        padding-right: 55px;
      }
      &:nth-child(even) {
        padding-left: 55px;
      }
      a {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      h2 {
        font-size: 1.25rem;
        margin-bottom: 16px;
        line-height: 1.2;
        color: #57B8E8;
      }
      ul {
        display: flex;
        align-items: center;
        font-size: 1.25rem;
        line-height: 1.2;
        color: #6D6E71;
        font-weight: 700;
        margin-bottom: 16px;
      }
      button {
        background-color: #57B8E8;
        color: #fff;
        font-weight: 700;
        padding: 10px 20px;
        border-radius: 4px;
        font-size: 14px;
        order: 3;
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 32px;
      .bzOpening {
        padding-bottom: 35px;
        &:nth-child(odd) {
        padding-right: 0;
        }
        &:nth-child(even) {
          padding-left: 0;
        }
        h2 {
          font-size: 1.133rem;
          margin-bottom: 8px;
          line-height: 1.17;
        }
        ul {
          font-size: 1.133rem;
          line-height: 1.17;
          margin-bottom: 8px;
        }
      }
    }
  }
</style>