    const darkModeToggle = document.querySelector('.color-mode');
    const projectImages = document.querySelectorAll('.project-image');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        projectImages.forEach(image => {
            const originalSrc = image.src;
            const darkModeSrc = originalSrc.replace('/light-mode/', '/dark-mode/');
            image.src = document.body.classList.contains('dark-mode') ? darkModeSrc : originalSrc;
        });
    });
