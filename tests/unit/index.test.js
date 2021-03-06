import { assert } from "chai";
import Camera from "../../src/js/components/Camera";

global.AFRAME = {
  components: {
    camera: {},
    geometry: {},
    material: {},
    position: {},
    scale: {},
    sound: {}
  }
};

describe("Components", () => {
  it("add Camera to DOM", () => {
    console.log(`${Camera}`);
    assert.typeOf(Camera, "function");
  });
});
