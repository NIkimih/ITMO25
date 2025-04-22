class Component{
    render(){
        this.container.innerHTML = this.content
    }
}

class ProductCard extends Component{

    #isOpen = false //скрытое, что может использовать только в классе, но не может вызвать из вне

    constructor(product){
        const { name, desc, price} = product; //если в продукте есть 3 перменные, то они присваиваются соотвественно и к ним можно обращаться как к переменным
        this.name = name
        this.desc = desc
        this.price = price
        //this.name = product.name

    }
}

