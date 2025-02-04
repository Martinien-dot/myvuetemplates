<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <img :src="user.profilePicture" alt="Profile Picture" class="rounded-circle me-3" style="width: 100px; height: 100px;">
                <div>
                  <h3 class="mb-0">{{ user.name }}</h3>
                  <p class="text-muted">{{ user.email }}</p>
                </div>
              </div>
              <div>
                <button class="btn btn-primary me-2" @click="editProfile">Modifier le profil</button>
                <button class="btn btn-danger" @click="confirmDeleteAccount">Supprimer le compte</button>
              </div>
            </div>
            <hr>
            <div class="mb-3">
              <h5>À propos de moi</h5>
              <p>{{ user.bio }}</p>
            </div>
            <div class="mb-3">
              <h5>Informations de contact</h5>
              <p><strong>Téléphone:</strong> {{ user.phone }}</p>
              <p><strong>Adresse:</strong> {{ user.address }}</p>
            </div>
            <div class="mb-3">
              <h5>Réseaux sociaux</h5>
              <a :href="user.social.twitter" target="_blank" class="btn btn-outline-primary me-2">
                <i class="fab fa-twitter"></i> Twitter
              </a>
              <a :href="user.social.linkedin" target="_blank" class="btn btn-outline-primary me-2">
                <i class="fab fa-linkedin"></i> LinkedIn
              </a>
              <a :href="user.social.github" target="_blank" class="btn btn-outline-primary">
                <i class="fab fa-github"></i> GitHub
              </a>
            </div>
            <div class="mb-3">
              <h5>Activités récentes</h5>
              <ul class="list-group">
                <li class="list-group-item" v-for="activity in user.activities" :key="activity.id">
                  {{ activity.description }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Exemple de données utilisateur
const user = ref({
  name: "John Doe",
  email: "john.doe@example.com",
  profilePicture: "https://via.placeholder.com/100",
  bio: "Développeur passionné par les nouvelles technologies et les défis.",
  phone: "+123 456 789",
  address: "1234 Rue Exemple, Ville, Pays",
  social: {
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe"
  },
  activities: [
    { id: 1, description: "A publié un nouvel article." },
    { id: 2, description: "A mis à jour son profil." },
    { id: 3, description: "A commenté sur un post." }
  ]
});

// Fonction pour rediriger vers la page de modification du profil
const editProfile = () => {
  router.push("/edit-profile");
};

// Fonction pour confirmer la suppression du compte
const confirmDeleteAccount = () => {
  const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.");
  if (confirmDelete) {
    deleteAccount();
  }
};

// Fonction pour supprimer le compte (simulée)
const deleteAccount = () => {
  // Logique de suppression du compte (par exemple, appel API)
  alert("Votre compte a été supprimé avec succès.");
  router.push("/");
};
</script>

<style scoped>
  .card {
    border-radius: 10px;
  }

  .btn-outline-primary {
    border-radius: 20px;
  }

    .btn-outline-primary:hover {
      background-color: #0069d9;
      color: #fff;
    }

  .btn-primary {
    border-radius: 20px;
  }

    .btn-primary:hover {
      background-color: #0056b3;
    }

  .btn-danger {
    border-radius: 20px;
  }

    .btn-danger:hover {
      background-color: #dc3545;
    }
</style>
