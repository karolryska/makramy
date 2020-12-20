import '../scss/main.scss';

 fetch("https://api.github.com/users/karolryska/repos?&sort=updated")
    .then(resp => resp.json())
    .then(resp => {
        let counter = 0;
        for (let repo of resp) {
            const {name, description, html_url, homepage} = repo;
            const projectsWrapper = document.querySelector(".projects__wrapper");
            const template = `<article class="project console">
            <div class="console__bar">
              <span class="console__dot"></span>
              <span class="console__dot"></span>
              <span class="console__dot"></span>
            </div>
            <div class="project__wrapper">
              <img class="project__icon" src="img/github-white.svg" alt="">
              <h3 class="project__grid">
                <span class="project__label">project:</span>
                <span class="project__title">${name}</span>
              </h3>
              <p class="project__grid">
                <span class="project__label">description:</span>
                <span class="project__text">${description}</span>
              </p>
              <p class="project__grid">
                <span class="project__label">demo:</span>
                <span class="project__text">&lt;<a class="project__link" 
                    href="${homepage}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="${name} - demo">see here</a>&gt;
                </span>
              </p>
              <p class="project__grid">
                <span class="project__label">github:</span>
                <span class="project__text">&lt;<a class="project__link" 
                    href="${html_url}"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="${name} - code">source code</a>&gt;
                </span>
              </p>
            </div>
          </article>`;
          counter++;
          if (counter < 5 && description && homepage) {projectsWrapper.innerHTML += template;}
        };
    })
    .catch(error => {
        console.log("Pobieranie danych nie powiodło się :(")
    })