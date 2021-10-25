const post = [
    {
        id: 1,
        data_creazione: '4 mesi fa',
        testo: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam est asperiores voluptate excepturi reprehenderit molestias perspiciatis tempora suscipit temporibus provident minus, enim, quaerat animi? Qui hic incidunt obcaecati neque praesentium!',
        img: "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        miPiace: '<i class="fas fa-thumbs-up"></i>&nbsp;Mi Piace',
        like: 80,
        autore: {
            userName: 'Phil Mangione',
            img_profil: 'https://images.unsplash.com/photo-1635148977968-d1c32cd614b4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',

        }
        
    },
    {
        id: 3,
        data_creazione: '1 mese fa',
        testo: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam est asperiores voluptate excepturi reprehenderit molestias perspiciatis tempora suscipit temporibus provident minus, enim, quaerat animi? Qui hic incidunt obcaecati neque praesentium!',
        img: "https://images.unsplash.com/photo-1635127776423-3ab5c5224fe7?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        miPiace: '<i class="fas fa-thumbs-up"></i>&nbsp;Mi Piace',
        like: 80,
        autore: {
            userName: 'Marco Ingrosso',
            img_profil: "https://images.unsplash.com/photo-1635089764052-6ed86046861a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

        }

    },
    {
        id: 5,
        data_creazione: '8 mesi fa',
        testo: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam est asperiores voluptate excepturi reprehenderit molestias perspiciatis tempora suscipit temporibus provident minus, enim, quaerat animi? Qui hic incidunt obcaecati neque praesentium!',
        img: "https://images.unsplash.com/photo-1634993004666-b8111aa7714a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        miPiace: '<i class="fas fa-thumbs-up"></i>&nbsp;Mi Piace',
        like: 80,
        autore: {
            userName: 'Giulia Marrone',
            img_profil: 'https://images.unsplash.com/photo-1634921553465-321ab82ab4ee?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',

        }

    }
];
const postLike = [
    {
        id: 2,
        data_creazione: '2 mesi fa',
        testo: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam est asperiores voluptate excepturi reprehenderit molestias perspiciatis tempora suscipit temporibus provident minus, enim, quaerat animi? Qui hic incidunt obcaecati neque praesentium!',
        img: "https://images.unsplash.com/photo-1634913940926-dc70e78b394b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        miPiace: '<i class="fas fa-thumbs-down"></i>&nbsp;Non mi Piace più',
        like: 80,
        autore: {
            userName: 'Sofia Perlari',
            img_profil: "https://images.unsplash.com/photo-1635149122830-5aabbea9eacd?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

        }
    
    },
    {
        id: 4,
        data_creazione: '5 mesi fa',
        testo: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam est asperiores voluptate excepturi reprehenderit molestias perspiciatis tempora suscipit temporibus provident minus, enim, quaerat animi? Qui hic incidunt obcaecati neque praesentium!',
        img: "https://images.unsplash.com/photo-1634992718112-a2edce608ddc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        miPiace: '<i class="fas fa-thumbs-down"></i>&nbsp;Non mi Piace più',
        like: 80,
        autore: {
            userName: 'Luca Attanasio',
            img_profil: 'https://images.unsplash.com/photo-1635051796669-da5656d091bc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',

        }

    },
]

renderTeamElements(post,postLike)


function renderTeamMember(member, member1) {
    return `
    <div class="post">
            <div class="header_post">
                <div>
                    <img class="img-profilo" width="60" height="60" src="${member.autore.img_profil}" alt="">
                </div>
                <div>
                    <h4>${member.autore.userName}</h4>
                    <p class="text_header">${member.data_creazione}</p>
                </div>
            </div>
            <div class="main_post">
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam est asperiores voluptate excepturi reprehenderit molestias perspiciatis tempora suscipit temporibus provident minus, enim, quaerat animi? Qui hic incidunt obcaecati neque praesentium!</p>
                </div>
                <div>
                    <img class="img-main" src="${member.img}" alt="">
                </div>
            </div>
            <div class="footer_post">
                <div>
                    <button>${member.miPiace}</button>
                </div>
                <div>
                    <p class="text_footer">Piace a <strong>80</strong> persone</p>
                </div>
            </div>
        </div>`

  }
  






function renderTeamElements(post,postLike) {
    
    for (let index = 0; index < post.length && postLike.length; index++) {
      const member = post[index];
      const member1 = postLike[index]
  
      document.querySelector('.row').insertAdjacentHTML('beforeend', renderTeamMember(member))
      document.querySelector('.row').insertAdjacentHTML('beforeend', renderTeamMember(member1))
  
    }
  }
  