window.onload = () => {
    document.querySelector('.content').style.display = 'none';
    document.querySelector('.dropdown').style.transform = 'rotateX(90deg)';
    setTimeout(function() {
        document.querySelector('.content').style.display = 'block';
        document.querySelector('.preloader-container').style.display = 'none';
    }, 1000);
}

window.onscroll = () => {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        document.querySelector('header').style.position = 'sticky';
        document.querySelector('header').style.top = '0';
        document.querySelector('.top').style.display = 'block';
    } else {
        document.querySelector('header').style.position = 'relative';
        document.querySelector('.top').style.display = 'none';
    }
}

document.querySelector('.top').onclick = () => {
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 0,
        right: 0,
        behavior: 'smooth'
    });
}

document.querySelector('.nav-toggle').onclick = () => {
    if (document.querySelector('.nav-content').style.transform === 'rotateX(0deg)') {
        document.querySelector('.nav-content').style.transform = 'rotateX(90deg)';
        document.querySelector('.nav-toggle').className = document.querySelector('.nav-toggle').className.replace(' nav-toggle-rotate', '');
    } else {
        document.querySelector('.nav-content').style.transform = 'rotateX(0deg)';
        document.querySelector('.nav-toggle').classList += ' nav-toggle-rotate';
    }
}

document.querySelectorAll('.search-toggle').forEach(searchBtn => {
    searchBtn.addEventListener('click', event => {
        if (document.querySelector('.search-container').style.transform === 'rotateX(0deg)') {
            document.querySelector('.search-container').style.transform = 'rotateX(90deg)';
        } else {
            document.querySelector('.search-container').style.transform = 'rotateX(0deg)';
        }
    })
});

document.querySelector('.dropdown-toggle').onclick = () => {
    if (document.querySelector('.dropdown').style.transform === 'rotateX(0deg)') {
        document.querySelector('.dropdown').style.transform = 'rotateX(90deg)';
        document.querySelector('.dropdown-toggle').innerHTML = "Categories <i class='fas fa-caret-down fa-sm fa-fw'></i>";
    } else {
        document.querySelector('.dropdown').style.transform = 'rotateX(0deg)';
        document.querySelector('.dropdown-toggle').innerHTML = "Categories <i class='fas fa-caret-up fa-sm fa-fw'></i>";
    }
}
