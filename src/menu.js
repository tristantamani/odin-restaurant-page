const content = document.querySelector("#content");

export function displayMenu() {
    const container = document.createElement("div");
    const menu = document.createElement("div");
    const menuHeader = document.createElement("div");
    const menuTitle = document.createElement("div");
    const menuDescription = document.createElement("div");
    const menuContent = document.createElement("div");
    const menuLeft = document.createElement("div");
    const menuRight = document.createElement("div");

    container.classList.add("container");
    menu.classList.add("menu");
    menuHeader.classList.add("menu-header");
    menuTitle.classList.add("menu-title");
    menuDescription.classList.add("menu-description");
    menuContent.classList.add("menu-content");
    menuLeft.classList.add("menu-left");
    menuRight.classList.add("menu-right");

    menuTitle.textContent = "JOEZ MENU";
    menuDescription.textContent = "Good drinks. Better music. No unnecessary questions.";

    content.appendChild(container);
    container.appendChild(menu);
    menu.append(menuHeader, menuContent);
    menuHeader.append(menuTitle, menuDescription);
    menuContent.append(menuLeft, menuRight);

    function addMenuLeftCategory(label) {
        const category = document.createElement("div");
        category.classList.add("category");

        category.textContent = label;

        menuLeft.appendChild(category);
    }

    function addMenuRightCategory(label) {
        const category = document.createElement("div");
        category.classList.add("category");

        category.textContent = label;

        menuRight.appendChild(category);
    }

    function addMenuLeftItem(name, description, price) {
        const menuItem = document.createElement("div");
        const itemInfo = document.createElement("div");
        const itemName = document.createElement("div");
        const itemDescription = document.createElement("div");
        const itemPrice = document.createElement("div");

        menuItem.classList.add("menu-item");
        itemInfo.classList.add("item-info");
        itemName.classList.add("item-name");
        itemDescription.classList.add("item-description");
        itemPrice.classList.add("item-price");

        itemName.textContent = name;
        itemDescription.textContent = description;
        itemPrice.textContent = price;

        menuLeft.appendChild(menuItem);
        menuItem.append(itemInfo, itemPrice);
        itemInfo.append(itemName, itemDescription);
    }

    function addMenuRightItem(name, description, price) {
        const menuItem = document.createElement("div");
        const itemInfo = document.createElement("div");
        const itemName = document.createElement("div");
        const itemDescription = document.createElement("div");
        const itemPrice = document.createElement("div");

        menuItem.classList.add("menu-item");
        itemInfo.classList.add("item-info");
        itemName.classList.add("item-name");
        itemDescription.classList.add("item-description");
        itemPrice.classList.add("item-price");

        itemName.textContent = name;
        itemDescription.textContent = description;
        itemPrice.textContent = price;

        menuRight.appendChild(menuItem);
        menuItem.append(itemInfo, itemPrice);
        itemInfo.append(itemName, itemDescription);
    }

    addMenuLeftCategory("Cocktails")
    addMenuLeftItem("Sea Breeze", "A fruity cocktail Joe once accidentally made light.", "120 C¢");
    addMenuLeftItem("Martini with Three Olives", "A classic martini finished with exactly three olives.", "130 C¢");
    addMenuLeftItem("Deadly Devil's Special", "Joe's punishment drink for a failed performance.", "100 C¢");

    addMenuLeftCategory("Beer & Spirits");
    addMenuLeftItem("YAMAMETO", "The notorious tomato-based alcoholic drink.", "30 C¢");
    addMenuLeftItem("Yuki-hie (Cold Sake)", "Chilled sake for those who prefer their drinks cold.", "115 C¢");

    addMenuRightCategory("Non-Alcoholic Drinks");
    addMenuRightItem("Snow White Neko Princess", "Milk and sugar, surprisingly simple, absurdly popular.", "65 C¢");
    addMenuRightItem("Mixed Fruit Juice", "A fruity mixed juice offered by Joe.", "50 C¢");

    addMenuRightCategory("Food & Snacks");
    addMenuRightItem("NEKO's Homemade Stew", "NEKO's comforting homemade stew, prepared for Xenon.", "180 C¢");
    addMenuRightItem("Chicken Nuggets", "Crispy nuggets, recommended alongside YAMAMETO.", "60 C¢");
    addMenuRightItem("French Fries", "Golden fries, perfect for dipping into YAMAMETO.", "45 C¢");
}