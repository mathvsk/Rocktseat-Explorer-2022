// classe que vai conter a lógica dos dados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
    }
}
// classe que vai criar a view e events do html
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.update()
    }

    update() {
        this.removeAllTr()
                
    }

    removeAllTr() {
        const tbody = this.root.querySelector('table tbody')
        
        tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
            })
    }
}