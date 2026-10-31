const content = document.querySelector("#content");

export function displayAbout() {
    const container = document.createElement("div");
    const about = document.createElement("div");
    const aboutTitle = document.createElement("div");
    const aboutContent = document.createElement("div");
    const aboutBanner = document.createElement("div");
    const aboutDescription = document.createElement("div");
    const bannerImage = document.createElement("img");
    const blockquote = document.createElement("blockquote");

    container.classList.add("container");
    about.classList.add("about");
    aboutTitle.classList.add("about-title");
    aboutContent.classList.add("about-content");
    aboutBanner.classList.add("about-banner");
    aboutDescription.classList.add("about-description");
    bannerImage.setAttribute(
        "src",
        "https://static.wikia.nocookie.net/cytus/images/0/0b/JoeBadEnding.png/revision/latest?cb=20200402144524"
    )
    bannerImage.setAttribute("alt", "JOEZ Café Background");
    blockquote.classList.add("italic");

    aboutTitle.textContent = "ABOUT US"

    blockquote.textContent = `"What transpired in the past to push cynical JOE over the edge, leading to undeniable
                            association with
                            notorious gangs and involvement of cross Node criminal activity past the point of no
                            return? Malicious
                            intentions lurking within the metropolis' dark corners are just waiting for the right
                            moment to bring
                            themselves to the light."`

    content.appendChild(container);
    container.appendChild(about);
    about.append(aboutTitle, aboutContent);
    aboutContent.append(aboutBanner, aboutDescription);
    aboutBanner.appendChild(bannerImage);
    aboutDescription.appendChild(blockquote);

    addParagraph(
        `Joe is a naturally jokester who never takes anything seriously, even if he is asked to.
                            He views
                            most things as a joke, and just wishes to have fun with his acquaintances in order to
                            liven up the
                            atmosphere. This is why most people are either annoyed by Joe, or find him comforting to
                            be around.`
    )

    addParagraph(
        `Despite this, Joe deals with a great amount of pressure and responsibility, having to
                            deal with
                            the underground intel that passes through JOEZ Café and making sure everything runs
                            smoothly. He
                            keeps his job a secret from everyone, even those he is closest with, knowing that he
                            would be
                            ridiculed, hated, or even abandoned if they found out he was taking part in such
                            lucrative deals.`
    )

    function addParagraph(text) {
        const paragraph = document.createElement("p");

        paragraph.textContent = text;
        aboutDescription.appendChild(paragraph);
    }
}