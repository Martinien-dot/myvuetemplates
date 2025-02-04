<template>
  <nav class="navbar navbar-expand-lg" :class="themeClass">
    <div class="container-fluid">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand">🌟 MonSite</router-link>

      <!-- Bouton du menu mobile -->
      <button class="navbar-toggler" type="button" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Contenu de la navbar (liens, recherche, boutons) -->
      <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link in links" :key="link.name">
            <router-link class="nav-link" :to="link.path">{{ link.name }}</router-link>
          </li>
        </ul>

        <!-- Barre de recherche -->
        <form class="d-flex" @submit.prevent="search">
          <input class="form-control me-2" type="search" placeholder="Rechercher..." v-model="searchQuery" />
          <button class="btn btn-outline-primary" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>

        <!-- Bouton Mode Sombre / Clair -->
        <button class="btn ms-3" @click="toggleTheme">
          <i :class="themeIcon"></i>
        </button>

        <!-- Liens de connexion et d'inscription -->
        <router-link to="/login" class="nav-link ms-3">Se connecter</router-link>
        <router-link to="/register" class="nav-link ms-3">S'inscrire</router-link>

        <!-- Menu déroulant pour l'utilisateur connecté -->
        <div class="dropdown ms-3" v-if="isAuthenticated" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
          <button class="btn btn-link dropdown-toggle" type="button" id="userDropdown" aria-expanded="false">
            {{ user.name }}
          </button>
          <ul class="dropdown-menu" :class="{ show: showDropdown }" aria-labelledby="userDropdown">
            <li><router-link to="/profile" class="dropdown-item">Voir profil</router-link></li>
            <li><button class="dropdown-item" @click="logout">Déconnexion</button></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  // État du menu mobile
  const isMenuOpen = ref(false);

  // État du mode sombre / clair
  const theme = ref(localStorage.getItem("theme") || "light");

  // État de connexion (simulé)
  const isAuthenticated = ref(true);

  // État du menu déroulant
  const showDropdown = ref(false);

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

  // Liste des liens
  const links = ref([
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ]);

  // Barre de recherche
  const searchQuery = ref("");

  // Fonction pour afficher/cacher le menu mobile
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  // Fonction de recherche (simulée)
  const search = () => {
    alert(`Recherche : ${searchQuery.value}`);
  };

  // Fonction pour basculer le mode sombre / clair
  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme.value);
    document.documentElement.setAttribute("data-bs-theme", theme.value);
  };

  // Fonction pour gérer la déconnexion (simulée)
  const logout = () => {
    isAuthenticated.value = false;
    router.push("/login");
  };

  // Définir le thème au chargement de la page
  onMounted(() => {
    document.documentElement.setAttribute("data-bs-theme", theme.value);
  });

  // Classes et icônes dynamiques
  const themeClass = computed(() => (theme.value === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"));
  const themeIcon = computed(() => (theme.value === "dark" ? "fas fa-sun text-warning" : "fas fa-moon text-dark"));
</script>

<style scoped>
  /* Ajustements pour la navbar */
  .navbar-toggler {
    border: none;
    font-size: 1.5rem;
  }

    .navbar-toggler:focus {
      outline: none;
      box-shadow: none;
    }

  /* Animations */
  .navbar-collapse {
    transition: max-height 0.3s ease-in-out;
  }

    .navbar-collapse.show {
      max-height: 1000px;
    }

    .navbar-collapse.collapsing {
      max-height: 0;
    }

  .nav-link {
    transition: color 0.3s ease-in-out;
  }

    .nav-link:hover {
      color: #007bff;
    }

  .btn {
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

    .btn:hover {
      background-color: #0069d9;
      transform: scale(1.05);
    }

  .dropdown-menu {
    border-radius: 10px;
    margin-top: 0;
  }

  .dropdown-item {
    transition: background-color 0.3s ease-in-out;
  }

    .dropdown-item:hover {
      background-color: #f8f9fa;
    }

  .dropdown:hover .dropdown-menu {
    display: block;
  }
</style>
