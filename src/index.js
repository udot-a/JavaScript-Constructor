import {Site} from "./classes/site";
import {Sidebar} from "./classes/sideBar";
import {model} from "../model";
import "../styles/main.css";

const site = new Site("#site");

const updateCallback = newBlock => {
  model.push(newBlock);
  site.render(model);
}

new Sidebar("#panel", updateCallback);

site.render(model);
