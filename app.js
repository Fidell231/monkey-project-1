const angry = document.querySelector ('.closed')
const happy = document.querySelector ('.open')

//Add event Listener//
angry.addEventListener('click', () => {
if (happy.classList.contains('open')) {
    happy.classList.add('active');
    angry.classList.remove('active');
}
});

happy.addEventListener('click', () => {
    if (angry.classList.contains('closed')) {
        angry.classList.add('active');
        happy.classList.remove('active');
    }
});