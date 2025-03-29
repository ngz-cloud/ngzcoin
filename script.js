function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function copyAddress() {
    const address = document.getElementById('tokenAddress');
    navigator.clipboard.writeText(address.value);
    
    const btn = document.querySelector('.copy-button');
    btn.textContent = 'Copied!';
    setTimeout(() => {
        btn.textContent = 'Copy';
    }, 2000);
}