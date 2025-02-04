<template>
  <div class="container-fluid d-flex justify-content-center align-items-center min-vh-100 animated-background">
    <div class="card p-4 shadow-sm animated-card" style="max-width: 400px; width: 100%">
      <h3 class="text-center mb-4">Connexion</h3>
      <form @submit.prevent="login">
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
        <!-- Bouton Connexion -->
        <button type="submit" class="btn btn-primary w-100 animated-button">Se connecter</button>
      </form>

      <div class="d-flex justify-content-between mt-3">
        <!-- Connexion avec Google -->
        <button class="btn btn-outline-danger flex-grow-1 me-2 animated-button">
          <i class="fab fa-google me-2"></i>Se connecter avec Google
        </button>
        <!-- Connexion avec Facebook -->
        <button class="btn btn-outline-primary flex-grow-1 ms-2 animated-button">
          <i class="fab fa-facebook-f me-2"></i>Se connecter avec Facebook
        </button>
      </div>

      <p class="mt-3 text-center">
        Pas encore inscrit ? <router-link to="/register">Créer un compte</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const email = ref("");
  const password = ref("");

  // Fonction de connexion (exemple)
  const login = () => {
    // Simulation de connexion (à remplacer par un appel API réel)
    if (email.value === "test@test.com" && password.value === "password") {
      alert("Connexion réussie !");
      router.push("/");
    } else {
      alert("Identifiants incorrects !");
    }
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

  .btn-primary {
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
