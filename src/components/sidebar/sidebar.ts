import classes from './sidebar.module.css'
import caretdownSvg from '../../assets/caretdown.svg'

let sidebar: string = `
    <aside class=${classes.sidebar}>
    <div class="${classes.column} ${classes.entityMenu}">
        <form class="${classes.form}">
            <input type="search" placeholder="Search..." class="${classes.search}"/>
            <button type="submit" class="${classes.searchButton}"/>
        </form>
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
                <input type="checkbox" class="${classes.draw} sidebar__checkbox"/>
                <label for="draw" class="sidebar__checkbox__label"/>
            </div>
            <div class=${classes.container}>
                <input type="checkbox" class="${classes.eraser} sidebar__checkbox"/>
                <label for="eraser" class='sidebar__checkbox__label'/>
            </div>
                <input type="color" class=${classes.color} />
                <button class=${classes.erase}>
            </button>
        </div>
        <button class=${classes.capture}>
        </button>
    </div>
</aside>
`

export default sidebar