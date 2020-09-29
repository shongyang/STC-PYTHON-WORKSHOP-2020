function refreshExistingTab() {
    location.reload()
}

function toggleSideNav() {
    let thirty_percent_width = window.innerWidth * 0.3;
    let sidenav = document.querySelector('.sidenav');
    sidenav.style.display = 'flex';
    let translateX = window.getComputedStyle(sidenav).transform.split(',')[4];
    sidenav.style.transform = (translateX && translateX.includes('-')) ? 'translateX(0px)' : `translateX(-${thirty_percent_width}px)`;
    sidenav.style.display = (translateX && translateX.includes('-')) ? 'flex' : 'none';
}

function openTab(tab) {
    let about_tab = document.querySelector('.about_tab');
    let join_tab = document.querySelector('.join_tab');
    switch (tab) {
        case 'about':
            about_tab.style.display = 'block';
            join_tab.style.display = 'none';
            return;
        case 'join':
            about_tab.style.display = 'none';
            join_tab.style.display = 'block';
            return
    }
}