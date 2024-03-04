console.log('funziona');

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  // Otteniamo il riferimento al contenitore
  const teamContainer = document.getElementById('team-container');
  // Creiamo una card per ogni membro del team
  team.forEach(member => {
    // Creazione del contenitore della card
    const memberCard = document.createElement('div');
    // Aggiungiamo delle classi per la griglia con Bootstrap
    memberCard.classList.add('col-lg-4', 'col-md-6', 'member-card');
    //Costruiamo l'hmtl interno delle card
    memberCard.innerHTML = `
      <div class="card bg-info text-center ">
        <img class="card-img-top " src="./assets/img/${member.image}">
        <div class="card-body">
          <h5 class="card-title">${member.name}</h5>
          <p class="card-text">${member.role}</p>
        </div>
      </div>
    `;
    // Aggiunta della card al contenitore 
    teamContainer.appendChild(memberCard);
  });