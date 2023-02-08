var imageThumbs = document.getElementById("image-thumbs");
for (var i = 1; i <= 6; i++) {
    var thumb = document.createElement("img");
    thumb.src = "gallery/image" + i + ".webp";
    thumb.alt = "Image " + i;
}