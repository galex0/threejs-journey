import * as dat from "lil-gui" // in the lesson this is dat.gui, but it doesn't exist/work for me

export default class Debug
{
    constructor()
    {
        this.active = window.location.hash === '#debug'

        if(this.active)
        {
            this.ui = new dat.GUI()
        }
    }
}