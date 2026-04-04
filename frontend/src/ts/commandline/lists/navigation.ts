import { navigate } from "../../controllers/route-controller";
import { isAuthenticated } from "../../firebase";
import { toggleFullscreen } from "../../utils/misc";
import { Command } from "../types";

const commands: Command[] = [
  {
    id: "viewAccount",
    display: "View Account Page",
    alias: "navigate go to stats",
    icon: "fa-user",
    exec: (): void => {
      isAuthenticated() ? void navigate("/account") : void navigate("/login");
    },
  },
  {
    id: "toggleFullscreen",
    display: "Toggle Fullscreen",
    icon: "fa-expand",
    exec: (): void => {
      toggleFullscreen();
    },
  },
];

export default commands;
