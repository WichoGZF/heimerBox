import classes from './sidebar.module.css'
import caretdownSvg from '../../assets/caretdown.svg'

let sidebar: string = `
    <aside class=${classes.sidebar}>
    <div class="${classes.column} ${classes.entityMenu}">
        <div>
        <form class="${classes.form}" id="search-form">
            <input type="search" placeholder="Search..." class=${classes.search} id="search-input"/>
            <button type="submit" class="${classes.searchButton}" id="search-button"/>
        </form>
        </div>
        <div id='search-result' class=${classes.itemContainer}></div>
        <button class="${classes.open}" id="champions">
            <img src=${caretdownSvg} alt="" id="champions-button__image"/>
            <p>Champions</p>
        </button>
        <div id='champions-list' class=${classes.itemContainer}> </div>
        <button class=${classes.open} id="minions">
            <img src=${caretdownSvg} alt="" id="minions-button__image"/>
            <p>Minions</p>
        </button>
        <div id='minions-list' class=${classes.itemContainer}> </div>
        <button class=${classes.open} id="neutrals">
            <img src=${caretdownSvg} alt="" id="neutrals-button__image"/>
            <p>Neutral Monsters</p>
        </button>
        <div id='neutrals-list' class=${classes.itemContainer}> </div>
    </div>
    <div class=${classes.actionColumn}>
        <div class=${classes.container}>
            <div class=${classes.container}>
                <input type="checkbox" id='pencil-checkbox' class="${classes.draw} sidebar__checkbox"/>
                <label for="draw" class="sidebar__checkbox__label"/>
            </div>
            <div class=${classes.container}>
                <input type="checkbox" id='erase-checkbox' class="${classes.eraser} sidebar__checkbox"/>
                <label for="eraser" class='sidebar__checkbox__label'/>
            </div>
                <input type="color" id='color-input' class=${classes.color} />
                <button id='erase-button' class=${classes.erase}>
            </button>
        </div>
        <button id='screenshot-button' class=${classes.capture}>
        </button>
    </div>
</aside>
`

export default sidebar