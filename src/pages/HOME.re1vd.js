// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {
  const allImages = $w('Image');

  allImages.forEach((img, index) => {
    if (index > 0) {
      img.src = img.src + '?lazy=1';
    }
  });
});
