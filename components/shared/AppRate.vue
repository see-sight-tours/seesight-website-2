<template>
  <div class="rate flex">
    <fieldset class="rating mt-5">
      <input id="star5" v-model="reviewAverage" type="radio" value="5" disabled>
      <label for="star5" />

      <input id="star4half" v-model="reviewAverage" type="radio" value="4.5" disabled>
      <label class="half" for="star4half" />

      <input id="star4" v-model="reviewAverage" type="radio" value="4" disabled>
      <label for="star4" />

      <input id="star3half" v-model="reviewAverage" type="radio" value="3.5" disabled>
      <label class="half" for="star3half" />

      <input id="star3" v-model="reviewAverage" type="radio" value="3" disabled>
      <label for="star3" />

      <input id="star2half" v-model="reviewAverage" type="radio" value="2.5" disabled>
      <label class="half" for="star2half" />

      <input id="star2" v-model="reviewAverage" type="radio" value="2" disabled>
      <label for="star2" />

      <input id="star1half" v-model="reviewAverage" type="radio" value="1.5" disabled>
      <label class="half" for="star1half" />

      <input id="star1" v-model="reviewAverage" type="radio" value="1" disabled>
      <label for="star1" />

      <input id="starhalf" v-model="reviewAverage" type="radio" value="0.5" disabled>
      <label class="half" for="starhalf" />
    </fieldset>
    <!-- <div>
      <span
        v-for="star in 5"
        :key="star"
        class="icon-STAR pr-8 last:pr-16"
        :class="[ star <= Math.round(rate) ? 'text-secondary' : 'text-grey-10']" />
    </div> -->
    <p v-if="reviews">({{ reviews }} reviews)</p>
  </div>
</template>

<script>
export default {
  name: 'AppRate',
  props: {
    rate: {
      type: Number,
      default: 0
    },
    reviews: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      reviewAverage: null
    }
  },
  created () {
    if (this.rate >= Math.floor(this.rate) + 0.5) {
      if (this.rate - (Math.floor(this.rate) + 0.5) >= (this.rate - (Math.floor(this.rate) + 1)) * -1) {
        this.reviewAverage = Math.round(this.rate)
      } else {
        this.reviewAverage = Math.floor(this.rate) + 0.5
      }
    } else if (this.rate < Math.floor(this.rate) + 0.5) {
      if ((this.rate - (Math.floor(this.rate) + 0.5)) * -1 >= this.rate - (Math.floor(this.rate))) {
        this.reviewAverage = Math.round(this.rate)
      } else {
        this.reviewAverage = Math.floor(this.rate) + 0.5
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);
.rate {
  min-width: max-content;
}
fieldset, label { margin: 0; padding: 0; }
body{ margin: 20px; }
h1 { font-size: 1.5em; margin: 10px; }
/****** Style Star Rating Widget *****/
.rating {
  border: none;
  float: left;
}
.rating > input { display: none; }
.rating > label:before {
  margin: 0 5px;
  font-size: 1.25em;
  font-family: FontAwesome;
  display: inline-block;
  content: "\f005";
}
.rating > .half:before {
  content: "\f089";
  position: absolute;
}
.rating > label {
  color: #E6E7E8;
  float: right;
}
.rating > input:checked ~ label {
  position: relative;
  color: #57B8E8;
}
</style>