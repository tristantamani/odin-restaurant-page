const content = document.querySelector("#content");

export function displayHomepage() {
    const container = document.createElement("div");
    const hero = document.createElement("div");
    const heroContent = document.createElement("div");
    const title = document.createElement("div");
    const lineBreak = document.createElement("br");
    const description = document.createElement("div");
    const heroBanner = document.createElement("div");
    const bannerImage = document.createElement("img");

    container.classList.add("container");
    hero.classList.add("hero");
    heroContent.classList.add("hero-content");
    title.classList.add("hero-title");
    description.classList.add("hero-description");
    heroBanner.classList.add("hero-banner");
    bannerImage.setAttribute(
        "src",
        "https://static.wikia.nocookie.net/cytus/images/a/ac/Joe001-song-select.gif/revision/latest?cb=20200416000308"
    );
    bannerImage.setAttribute("alt", "JOEZ Café Background");

    content.appendChild(container);
    container.appendChild(hero);
    hero.append(heroContent, heroBanner);
    heroContent.append(title, description);
    title.append("JOEZ Café of", lineBreak, "Node 08");
    description.append(
        `——On the surface it comes across as an ordinary pub, yet is in possession of over half
        the city's underground intel.`
    );
    heroBanner.appendChild(bannerImage);
}