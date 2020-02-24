import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  workExperience = [
    {
      id: 1,
      company: 'Qualica Technologies',
      title: 'Senior Software Engineer (UI)',
      start: 'January 2019',
      current: true,
      description: 'FrontEnd Software Engineer Responsible for Radix Bank Platform (Customer Web Portal, Back\n' +
        '          Office Portal, Customer Mobile Application and Value Added Services Platform (Web, Mobile))'
    },
    {
      id: 2,
      company: 'Infoware Studios',
      title: 'Lead Software Engineer',
      start: 'December 2015',
      end: 'December 2018',
      current: false,
      description: 'This was my first full stack engineering job, which exposed me to all things software engineering\n' +
        '          including solutions and software architecture, DevOps, Project Proposals, Team Coordination,\n' +
        '          scripting and about 90% of the languages and platforms I know to this day'
    },
    {
      id: 3,
      company: 'Eskom (Kusile Power Station)',
      title: 'Information Management Officer',
      start: 'January 2015',
      end: 'November 2015',
      current: false,
      description: 'At Kusile I got full exposure to IT Infrastructure planning, implementation, maintenance, team\n' +
        '          management, support, project planning and procurement which involved dealing with various service\n' +
        '          providers in the industry'
    },
  ];
  education = [
    {
      id: 1,
      institution: 'Central University Of Technology Free State',
      qualification: 'National Diploma Computer Engineering',
      date: 'November 2014',
      description: 'Since I started working for my in-service training in 2015, I have been so caught up in the\n' +
        '          working world and development of my skills through experience that I have not been able to go\n' +
        '          back and finish the 1 module outstanding for me to receive my National Diploma'
    },
    {
      id: 2,
      institution: 'ST Thomas Acquinas School',
      qualification: 'National Senior Certificate (Matric)',
      date: 'November 2010',
      description: 'High School'
    }
  ];
  technologies = [
    {id: 1, name: 'AngularJS', level: 'ninety-five'},
    {id: 1, name: 'Angular 2 - 9', level: 'ninety-five'},
    {id: 2, name: 'React JS', level: 'seventy'},
    {id: 3, name: 'Nativescript', level: 'sixty'},
    {id: 4, name: 'React Native', level: 'eighty'},
    {id: 5, name: 'Ionic 1 - 4', level: 'ninety'},
    {id: 6, name: 'NodeJS', level: 'eighty'},
    {id: 6, name: 'Django', level: 'eighty'},
    {id: 6, name: 'Smarty PHP', level: 'sixty-five'},
    {id: 6, name: 'Flutter', level: 'seventy'},
    {id: 6, name: 'Xamarin', level: 'fifty'},
    {id: 6, name: 'ASP.Net', level: 'sixty'}
  ];
  skills = [
    {id: 1, name: 'Solutions Architecture', level: 'eighty'},
    {id: 2, name: 'Technical Proposals', level: 'seventy'},
    {id: 3, name: 'Team Lead', level: 'fifty-five'},
    {id: 4, name: 'Project Planning', level: 'hundred'},
    {id: 5, name: 'Project Management', level: 'eighty'},
    {id: 6, name: 'Data Modeling', level: 'eighty'},
    {id: 6, name: 'Database Administration', level: 'eighty'},
    {id: 6, name: 'Cyber Security', level: 'seventy'},
    {id: 6, name: 'Artificial Intelligence', level: 'fifty'},
    {id: 6, name: 'Electronics', level: 'eighty'},
    {id: 6, name: 'Server Administration', level: 'eighty'}
  ];
  languages = [
    {id: 1, name: 'Java', level: 'sixty-five'},
    {id: 2, name: 'C#', level: 'seventy'},
    {id: 3, name: 'C', level: 'fifty-five'},
    {id: 4, name: 'C++', level: 'hundred'},
    {id: 5, name: 'Assembler', level: 'eighty'},
    {id: 6, name: 'GO', level: 'eighty'},
    {id: 7, name: 'PHP', level: 'eighty'},
    {id: 8, name: 'Visual Basic', level: 'eighty'},
    {id: 9, name: 'Python', level: 'eighty'},
    {id: 10, name: 'Javascript', level: 'eighty'},
    {id: 11, name: 'Typescript', level: 'eighty'},
    {id: 12, name: 'HTMl', level: 'eighty'},
    {id: 13, name: 'JADE', level: 'eighty'},
    {id: 14, name: 'PUG', level: 'eighty'},
  ];
  databases = [
    {id: 1, name: 'MySQL', level: 'sixty-five'},
    {id: 2, name: 'MS SQL', level: 'seventy'},
    {id: 3, name: 'Postgres', level: 'fifty-five'},
    {id: 4, name: 'MongoDB', level: 'hundred'},
    {id: 5, name: 'MariaDB', level: 'eighty'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
