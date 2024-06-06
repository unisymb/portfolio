document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const navContainer = document.querySelector('.navcontainer');

    // Track submenu states
    const submenus = {
        articles: false,
        contacts: false
    };

    // Toggle main menu visibility
    menu.addEventListener('click', function () {
        navContainer.classList.toggle('show');
    });

    // Handle nested submenus
    const articleNav = document.querySelector('.nav.article');
    const articlesSubmenu = document.querySelector('.articles');

    articleNav.addEventListener('click', function () {
        articlesSubmenu.classList.toggle('show');
        submenus.articles = articlesSubmenu.classList.contains('show');
    });

    const contactNav = document.querySelector('.nav.contact');
    const contactsSubmenu = document.querySelector('.contacts');

    contactNav.addEventListener('click', function () {
        contactsSubmenu.classList.toggle('show');
        submenus.contacts = contactsSubmenu.classList.contains('show');
    });

    // Ensure submenus are shown based on their state when the main menu is shown
    menu.addEventListener('click', function () {
        setTimeout(() => {
            if (navContainer.classList.contains('show')) {
                if (submenus.articles) articlesSubmenu.classList.add('show');
                if (submenus.contacts) contactsSubmenu.classList.add('show');
            } else {
                articlesSubmenu.classList.remove('show');
                contactsSubmenu.classList.remove('show');
            }
        }, 1); // Delay to wait for the main menu animation
    });
});
// pofile

document.addEventListener('DOMContentLoaded', () => {
    // Check if the profile-specific element exists
    const profileSection = document.querySelector('#profile');

    if (profileSection) {
        // Function to show an alert when a project is clicked
        const projectLinks = document.querySelectorAll('.project .button');
        projectLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent the default link behavior
                alert('More information about this project will be shown.');
            });
        });

        // Function to toggle the visibility of the projects section
        const toggleProjectsButton = document.createElement('button');
        toggleProjectsButton.textContent = 'Toggle Projects Section';
        toggleProjectsButton.style.display = 'block';
        toggleProjectsButton.style.margin = '20px auto';
        toggleProjectsButton.style.padding = '10px 20px';
        toggleProjectsButton.style.backgroundColor = '#333';
        toggleProjectsButton.style.color = '#fff';
        toggleProjectsButton.style.border = 'none';
        toggleProjectsButton.style.borderRadius = '5px';
        toggleProjectsButton.style.cursor = 'pointer';

        const projectsSection = document.querySelector('#projects');

        toggleProjectsButton.addEventListener('click', () => {
            if (projectsSection.style.display === 'none' || projectsSection.style.display === '') {
                projectsSection.style.display = 'block';
            } else {
                projectsSection.style.display = 'none';
            }
        });

        document.body.insertBefore(toggleProjectsButton, projectsSection);
    }
});
// adjust width

//about
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.querySelector('.about');
    const iframe = document.querySelector('.mainiframe');

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior

        // Insert the src value into the iframe
        iframe.src = 'about.html'; // Replace 'about.html' with your actual about page URL
        // Show the about section
        //document.getElementById('about').style.display = 'block';
    });
});

