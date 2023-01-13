<template>
  <div v-if="countries.length > 0" class="col-5 countries-list">
    <div v-for="country in countries" :key="country._id" class="list-group">
      <router-link
        class="list-group-item list-group-item-action text-center"
        :to="`/countries/${country.alpha3Code}`"
      >
        <img
          :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
          :alt="`${country.alpha3Code} country flag`"
        />
        <p>{{ country.name.common }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountriesList",
  props: {
    countries: {
      type: Array,
      default: [],
    },
  },
  methods: {
    selectCountry(event) {
      event.target.classList.add("selected");
    },
  },
};
</script>

<style scoped>
.countries-list {
  max-height: 88vh;
  overflow: scroll;
}
</style>