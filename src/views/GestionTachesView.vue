<template>
  <div class="container mt-4">
    <h1 class="text-center text-primary mb-4"><i class="fa-solid fa-list-check"></i> Gestionnaire Todo-list</h1>
    <div class="input-group">
      <input v-model="newTask" class="form-control" @keyup.enter="addTask" placeholder="Ajouter une nouvelle tache..."/>
      <button @click="addTask" class="btn btn-primary"><i class="fa-solid fa-plus"></i>Ajouter</button>
    </div>
    <ul class="list-group">
      <li v-for="(task, index) in filteredTasks" :key="index" class="list-group-item d-flex align-items-center justify-content-between">
        <div>
          <input type="checkbox" v-model="task.completed" class="form-check-input me-2" />
          <span v-if="!task.isediting" @dblclick="editTask(index)" :class="{'text-decoration-line-through text-muted':task.completed}">{{task.text}}</span>
          <input v-else v-model="task.text" class="form-control d-inline w-auto" @blur="saveEdit(index)" @keyup.enter="saveEdit(index)" :ref="(el)=>setFocusRef(el, index)"/>
        </div>
        <button class="btn btn-sm text-danger" @click="deleteTask(index)"><i class="fa-solid fa-delete-left"></i></button>
      </li>
    </ul>
    <div class="mt-3 d-flex justify-content-center gap-2">
      <button @click="filter = 'all'" class="btn btn-outline-secondary" :class="{'active':filter==='all'}">Toute</button>
      <button @click="filter = 'current'" class="btn btn-outline-secondary" :class="{'active':filter==='current'}">En cours</button>
      <button @click="filter='finished'"class="btn btn-outline-secondary" :class="{'active':filter==='finished'}">Terminées</button>
    </div>
  </div>

</template>

<script setup lang="ts">
  import { ref, computed, watch, nextTick } from 'vue';

  interface Task {
    text: string,
    isediting: boolean,
    completed: boolean,
  }
  const editInputs = ref<(HTMLInputElement | null)[]>([]);
  const tasks = ref<Task[]>(JSON.parse(localStorage.getItem('tasks') || []));
  const newTask = ref('');
  const addTask = () => {
    if (newTask.value.trim()) {
      tasks.value.push({ text: newTask.value, isediting: false, completed: false });
    }
    newTask.value = '';
  }

  const setFocusRef = (el: HTMLinputElement, index: number) => {
    editInputs.value[index] = el;
  }

  const editTask = async (index: number) => {
    tasks.value[index].isediting = true;
    await nextTick();
    editInputs.value[index]?.focus();
  }

  const saveEdit = (index: number) => {
    tasks.value[index].isediting = false;
  }

  const deleteTask = (index: number) => {
    tasks.value.splice(index, 1);
    editInputs.value.splice(index, 1);
  }
  const filter = ref<'all' | 'current' | 'finished'>('all');

  const filteredTasks = computed(() => {
    if (filter.value === 'finished') {
      return tasks.value.filter(el => el.completed);
    }
    else if (filter.value === 'current') {
      return tasks.value.filter(el =>!el.completed)
    }
    return tasks.value;
  });

  watch(tasks, (newTasks) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }, { deep: true });

</script>

<style scoped>

</style>
