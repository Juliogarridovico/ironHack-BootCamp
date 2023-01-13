122 lines (119 sloc)  3.13 KB

<template>
  <div>
    <h1>Iron Contacts</h1>
    <div>
      <button @click="meteFamosilloAleatorio">Contacto al azar</button>
      <button @click="masPopulares">Ordenador por popularidad</button>
      <button @click="ordenadarAlfabeticamente">nombre</button>
    </div>
    <table>
      <thead>
        <td><b>foto</b></td>
        <td><b>Nombre</b></td>
        <td><b>Fama</b></td>
        <td><b>Gana un oscar</b></td>
        <td><b>Gana un emi</b></td>
        <td></td>
      </thead>
      <tbody>
        <tr v-for="contact in cincoContactos" :key="contact.id">
          <td><img :src="`${contact.pictureUrl}`" /></td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.famosillo }}</td>
          <td>{{ contact.wonOscar ? "🏆" : "" }}</td>
          <td>{{ contact.wonEmmy ? "🏆" : "" }}</td>
          <td><button @click="borraFamosillo(contact.id)">Borrar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import contactsData from "./contacts.json";
export default {
  name: "App",
  data() {
    return {
      contacts: contactsData,
      cincoContactos: [],
    };
  },
  created() {
    //mete los primeros 5 famosillos
    for (let i = 0; i < 5; i++) {
      this.cincoContactos.push(this.contacts.shift());
    }
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    },
    meteFamosilloAleatorio() {
      if (this.contacts.length) {
        // codigo inspirado ;)
        const famosilloUnicoAzar = this.getRandomInt(
          0,
          this.contacts.length - 1
        ); //conseguir un numero al azar un dentro del rango del array
        const sacarInfoID = this.contacts[famosilloUnicoAzar]; // conseguir el contacto del numero

        this.cincoContactos.push(sacarInfoID); // se hace push para meter el contato
      }
    },
    masPopulares() {
      this.cincoContactos.sort((a, b) => (a.famosillo < b.famosillo ? 1 : -1));
    },
    ordenadarAlfabeticamente() {
      this.cincoContactos.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    borraFamosillo(contactId) {
      const borradorFamosillo = this.cincoContactos.findIndex(
        (elem) => elem.id === contactId
      );
      if (borradorFamosillo !== -1) {
        this.contacts.push(this.cincoContactos.splice(borradorFamosillo, 1)[0]);
      }
    },
  },
};
</script>