function refreshExistingTab() {
    location.reload()
}

function toggleSideNav(x) {

    x.classList.toggle("change");
    let thirty_percent_width = window.innerWidth * 0.3;
    let sidenav = document.querySelector('.content');
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

if (document.addEventListener !== undefined) {
    // Not IE
    document.addEventListener('click', checkSelection, false);
} else {
    // IE
    document.attachEvent('onclick', checkSelection);
}

function checkSelection() {
    var sel = {};
    if (window.getSelection) {
        // Mozilla
        sel = window.getSelection();
    } else if (document.selection) {
        // IE
        sel = document.selection.createRange();
    }

    // Mozilla
    if (sel.rangeCount) {
        sel.removeAllRanges();
        return;
    }

    // IE
    if (sel.text > '') {
        document.selection.empty();
        return;
    }
}