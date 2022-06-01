const coffeOrdersUL = document.getElementById('coffeOrdersUL')

function getCoffeOrders(coffeeOrdersFetched) {
    let request = new XMLHttpRequest()
    request.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders')
    request.addEventListener('load', function () {
        const coffeeOrders = JSON.parse(this.responseText)
        coffeeOrdersFetched(coffeeOrders)
    })
    request.send()
}

function displayCoffeeOrders(coffeeOrders) {
    const coffeeItems = coffeeOrders.map(function (coffee) {
        return `<li>${coffee.email}</li>
        <li>${coffee.type}</li>
        <li>${coffee.size}</li>
        <li>${coffee.price}</li>`
    })
    coffeOrdersUL.innerHTML = coffeeItems.join('')
}

getCoffeOrders(function (coffeeOrders) {
    displayCoffeeOrders(coffeeOrders)
})

const coffeeOrderBtn = document.getElementById('coffeeOrderBtn')
// const coffeeEmailInput = document.getElementById('coffeeEmailInput')
// const coffeeTypeInput = document.getElementById('coffeeTypeInput')
// const coffeeSizeInput = document.getElementById('coffeeSizeInput')
// const coffeePriceInput = document.getElementById('coffeePriceInput')

function enterCoffeeOrder(coffeeOrder) {
}

coffeeOrderBtn.addEventListener('click', function () {
    console.log('coffee')
    let email = coffeeEmailInput.value
    let type = coffeeTypeInput.value
    let size = coffeeSizeInput.value
    // let price = coffeePriceInput.value
    let price = 4.00

    let request = new XMLHttpRequest()
    request.open('POST', 'https://troubled-peaceful-hell.glitch.me/orders')
    request.setRequestHeader('Content-Type', 'application/json')

    const order = {
        email: `${email}`,
        type: `${type}`,
        size: `${size}`,
        price: price
    }
    request.send(JSON.stringify(order))
})