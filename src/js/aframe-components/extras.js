//import AFRAME, {THREE} from "aframe";
import AFRAME from "../../temp/aframe-master";
import extras from "aframe-extras";

// extras.misc.registerAll();
AFRAME.registerComponent("grab", extras.misc.grab);
AFRAME.registerComponent("sphere-collider", extras.misc["sphere-collider"]);
