/* eslint-disable no-param-reassign */
export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const resizeCamera = (video: HTMLVideoElement | null, canvas: HTMLCanvasElement | null) => () => {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  if (video && canvas) {
    video.width = width;
    video.height = height;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    if (width / video.videoWidth < height / video.videoHeight) {
      canvas.style.width = '100vw';
      canvas.style.height = 'auto';
    } else {
      canvas.style.width = 'auto';
      canvas.style.height = '100vh';
    }
  }
};

// export const updateFlashAvailability = () => {
//   scanner.hasFlash().then(hasFlash => {
//     camHasFlash.textContent = hasFlash;
//     flashToggle.style.display = hasFlash ? 'inline-block' : 'none';
//   });
// };
