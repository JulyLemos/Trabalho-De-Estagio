document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const sideMenu = document.getElementById('sideMenu');

    // Toggle menu when hamburger icon is clicked
    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        sideMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!sideMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            sideMenu.classList.remove('active');
        }
    });

    // Handle file inputs
    const fileInputs = document.querySelectorAll('.file-input');
    fileInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const fileName = this.files[0]?.name;
            const fileNameSpan = document.getElementById(`${this.id}Name`);
            if (fileName) {
                fileNameSpan.textContent = fileName;
            }
        });
    });

    // Handle form submission
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Verify if all files are uploaded
        let allFilesUploaded = true;
        fileInputs.forEach(input => {
            if (!input.files[0]) {
                allFilesUploaded = false;
            }
        });

        if (!allFilesUploaded) {
            alert('Por favor, carregue todos os arquivos necessários.');
            return;
        }

        // Add your form submission logic here
        console.log('Enviando arquivos para análise...');
    });
});