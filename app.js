const sections = document.querySelectorAll('.container');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
    // Active button
    sectBtn.forEach(btn => {
        btn.addEventListener('click', function () {
            sectBtn.forEach(btn => btn.classList.remove('active-btn'));
            this.classList.add('active-btn');
        });
    });

    // Active section
    allSections.addEventListener('click', function (e) {
        const id = e.target.dataset.id;
        if (id) {            
            sections.forEach(section => section.classList.remove('active'));

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    // Theme switch
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('dark-mode');
    })
}

pageTransitions();