chrome.storage.local.get("duyurular", (data) => {
    const duyurularListesi = data.duyurular || [];
    const listContainer = document.getElementById("duyurularListesi");

    if (duyurularListesi.length === 0) {
        listContainer.innerHTML = "<li>Henüz duyuru bulunmamaktadır.</li>";
    } else {
        duyurularListesi.forEach(duyuru => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${duyuru.link}" target="_blank">${duyuru.title}</a>`;
            listContainer.appendChild(li);
        });
    }
});
