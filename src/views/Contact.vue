<template>
  <div class="flex items-center justify-center">
    <div class="card w-96 bg-[#F3F4F6] shadow-xl border m-8">
      <div class="card-body">

        <div class="flex justify-center border-1 rounded-lg p-2">
          <h2 class="text-3xl font-bold">Formulaire de contact</h2>
        </div>

        <form @submit.prevent="handleSubmit" class="flex flex-col mb-4 w-full">
          
          <!-- nom -->
          
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Votre nom</legend>
            <input v-model="name" class="input" type="text" id="nameContact" name="name" required />
          </fieldset>

          <!-- email -->
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Votre email</legend>
            <input v-model="email" class="input" type="email" id="emailContact" name="email" required />
          </fieldset>      

          <!-- sujet -->
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Sujet</legend>
            <input  v-model="sujet" class="input" type="text" id="sujetContact" name="sujetContact" required />
          </fieldset>  

          <!-- message -->
          <fieldset class="fieldset">
            <legend class="fieldset-legend">Votre message</legend>
            <textarea v-model="message" class="textarea h-24" placeholder="Tapez votre message ici" required></textarea>
          </fieldset>

        </form>

        <button type="submit" 
          :disabled="!validation.isValid"
          :class="validation.isValid 
            ? 'bg-[#2563EB]/90 border-black text-white hover:bg-[#2563EB]' 
            : 'bg-gray-400 text-gray-200 cursor-not-allowed'">
          Envoyer
        </button>
        </div>
    </div>

    <div class="card w-96 bg-[#F3F4F6] shadow-xl border mt-8">
      <div class="flex justify-center border-1 rounded-lg p-2 m-8">
          <h2 class="text-3xl font-bold">Nos coordonnées</h2>
      </div>
      <p>Vous pouvez également nous contacter par téléphone ou sur nos réseaux sociaux</p>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref, computed } from 'vue';

const name = ref('')
const email = ref('')
const sujet = ref('')
const message = ref('')

const nameRegex= /^[a-zA-ZÀ-ÿ\s'-]{2,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const sujetRegex = /^.{3,}$/; 
const messageRegex = /^.{5,}$/; 

const validation = computed(() => {
  const list = [];

  if (!nameRegex.test(name.value) && name.value.length >0){
    list.push ('Le nom doit contenir au moins 2 lettres');
  }
  if (!emailRegex.test(email.value) && email.value.length >0){
    list.push ('Veuillez rentrer un mail valide');
  }
  if (!sujetRegex.test(sujet.value) && sujet.value.length >0){
    list.push("Le sujet n'est pas assez long");
  }
  if (!messageRegex.test(message.value) && message.value.length >0){
    list.push("Le message n'est pas assez long");
  }

  return{
    error: list,
    isValid: list.length ===0
  }
  
})

function handleSubmit() {
  alert("Formulaire envoyé");
}
</script>

<style scoped lang="css">
</style>