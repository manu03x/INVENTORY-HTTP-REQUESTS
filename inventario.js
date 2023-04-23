class Inventory {
    constructor() {
        this.data = [{id:6, nombre:"caca"}]
    }

    add(newUser) {
        let id = this.getId()
        newUser.id = id
        this.data = [...this.data, newUser]
    }

    search(id) {
        return this.data.find((user) => user.id == id)
    }

    list() {
        return this.data
    }

    getId() {
        let id;
        this.data.forEach(user => {
            id = user.id
        })

        id++

        return id
    }
}

const inventoryClass = new Inventory
export {inventoryClass};