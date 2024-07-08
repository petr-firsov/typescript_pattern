import Buyable  from './buyable_template';
export default class Cart {
    private items: Buyable[] = [];

    add(item: Buyable): void {
        this.items.push(item);
    }

    getAll(): Buyable[] {
        return [...this.items]
    }

    totalPrice(): number {
        const totalPrice = this.items.reduce((currentSum: number, item: Buyable) => {
            return currentSum + item.price
        }, 0)
        return totalPrice
    }

    discountedPrice(): number {
        const discountedPrice = this.items.reduce((currentSum: number, item: Buyable) => {
            if (item.hasOwnProperty('discount')) {
                return currentSum + (item.price * ((100 - item.discount) / 100))
            } else {
                return currentSum + item.price
            }
        }, 0)
        return discountedPrice
    }

    removeItem(targetId: number): void {
        const index = this.items.findIndex(element => element.id === targetId);
        this.items.splice(index, 1);
    }
}
