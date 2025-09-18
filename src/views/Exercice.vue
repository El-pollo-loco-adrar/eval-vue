<template>

  <h1 class="text-3xl text-center">Page Exercice</h1>
  <Consigne :consigne="consigne" v-on:etapes="etapeComplete"></Consigne>


  <!-- Dr Mario -->
  <div class="container mx-auto p-4 md:p-8">
      <div class="card bg-base-100 shadow-xl rounded-box p-6">
          <h5 class="text-xl font-semibold mb-4">Tp-Databinding : User-profile Card with Text Interpolation & v-bind Composition</h5>
          <div class="flex flex-col justify-center items-center">
              <!-- v-bind de l'attribut src de l'image -->
              <div class="avatar online">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img :src="imageUser" :alt="nameUser" />
                  </div>
              </div>
              <!-- interpolation du nom -->
              <h3 class="text-2xl font-bold mt-4">{{ nameUser }}</h3>
              <!-- v-bind de l'attribut value d'un input -->
              <input type="text" :value="nameUser" class="input input-bordered w-full max-w-xs mt-4" />
              <div class="flex flex-row justify-center items-center gap-2 mt-4">
                  <!-- interpolation de l'age -->
                  <span class="text-lg">Âge : <span class="badge badge-lg badge-primary">{{ ageUser }} ans</span></span>
              </div>
              <div class="flex flex-row justify-center items-center mt-3">
                  <!-- interpolation fonction qui augmente l'age -->
                  <span class="text-lg">Âge + 10 :
                      <span class="badge badge-lg badge-secondary">{{ augmenterAge() }} ans</span>
                  </span>
              </div>
              <div class="mt-4">
                  <span class="text-lg">NB Fétiche :
                      <!-- interpolation de la fonction qui génère un nb random -->
                      <span class="badge badge-lg badge-accent">{{ nombreRandom() }}</span>
                  </span>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang='js'>
  import { ref } from 'vue'
  import Consigne from '../components/Consigne.vue';

  const consigne = ref({
    id: Math.random().toString(36),
    globalObjective: "Joue avec le Dr Mario",
    stepGoals: [
      { description: "Change le nom du Docteur", complete: false},
      { description: "Change l'âge", complete: false},
      { description: "Ajoute 10 ans à ce pauvre monsieur", complete: false},
      { description: "Change le nombre fétiche", complete: false}
    ],
  });

  //Fonction qui met à jour Consigne à chaque Event
  function etapeComplete(index){
    consigne.value.stepGoals[index].complete = !consigne.value.stepGoals[index].complete;
  }

const nameUser = ref('Dr Mario');
const ageUser = ref(30);
const imageUser = 'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg'

const augmenterAge = () => {
    // Avec les ref on peut accéder à leur value
    // Voyez ref comme une sorte de conteneur réactif de vue pour les variables
    return ageUser.value + 10;
}

const nombreRandom = () => {
    return Math.random();
    // return Math.floor(Math.random() * 100);
}
</script>

<style scoped lang="css">
/* Les styles sont gérés par DaisyUI et Tailwind, donc pas de CSS nécessaire ici. */
</style>
