// Initialize Product Card Background Images
document.addEventListener('DOMContentLoaded', function () {
    // Get all product image divs with background images
    const productImages = document.querySelectorAll('.product-image-3d[data-bg-image]');

    productImages.forEach(function (imageDiv) {
        const bgImage = imageDiv.getAttribute('data-bg-image');
        if (bgImage) {
            imageDiv.style.backgroundImage = `url('${bgImage}')`;
        }
    });
});
