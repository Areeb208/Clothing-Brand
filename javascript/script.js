const img = document.getElementById("cloth");
const title = document.getElementById("ClothTitle");
const desc = document.getElementById("ClothDesc");

const variations = [
    {
        img: "./images/mid-alloy.png",
        title: "Midnight Alloy",
        desc: "A shadow-layer built for control and confidence.",
        bg: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(48,48,48,1) 50%, rgba(0,0,0,1) 100%)"
    },
    {
        img: "./images/ember-flame.png",
        title: "Ember Flare",
        desc: "Burn through the night with radiant intensity.",
        bg: "linear-gradient(0deg,rgba(99, 0, 22, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(99, 0, 22, 1) 100%"
    },
    {
        img: "./images/phantom-ice.png",
        title: "Phantom Ice",
        desc: "Cold presence — silent precision.",
        bg: "linear-gradient(0deg,rgba(22, 43, 58, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(22, 43, 58, 1) 100%"
    }
];

let current = 0;

function switchVariation(dir) {
    img.classList.remove("slide-in");
    img.classList.add(dir === "right" ? "slide-out-right" : "slide-out-left");

    setTimeout(() => {
        current = (dir === "right")
            ? (current + 1) % variations.length
            : (current - 1 + variations.length) % variations.length;

        const v = variations[current];
        img.src = v.img;
        title.textContent = v.title;
        desc.textContent = v.desc;
        document.body.style.background = v.bg;

        img.classList.remove("slide-out-right", "slide-out-left");
        void img.offsetWidth;
        img.classList.add("slide-in");

    }, 350);
}

document.getElementById("rightArrow").onclick = () => switchVariation("right");
document.getElementById("leftArrow").onclick = () => switchVariation("left");
