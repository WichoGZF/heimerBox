import './style.css'
import sidebar from './components/sidebar/sidebar'
import rift from './components/rift/rift'
import heimLogo from './assets/heimLogo.png'
import caretrightSvg from './assets/caretright.svg'
import caretdownSvg from './assets/caretdown.svg'
// @ts-ignore
import { championsArray } from './championIndex.js'
// @ts-ignore
import { minionsArray } from './minionsIndex.js'
// @ts-ignore
import { neutralsArray } from './neutralsIndex.js'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header>
    <img src=${heimLogo} alt="App logotipe" id='logotipe'/>
    <h2>Heimer's box</h2>
  </header>
  <main>
    ${sidebar}
    ${rift} 
  </main>
  <footer>
    <p>Heimer's box by Luis Gustavo 2023 ©</p>
    <p>
      Heimer's box isn’t endorsed by Riot Games and doesn’t reflect the views or
      opinions of Riot Games or anyone officially involved in producing or
      managing League of Legends. League of Legends and Riot Games are
      trademarks or registered trademarks of Riot Games, Inc. League of Legends
      © Riot Games, Inc.
    </p>
  </footer>
`
//Sidebar
//Setting up player list. 
let championsOpen: boolean = false;
const championsButtonEl = document.querySelector<HTMLElement>('#champions')!;
const championsContainerEl = document.querySelector<HTMLElement>('#champions-list')!;
const championsButtonImgEl: HTMLImageElement = document.querySelector<HTMLImageElement>('#champions-button__image')!;

championsContainerEl.appendChild(sidebarGetChildren(championsArray, 'sidebar__champion-container__champion'));

championsButtonEl.addEventListener('click', championsButtonHandler);

let minionsOpen: boolean = false;
const minionsButtonEl = document.querySelector<HTMLElement>('#minions')!;
const minionsContainerEl = document.querySelector<HTMLElement>('#minions-list')!;
const minionsButtonImgEl: HTMLImageElement = document.querySelector<HTMLImageElement>('#minions-button__image')!;

minionsContainerEl.appendChild(sidebarGetChildren(minionsArray, 'sidebar__champion-container__champion'));


minionsButtonEl.addEventListener('click', minionsButtonHandler)

let neutralOpen: boolean = false;
const neutralsButtonEl = document.querySelector<HTMLElement>('#neutrals')!;
const neutralsContainerEl = document.querySelector<HTMLElement>('#neutrals-list')!;
const neutralsButtonImgEl: HTMLImageElement = document.querySelector<HTMLImageElement>('#neutrals-button__image')!;

neutralsContainerEl.appendChild(sidebarGetChildren(neutralsArray, 'sidebar__champion-container__champion'));

neutralsButtonEl.addEventListener('click', neutralsButtonHandler)
//For side bar open and close


//Function that appends divs with the specified background image array made into a function for 
//reusability. 
function sidebarGetChildren(imageArray: any[], classlist: string) {
  let tempFragment = new DocumentFragment();
  imageArray.forEach((image: any) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add(classlist);
    newDiv.style.backgroundImage = `url(${image.path})`
    tempFragment.appendChild(newDiv)
  });
  return tempFragment
}

function championsButtonHandler(e: MouseEvent) {
  if (championsOpen) {
    championsOpen = false;
    championsContainerEl.style.display = 'flex'
    championsButtonImgEl.src = caretrightSvg
  }
  else {
    championsOpen = true;
    championsContainerEl.style.display = 'none'
    championsButtonImgEl.src = caretdownSvg
  }
}

function minionsButtonHandler(e: MouseEvent) {
  if (minionsOpen) {
    minionsOpen = false;
    minionsContainerEl.style.display = 'flex'
    minionsButtonImgEl.src = caretrightSvg
  }
  else {
    minionsOpen = true;
    minionsContainerEl.style.display = 'none  '
    minionsButtonImgEl.src = caretdownSvg

  }
}

function neutralsButtonHandler(e: MouseEvent) {
  if (neutralOpen) {
    neutralOpen = false;
    neutralsContainerEl.style.display = 'flex'
    neutralsButtonImgEl.src = caretrightSvg
  }
  else {
    neutralOpen = true;
    neutralsContainerEl.style.display = 'none'
    neutralsButtonImgEl.src = caretdownSvg;
  }
}