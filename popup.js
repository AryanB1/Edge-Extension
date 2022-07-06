document.getElementById("help").addEventListener('click', () => {
    chrome.tabs.create({
        url: 'install.html'
});
});
document.getElementById("tabMover").addEventListener('click', async () => {
    document.getElementById("tabMover").style.backgroundColor = 'blue';
    document.getElementById("tabMover").style.color = 'white';
    moveTab();
});
document.getElementById("tabCloser").addEventListener('click', async () => {
    document.getElementById("tabCloser").style.backgroundColor = 'blue';
    document.getElementById("tabCloser").style.color = 'white';
    closeTab();
});
document.getElementById("tabPinner").addEventListener('click', async () => {
    document.getElementById("tabPinner").style.backgroundColor = 'blue';
    document.getElementById("tabPinner").style.color = 'white';
    pinTab();
});
document.getElementById("tabReloader").addEventListener('click', async () => {
    document.getElementById("tabReloader").style.backgroundColor = 'blue';
    document.getElementById("tabReloader").style.color = 'white';
    reloadTab();
});
document.getElementById("Google").addEventListener('click', async () => {
    document.getElementById("Google").style.backgroundColor = 'darkgreen';
    document.getElementById("Google").style.color = 'white';
    openGoogle();
});
document.getElementById("tabDuplicate").addEventListener('click', async () => {
    document.getElementById("tabDuplicate").style.backgroundColor = 'darkgreen';
    document.getElementById("tabDuplicate").style.color = 'white';
    duplicateTab();
});
document.getElementById("Drive").addEventListener('click', async () => {
    document.getElementById("Drive").style.backgroundColor = 'darkgreen';
    document.getElementById("Drive").style.color = 'white';
    openDrive();
});
document.getElementById("Office").addEventListener('click', async () => {
    document.getElementById("Office").style.backgroundColor = 'darkgreen';
    document.getElementById("Office").style.color = 'white';
    openOffice();
});
async function moveTab() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs[0].id);
        chrome.tabs.move(tabs[0].id, {index: 0});
      });
}
async function closeTab() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs[0].id);
        chrome.tabs.remove(tabs[0].id);
      });
}
async function pinTab() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs[0].id);
        chrome.tabs.update(tabs[0].id, {pinned: true});
      });
}
async function reloadTab() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs[0].id);
        chrome.tabs.reload(tabs[0].id, {bypassCache: true});
      });
}
async function openGoogle() {
    chrome.tabs.create({url: 'https://www.google.com/'});
}
async function duplicateTab() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs[0].id);
        chrome.tabs.duplicate(tabs[0].id);
      });
}
async function openDrive() {
    chrome.tabs.create({url: 'https://www.drive.google.com/'});
}
async function openOffice() {
    chrome.tabs.create({url: 'https://www.office.com/'});
}