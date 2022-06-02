let items = [];

for(let i = 0; i < 5; i++) {
  let itemName = prompt("Digite o item " + (i + 1))

  items[i] = itemName
}

alert(items)