function modal() {
    // Modal window
    const modalWindow = document.querySelector('.modal'),
          modalBtns = document.querySelectorAll('[data-modal]');

    
    function openModal () {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }
    
    modalBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });
    
    function closeModal () {
        modalWindow.classList.add('hide');
        modalWindow.classList.remove('show');
        document.body.style.overflow = '';
    }


    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 50000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}

module.exports = modal;