<template>
  <div class="app">
    <Navbar />

    <div className="container">
      <div className="row">
        <CountriesList :countries="sortedCountries" />
        <router-view />
      </div>
    </div>
  </div>
</template>
  
<script>
import Navbar from "./components/Navbar.vue";
import CountriesList from "./components/CountriesList.vue";

const API_URL = "https://ih-countries-api.herokuapp.com/countries";

export default {
  name: "App",
  components: {
    Navbar,
    CountriesList,
  },
  data: () => ({
    countries: [],
  }),
  computed: {
    sortedCountries() {
      return this.countries.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
    },
  },
  methods: {
    async getApiCountries() {
      try {
        const response = await fetch(API_URL);
        this.countries = await response.json();

        const firstCountryCode = this.sortedCountries[0].alpha3Code;
        this.$router.push(`/countries/${firstCountryCode}`);
      } catch (error) {
        this.$router.push("/?loaded=true");
      }
    },
  },
  mounted() {
    this.getApiCountries();
  },
};
</script>

<style>
</style>
  