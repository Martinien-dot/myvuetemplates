<template>
  <div class="container-fluid d-flex justify-content-center align-items-center min-vh-100 animated-background">
    <div class="card p-4 shadow-sm animated-card" style="max-width: 400px; width: 100%">
      <h3 class="text-center mb-4">Inscription</h3>
      <form @submit.prevent="register">
        <!-- Nom -->
        <div class="mb-3">
          <label for="name" class="form-label">Nom</label>
          <input type="text"
                 v-model="name"
                 class="form-control animated-input"
                 id="name"
                 required
                 placeholder="Entrez votre nom" />
        </div>
        <!-- Email -->
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email"
                 v-model="email"
                 class="form-control animated-input"
                 id="email"
                 required
                 placeholder="Entrez votre email" />
        </div>
        <!-- Mot de passe -->
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe</label>
          <input type="password"
                 v-model="password"
                 class="form-control animated-input"
                 id="password"
                 required
                 placeholder="Entrez votre mot de passe" />
        </div>
        <!-- Confirmer le mot de passe -->
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirmer le mot de passe</label>
          <input type="password"
                 v-model="confirmPassword"
                 class="form-control animated-input"
                 id="confirmPassword"
                 required
                 placeholder="Confirmez votre mot de passe" />
        </div>
        <!-- Bouton Inscription -->
        <button type="submit" class="btn btn-success w-100 animated-button">S'inscrire</button>
      </form>

      <div class="d-flex justify-content-between mt-3">
        <!-- Inscription avec Google -->
        <button class="btn btn-outline-danger flex-grow-1 me-2 animated-button">
          <i class="fab fa-google me-2" ></i>S'inscrire avec Google
        </button>
        <!-- Inscription avec Facebook -->
        <button class="btn btn-outline-primary flex-grow-1 ms-2 animated-button">
          <i class="fab fa-facebook-f me-2"></i>S'inscrire avec Facebook
        </button>
      </div>

      <p class="mt-3 text-center">
        Déjà un compte ? <router-link to="/login">Se connecter</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const confirmPassword = ref("");

  // État du mode sombre / clair
  const theme = ref(localStorage.getItem("theme") || "light");
  const isDarkMode = computed(() => theme.value === "dark");

  // Fonction d'inscription (exemple)
  const register = () => {
    if (password.value !== confirmPassword.value) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    alert("Inscription réussie !");
    router.push("/login");
  };
</script>

<style scoped>
  .container-fluid {
    background: #f8f9fa;
    padding: 0;
  }

  .card {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .btn-outline-dark,
  .btn-outline-primary {
    border-radius: 20px;
  }

  .form-label {
    font-weight: bold;
  }

  .form-control {
    border-radius: 5px;
  }

  .btn-success {
    border-radius: 20px;
  }

  @media (max-height: 600px) {
    .container-fluid {
      padding: 20px;
    }
  }

  /* Animations */
  .animated-background {
    animation: backgroundFade 3s ease-in-out infinite;
  }

  @keyframes backgroundFade {
    0% {
      background-color: #f8f9fa;
    }

    50% {
      background-color: #e9ecef;
    }

    100% {
      background-color: #f8f9fa;
    }
  }

  .animated-card {
    animation: cardFadeIn 1s ease-in-out;
  }

  @keyframes cardFadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animated-input {
    transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

    .animated-input:focus {
      border-color: #007bff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

  .animated-button {
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

    .animated-button:hover {
      background-color: #0069d9;
      transform: scale(1.05);
    }
</style>
