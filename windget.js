var isOpen = false;

function toggleModal() {
    isOpen = !isOpen;
    document.getElementById('mainModal').style.display = isOpen ? 'block' : 'none';
    document.getElementById('miniContainer').style.display = isOpen ? 'none' : 'block';
}

function handleAction() {
    if (window.AndroidBridge) {
        window.AndroidBridge.openRegistration();
    }
}
