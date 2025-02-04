<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-body">
            <h3 class="mb-4">Modifier le profil</h3>
            <form @submit.prevent="updateProfile">
              <!-- Nom -->
              <div class="mb-3">
                <label for="name" class="form-label">Nom</label>
                <input type="text" v-model="user.name" class="form-control" id="name" required />
              </div>
              <!-- Email -->
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" v-model="user.email" class="form-control" id="email" required />
              </div>
              <!-- Bio -->
              <div class="mb-3">
                <label for="bio" class="form-label">À propos de moi</label>
                <textarea v-model="user.bio" class="form-control" id="bio" rows="3"></textarea>
              </div>
              <!-- Téléphone -->
              <div class="mb-3">
                <label for="phone" class="form-label">Téléphone</label>
                <input type="text" v-model="user.phone" class="form-control" id="phone" />
              </div>
              <!-- Adresse -->
              <div class="mb-3">
                <label for="address" class="form-label">Adresse</label>
                <input type="text" v-model="user.address" class="form-control" id="address" />
              </div>
              <!-- Réseaux sociaux -->
              <div class="mb-3">
                <h5>Réseaux sociaux</h5>
                <div class="mb-2">
                  <label for="twitter" class="form-label">Twitter</label>
                  <input type="text" v-model="user.social.twitter" class="form-control" id="twitter" />
                </div>
                <div class="mb-2">
                  <label for="linkedin" class="form-label">LinkedIn</label>
                  <input type="text" v-model="user.social.linkedin" class="form-control" id="linkedin" />
                </div>
                <div class="mb-2">
                  <label for="github" class="form-label">GitHub</label>
                  <input type="text" v-model="user.social.github" class="form-control" id="github" />
                </div>
              </div>
              <!-- Bouton Enregistrer -->
              <button type="submit" class="btn btn-primary w-100">Enregistrer</button>
            </form>
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
  bio: "Développeur passionné par les nouvelles technologies et les défis.",
  phone: "+123 456 789",
  address: "1234 Rue Exemple, Ville, Pays",
  social: {
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe"
  }
});

// Fonction pour mettre à jour le profil (simulée)
const updateProfile = () => {
  // Logique de mise à jour du profil (par exemple, appel API)
  alert("Profil mis à jour avec succès.");
  router.push("/profile");
};
</script>

<style scoped>
  .card {
    border-radius: 10px;
  }

  .btn-primary {
    border-radius: 20px;
  }

    .btn-primary:hover {
      background-color: #0056b3;
    }
</style>
