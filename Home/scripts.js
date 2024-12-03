// Mostrar/ocultar o dropdown principal
document.getElementById('setorButton').addEventListener('click', function (event) {
  const dropdownList = document.getElementById('dropdownList');
  dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
  event.stopPropagation();
  });
  
  // Mostrar/ocultar os sub-dropdowns
  document.querySelectorAll('.setor-link').forEach(function (link) {
  link.addEventListener('click', function (event) {
   const subDropdown = this.nextElementSibling;
   subDropdown.style.display = subDropdown.style.display === 'block' ? 'none' : 'block';
   event.stopPropagation();
  });
  });
  
  // Fechar dropdowns ao clicar fora
  window.addEventListener('click', function () {
  document.getElementById('dropdownList').style.display = 'none';
  document.querySelectorAll('.sub-dropdown').forEach(function (subDropdown) {
   subDropdown.style.display = 'none';
  });
  });
  
 
  //Script para o efeito de clique nos botões -->
 
   const buttons = document.querySelectorAll('.card .btn');
 
   buttons.forEach(button => {
    button.addEventListener('click', function() {
     button.classList.add('btn-clicked');
     setTimeout(() => {
      button.classList.remove('btn-clicked');
     }, 400); // Duração da animação
    });
   });
  
  
 
// Função para abrir o modal
function openModal(contentType, contentUrl) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');

  // Limpar qualquer conteúdo anterior
  modalContent.innerHTML = '';

  // Definir o conteúdo com base no tipo (imagem, vídeo ou PDF)
  if (contentType === 'image') {
    modalContent.innerHTML = `<img src="${contentUrl}" class="img-fluid" alt="Imagem" style="max-width: 100%; max-height: 100%;">`;
  } else if (contentType === 'video') {
    modalContent.innerHTML = `<video controls class="w-100" style="max-height: 100%;"><source src="${contentUrl}" type="video/mp4"></video>`;
  } else if (contentType === 'pdf') {
    modalContent.innerHTML = `<embed src="${contentUrl}" width="100%" height="100%" type="application/pdf">`;
  }

  // Exibir o modal
  modal.style.display = 'flex';
}

// Fechar o modal ao clicar fora do conteúdo
document.getElementById('modal').addEventListener('click', function (event) {
  if (event.target === this) {
    this.style.display = 'none';
  }
});

// Atribuir eventos aos botões de cada card
document.querySelectorAll('.card .btn').forEach(button => {
  button.addEventListener('click', function() {
    const contentType = this.getAttribute('data-content-type');
    const contentUrl = this.getAttribute('data-content-url');
    openModal(contentType, contentUrl);
  });
});
