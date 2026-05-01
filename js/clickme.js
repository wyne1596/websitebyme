function handleClick(element) {
    element.classList.remove('is-pulsing');
    setTimeout(() => {
        element.classList.add('is-pulsing');
    }, 10000); 
}
