<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Meu Portfólio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">Início</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projetos">Projetos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contato">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Seção Home -->
    <section id="home" class="pt-5 text-center text-white bg-primary" style="padding-top: 100px; padding-bottom: 100px;">
  <div class="container">
    <img
      src="https://media.licdn.com/dms/image/v2/D4D03AQHyd1lD9eiKVA/profile-displayphoto-shrink_800_800/B4DZXzzkpbG4Ac-/0/1743552139459?e=1749081600&v=beta&t=_7xw4MdZ0TI4GkM3RKRwvLnfF-9u1i00pejZ7xvJQr4"
      alt="Foto de perfil"
      class="rounded-circle mb-4"
      width="150"
      height="150"
    />
    <h1 class="display-4 fw-bold">Olá, eu sou <span style="color: #FFD700">Miqueias</span></h1>
    <p class="lead">Desenvolvedor web apaixonado por transformar ideias em código!</p>

    <a href="meu_curriculo.pdf" class="btn btn-light btn-lg mt-3" download>
      Baixar Currículo
    </a>

    <div class="mt-4">
      <a href="https://github.com/miqueiascavalcant04" class="btn btn-outline-light me-2" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/miqueias-cavalcanti-52a223214" class="btn btn-outline-light" target="_blank">LinkedIn</a>
    </div>
  </div>
</section>

<!-- Seção Projetos -->
<section id="projetos" class="py-5 bg-light text-dark">
  <div class="container">
    <h2 class="text-center mb-5">Meus Projetos</h2>
    <div class="row">
      <!-- Projeto 1 -->
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Projeto 1">
          <div class="card-body">
            <h5 class="card-title">Projeto 1</h5>
            <p class="card-text">Breve descrição do projeto. Pode ser um sistema, site, app ou estudo técnico.</p>
            <a href="https://github.com/seuuser/projeto1" target="_blank" class="btn btn-primary">Ver no GitHub</a>
          </div>
        </div>
      </div>

      <!-- Projeto 2 -->
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Projeto 2">
          <div class="card-body">
            <h5 class="card-title">Projeto 2</h5>
            <p class="card-text">Outro projeto interessante para mostrar suas habilidades com front ou back-end.</p>
            <a href="https://github.com/seuuser/projeto2" target="_blank" class="btn btn-primary">Ver no GitHub</a>
          </div>
        </div>
      </div>

      <!-- Projeto 3 -->
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Projeto 3">
          <div class="card-body">
            <h5 class="card-title">Projeto 3</h5>
            <p class="card-text">Você também pode incluir mini-projetos, APIs ou projetos em grupo.</p>
            <a href="https://github.com/seuuser/projeto3" target="_blank" class="btn btn-primary">Ver no GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Seção Contato -->
<section id="contato" class="py-5 bg-dark text-white">
      <div class="container">
        <h2 class="text-center mb-5">Fale Comigo</h2>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <form @submit.prevent="enviarMensagem">
              <div class="mb-3">
                <label for="nome" class="form-label">Nome</label>
                <input type="text" class="form-control" id="nome" v-model="form.nome" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="email" v-model="form.email" required>
              </div>
              <div class="mb-3">
                <label for="mensagem" class="form-label">Mensagem</label>
                <textarea class="form-control" id="mensagem" rows="4" v-model="form.mensagem" required></textarea>
              </div>
              <button type="submit" class="btn btn-light">Enviar</button>
            </form>

            <div class="mt-4 text-center">
              <p>Ou entre em contato por:</p>
              <a href="mailto:miqueiascavalcante417@gmail.com" class="btn btn-outline-light me-2">E-mail</a>
              <a href="https://wa.me/5592982158707" target="_blank" class="btn btn-outline-light">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>

<!-- Rodapé -->
<footer class="bg-dark text-white text-center py-4">
  <div class="container">
    <p class="mb-2">© 2025 Miqueias. Todos os direitos reservados.</p>
    <div>
      <a href="https://github.com/seuuser" class="text-white me-3" target="_blank">
        <i class="bi bi-github"></i> GitHub
      </a>
      <a href="https://linkedin.com/in/seuuser" class="text-white" target="_blank">
        <i class="bi bi-linkedin"></i> LinkedIn
      </a>
    </div>
  </div>
</footer>

<button
      id="btnTopo"
      class="btn btn-primary position-fixed"
      style="bottom: 30px; right: 30px; display: none; z-index: 9999;"
      @click="voltarAoTopo"
    >
      ↑ Topo
    </button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      form: {
        nome: '',
        email: '',
        mensagem: ''
      }
    };
  },
  mounted() {
    window.addEventListener('scroll', this.verificaScroll);
  },
  methods: {
    voltarAoTopo() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    verificaScroll() {
      const btn = document.getElementById('btnTopo');
      btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    },
    async enviarMensagem() {
      try {
        const response = await fetch('http://localhost:3000/api/mensagens', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        });

        const result = await response.json();

        if (result.sucesso) {
          alert('Mensagem enviada com sucesso!');
          this.form.nome = '';
          this.form.email = '';
          this.form.mensagem = '';
        } else {
          alert('Erro ao enviar a mensagem.');
        }
      } catch (error) {
        console.error(error);
        alert('Erro ao conectar com o servidor.');
      }
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding-top: 56px; /* compensar altura da navbar fixa */
}
</style>
