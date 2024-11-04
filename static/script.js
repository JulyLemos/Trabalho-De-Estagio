document.addEventListener('DOMContentLoaded', function() {
    const continueButton = document.getElementById('continuar');

    setTimeout(() => {
        continueButton.classList.add('visible');
    }, 1000);

    continueButton.addEventListener('click', function() {
        this.disabled = true;
        setTimeout(() => {
            window.location.href = 'lar';
        }, 1000);
    });
});