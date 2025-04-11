import FOG from "vanta/dist/vanta.fog.min.js";
import * as THREE from "three";

export const startFog = () =>
	FOG({
		el: "#background",
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		minHeight: 200.0,
		minWidth: 200.0,
		highlightColor: 0x1900ff,
		midtoneColor: 0xff0000,
		lowlightColor: 0xf667ff,
		baseColor: 0x0,
		THREE: THREE,
	});
