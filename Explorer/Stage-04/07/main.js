let option
let items = []

while(option != 3) {

  option =  Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `))
  
  
  if(option == 1) {
    let item = prompt("Digite o nome do item")
    items.push(item) 
  }
  
  else if (option == 2) {
  
    if(items.length == 0) {
      alert("Não existem itens cadastrados")
    } else {
      alert(items)
    }
  
  } else {
    alert("Tchau")
  }
  
  console.log(option, items)

}