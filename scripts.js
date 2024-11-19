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
  