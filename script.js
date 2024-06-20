const webCamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");
const webcam = new Webcam(webCamElement,"user",canvasElement);
webcam.start();

function takePicture() {
    let picture = webcam.snap();
    document.querySelector("a").setAttribute("href", picture);
}

  