const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const scanButton = document.getElementById('scan-button');
const stopButton = document.getElementById('stop-button');
const output = document.getElementById('output-text');

let stream;

// Start webcam
async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true })
    video.srcObject = stream;
  } catch (err) {
    alert('Cannot access camera: ' + err.message);
  }
}

// Stop webcam
function stopCamera() {
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    video.srcObject = null;
  }
}

// Capture frame and run OCR
async function scanLabel() {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  output.textContent = "Scanning image... Please wait.";

  const { data: { text } } = await Tesseract.recognize(canvas, 'eng', {
    logger: info => console.log(info)
  });

  output.textContent = text.trim() || "No text detected.";
}

scanButton.addEventListener('click', scanLabel);
stopButton.addEventListener('click', stopCamera);

window.addEventListener('load', startCamera);