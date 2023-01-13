<template>
  <ul
    v-for="border in sortedCountryNames"
    :key="border.code"
    class="list-unstyled"
  >
    <li>
      <router-link :to="`/countries/${border.code}`">
        {{ border.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
const API_URL = "https://ih-countries-api.herokuapp.com/countries";

export default {
  name: "BorderCountries",
  data() {
    return {
      borderItems: [],
    };
  },
  props: {
    borders: {
      type: Array,
      default: [],
    },
  },
  computed: {
    sortedCountryNames() {
      return this.borderItems.sort((a, b) => a.name.localeCompare(b.name));
    },
  },
  methods: {
    async addCountryName(countryCode) {
      try {
        var response = await fetch(`${API_URL}/${countryCode.toUpperCase()}`);
        var countryInfo = await response.json();

        const borderItem = {
          code: countryCode,
          name: countryInfo.name.common,
        };
        this.borderItems.push(borderItem);
      } catch (error) {}
    },
  },
  watch: {
    borders(newBorders) {
      this.borderItems = [];
      newBorders.forEach((value) => this.addCountryName(value));
    },
  },
  mounted() {
    this.borders.forEach(this.addCountryName);
  },
};
</script>

<style>
</style>