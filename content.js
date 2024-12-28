// Duyuruları çekecek basit bir content script
const duyuruListesi = [];
const duyurular = document.querySelectorAll('.duyuruAlan a');

duyurlar.forEach((duyuru) => {
    duyuruListesi.push({
        title: duyuru.textContent.trim(),
        link: duyuru.href
    });
});

// Çekilen duyuruları popup'a ilet
chrome.storage.local.set({ duyurular: duyuruListesi });
