type CustomerID = string

interface Customer {
  customerId: CustomerID,
  name: string,
  email?: string
}

type OrderId = string
interface Order {
  id: OrderId,
  name: string,
  status: "pending" | "processed"
}

type Container<T> = Map<string, { value: T, timestamps: { createdAt: Date, updatedAt: Date } }>

const orders: Container<Order> = new Map();

orders.set("001", {
  value: { id: "001", name: "Order 1", status: "pending" },
  timestamps: {
    createdAt: new Date(),
    updatedAt: new Date()
  }
});

orders.set("002", {
  value: { id: "002", name: "Order 2", status: "processed" },
  timestamps: {
    createdAt: new Date(),
    updatedAt: new Date()
  }
});

const processOrder = (orderId: OrderId) => {
  console.log(`Processing order with ID: ${orderId}`);
  const order = orders.get(orderId.toString());
  if (order) {
    order.value.status = "processed";
    order.timestamps.updatedAt = new Date();
    console.log(`Order Details: 
    ID: ${order.value.id}
    Name: ${order.value.name}
    Status: ${order.value.status}`);
  } else {
    console.log("Order not found");
  }
}

processOrder("001");
processOrder("002");

// ❯ bun tsr ex -09.ts

// $ bun x tsc--noEmit && bun run "ex-09.ts"
// Processing order with ID: 001
// Order Details:
// ID: 001
// Name: Order 1
// Status: processed
// Processing order with ID: 002
// Order Details:
// ID: 002
// Name: Order 2
// Status: processed