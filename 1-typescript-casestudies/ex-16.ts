abstract class Observer {
  abstract update(msg: string): void
}
class PromotionSystem extends Observer {
  override update(msg: string): void {
    console.log(`Promotion: ${msg}`)
  }
}
class DrinkOrder {
  private observers: Observer[] = []
  addObserver(observer: Observer) {
    this.observers.push(observer)
  }
  notifyAll(msg: string) {
    this.observers.forEach((observer) => observer.update(msg))
  }
  completeOrder() {
    this.notifyAll("Your drink is ready! Enjoy a 10% discount on your next order!")
  }
}

const order = new DrinkOrder();
order.addObserver(new PromotionSystem())
order.completeOrder()

//out
// ❯ bun tsr ex - 16.ts

// $ timeout - k 1s 1s sh - c 'bun x tsc --noEmit && bun run "$1"' -- "ex-16.ts"
// Promotion: Your drink is ready! Enjoy a 10 % discount on your next order!
