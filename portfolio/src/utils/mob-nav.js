const mobNav = () => {
    const headBtn = document.querySelector('.header__bars');
    const mobNav = document.querySelector('.mob-nav');
    const mobLinks = document.querySelectorAll('.mobile-nav__link');
    //state
    let isMobNavOpen = false;
    
    headBtn.addEventListener('click', () => {
        isMobNavOpen = !isMobNavOpen;
        if (isMobNavOpen) {
            mobNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            mobNav.style.display = 'none';
            document.body.style.overflowY = 'auto'
        }
    });

    mobLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobNavOpen = false;
            mobNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
};

export default mobNav