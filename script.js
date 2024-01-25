document.getElementById('menu-button').addEventListener('click', function() {
    var menuContent = document.getElementById('menu-content');
    menuContent.style.display = (menuContent.style.display === 'block' ? 'none' : 'block');
});
