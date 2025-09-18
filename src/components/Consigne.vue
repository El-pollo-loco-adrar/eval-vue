<template>
  <div class="consigne card bg-base-200 shadow-xl p-6">
    <div class="mb-4">
      <h2 class="card-title text-xl font-bold text-primary">
        Objectif global :
      </h2>
      <p class="text-base-content">{{ consigne.globalObjective }}</p>
    </div>

    <!-- Étapes -->
    <div>
      <h3 class="text-lg font-semibold mb-2">Consignes :</h3>
      <ul class="space-y-3">
        <li
          v-for="(step, index) in consigne.stepGoals"
          :key="index"
          class="flex items-center gap-3 p-3 bg-base-100 rounded-lg shadow-sm"
        > 
          <!-- Checkbox -->
          <input
            type="checkbox"
            class="checkbox checkbox-primary"
            :checked="step.complete"
            @change="check(index)"
          />
          <span
            class="text-base"
            :class="{ 'line-through text-gray-400': step.complete }"
          >
            {{ step.description }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const props = defineProps ({
  consigne: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(["etapes"]);

function check (index){
  emit("etapes", index);
}
</script>

<style scoped lang="css">
</style>