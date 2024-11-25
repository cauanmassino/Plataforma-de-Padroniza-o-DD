// Mostrar/ocultar o dropdown principal (um por vez)
document.getElementById('setorButton').addEventListener('click', function (event) {
    const dropdownList = document.getElementById('dropdownList');
    
    // Fecha todos os dropdowns antes de abrir o selecionado
    const allDropdowns = document.querySelectorAll('.dropdown-list');
    allDropdowns.forEach(function (dropdown) {
        if (dropdown !== dropdownList) {
            dropdown.style.display = 'none'; // Fecha dropdowns não selecionados
        }
    });
    
    // Alterna o display do dropdown principal
    dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    
    // Impede a propagação do evento para não fechar o dropdown
    event.stopPropagation();
});

// Mostrar/ocultar os sub-dropdowns ao clicar no link do setor
document.querySelectorAll('.setor-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
        const subDropdown = this.nextElementSibling; // Pega o próximo elemento, que é o sub-dropdown
        
        // Fecha todos os sub-dropdowns antes de abrir o clicado
        const allSubDropdowns = document.querySelectorAll('.sub-dropdown');
        allSubDropdowns.forEach(function (subDropdownItem) {
            if (subDropdownItem !== subDropdown) {
                subDropdownItem.style.display = 'none'; // Fecha sub-dropdowns não selecionados
            }
        });
        
        // Alterna o display do sub-dropdown (abre ou fecha o sub-dropdown clicado)
        subDropdown.style.display = subDropdown.style.display === 'block' ? 'none' : 'block';
        
        // Impede a propagação do evento para não fechar o dropdown principal
        event.stopPropagation();
    });
});

// Fechar todos os dropdowns ao clicar fora deles
window.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-list').forEach(function (dropdown) {
        dropdown.style.display = 'none'; // Fecha o dropdown principal
    });
    document.querySelectorAll('.sub-dropdown').forEach(function (subDropdown) {
        subDropdown.style.display = 'none'; // Fecha todos os sub-dropdowns
    });
});

// Evitar o fechamento dos dropdowns ao clicar dentro deles
document.querySelectorAll('.dropdown-list').forEach(function (dropdown) {
    dropdown.addEventListener('click', function (event) {
        event.stopPropagation(); // Impede que o clique se propague e feche o dropdown
    });
});

document.querySelectorAll('.sub-dropdown').forEach(function (subDropdown) {
    subDropdown.addEventListener('click', function (event) {
        event.stopPropagation(); // Impede que o clique se propague e feche o sub-dropdown
    });
});
