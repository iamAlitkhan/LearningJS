let menuUL = document.getElementById('menuUL')

let dishItems = dishes.map(function (dish) {
    let dishItem = `<li>
        <p><img class="photo" src="${dish.imageURL}"/></p>
        <b>${dish.title}</b>
        <i>${dish.description}</i>
        <i>${dish.price}</i>

    </li>`
    return dishItem
})
menuUL.innerHTML=dishItems.join("")
console.log(dishItems)