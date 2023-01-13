<template>
  <div v-if="country" class="col-7">
    <div class="text-center">
      <img
        class="flag"
        :src="`https://flagpedia.net/data/flags/w702/${country.alpha2Code.toLowerCase()}.png`"
        :alt="`${country.alpha3Code} country flag`"
      />
      <h1>{{ country.name.common }}</h1>
    </div>
    <table class="table text-center">
      <thead></thead>
      <tbody>
        <tr>
          <td class="country-capital">Capital</td>
          <td>{{ country.capital[0] }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ country.area }} km <sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <BorderCountries :borders="country.borders" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BorderCountries from "../components/BorderCountries.vue";

const API_URL = "https://ih-countries-api.herokuapp.com/countries";

export default {
  name: "CountryDetails",
  components: { BorderCountries },
  data() {
    return {
      country: null,
    };
  },
  methods: {
    async fetchCountry(countryCode) {
      if (countryCode) {
        try {
          const response = await fetch(
            `${API_URL}/${countryCode.toUpperCase()}`
          );
          this.country = await response.json();
        } catch (error) {}
      }
    },
  },
  watch: {
    $route(to, from) {
      this.fetchCountry(to.params.country);
    },
  },
  mounted() {
    this.fetchCountry(this.$route.params.country);
  },
};
</script>

<style scoped>
.flag {
  height: 200px;
  max-width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.coutry-capital {
  width: 30%;
}
</style>