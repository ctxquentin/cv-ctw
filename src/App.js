import React, { Component } from 'react'

import CV from 'react-cv'

class App extends Component {
  render () {
    return (
        <CV
            personalData={{
              name: 'Quentin COURTHEOUX',
              title: 'Développeur Web',
              contacts: [
                { type: 'email', value: 'ctxquentin@gmail.com' },
                { type: 'location', value: 'Paris 15' },
                { type: 'age', value: '26 ans' }
              ]}}
            sections= {[{
              type: 'text',
              title: 'Profil',
              content: 'Passionné d\'informatique depuis toujours, j\'ai commencé à me former en autodidacte en 2018 au développement web. ' +
                'Après une première expérience professionnelle réussie, je suis à la recherche de nouveaux défis dans lesquels mettre ' +
                'à profit mes compétences tout en continuant à évoluer.',
              icon: 'usertie'
            },
            {
                type: 'experiences-list',
                title: 'Experiences',
                icon: 'tasks',
                items: [
                    {
                        title: 'Stage développeur web Junior',
                        company: 'Maespirit',
                        description : 'Un premier stage d\'un mois dans lequel j\'ai pu m\'initier au développement web en entreprise',
                        datesBetween : '2018',
                        descriptionTags: ['Javascript', 'PHP']
                    },
                    {
                        title: 'Alternance en développement d\'application web',
                        company: 'Maespirit',
                        description : 'Une alternance dans le but de compléter ma formation de Développeur intégrateur en réalisation d\'application web',
                        datesBetween : '07/2018  -  07/2019',
                        descriptionTags: ['Javascript', 'PHP', 'MYSQL', 'HTML']
                    },
                    {
                        title: 'Développeur web Junior',
                        company: 'Maespirit',
                        description : 'Après un an d\'alternance réussi et ma formation complétée, j\'ai eu la chance de continuer a évoluer au sein de Maespirit, ' +
                            'une agence digitale',
                        datesBetween : '07/2019  -  04/2021',
                        descriptionTags: ['Javascript', 'PHP', 'MYSQL', 'HTML', 'React']
                    }
                ]
            },
            {
                type: 'common-list',
                title: 'Diplômes',
                icon: 'graduation',
                items: [
                    {
                        title: 'Titre RNCP Développeur Web',
                        authority: 'Formation certifiante',
                        rightSide: '07/2018 - 07/2019'
                    },
                    {
                        title: 'BAC PRO Accueil Relations clients et Usagers',
                        authority: 'Lycée Beaugrenelle',
                        rightSide: '2012 - 2015'
                    },
                    {
                        title: 'Seconde Pro ELEC',
                        authority: 'Lycée Louis Armand',
                        rightSide: '2010 - 2011'
                    }

                ]
            },
            {
                type: 'tag-list',
                title: 'Compétences',
                icon: 'rocket',
                items: [
                    'PHP (Doctrine, MVC)', 'Javascript (React, NodeJS, JQuery)', 'Database (MySQL, Firebase, Elasticsearch)',
                    'Docker', 'Git/GitHub', 'Linux'
                ]
            },
                {
                    type: 'tag-list',
                    title: 'Hobbies & Loisirs',
                    icon: 'cubes',
                    items: ['Informatique', 'Astronomie', 'Slackline', 'Escalade']
                }
            ]}
            branding={false} // or false to hide it.
        />
    )
  }
};

export default App;

