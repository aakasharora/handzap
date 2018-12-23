function toggleProfileBox(show) {
    let element = document.getElementsByClassName("profile-detail")[0];
    element.style.display = show ? "block" : "none";
}

function setTitle(newTitle) {
    let title = document.getElementsByClassName("title")[0];
    title.innerText = newTitle;

    // change active class
    let ul = document.getElementsByClassName("nav")[0];
    let items = ul.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.innerText == newTitle) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');            
        }
    }


}