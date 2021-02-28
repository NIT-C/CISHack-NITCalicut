import { Theme } from './symbols';

export const lightTheme: Theme = {
  name: 'light',
  properties: {
    '--background': 'white',
    '--main-text':'rgb(40, 40, 41)',
    '--background-counter':'black',
    '--main-text-counter':'white',
    '--light-grey':'#f1f3f5',
    '--on-background': '#000',
    '--primary': '#1976d2',
    '--on-primary': '#000',
    '--dark-grey':'#cfd4d7',
    '--medium-dark':'white',
    //home themes

    // '--footer-blue':'#e4e5e6',
    '--footer-blue' : '#e9e9ea',
    //question pannel 

    '--pallet':'#90e7dd',
    //topic view componets
    '--pure-white':'white',
    //question view components 
    '--question-back':'#ffffff',
    '--reaction-but':'#dfdddb',
    '--link-color':'blue',

    // ask question components
    '--white-grey': 'white',
    '--form-title' : '#000046',

    '--calendar' : '#2e4052',

    // form color parameters

    '--form-field' : '#3700B3',
    '--form-field-pre' : '#949494',
    '--form-field-ripple' : '#3700B3',

    // ask question title

    '--ask-ques-title':"black",
    '--form-user-texts': '#673ab7',
    '--body-field-box' :'#524469',

    //for account section
    '--selected-color':'#0077cf'
  }
};
