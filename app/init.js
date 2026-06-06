console.log("init.js is connected");

import initEvents from "./events.js";
import { taskRendering, updateTaskCount } from "../ui/render.js";
import { saveChangelog } from "../ui/storage.js";
import { tasks } from "../data/state.js";

initEvents();

saveChangelog();
taskRendering(tasks); //Initial rendering of task
updateTaskCount(); // initial rendering of taskCount
