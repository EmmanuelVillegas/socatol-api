const { PubSub } = require('apollo-server');
const pubsub = new PubSub();

// Subscriptions Types
const {
  bankAccountTypes,
  warehouseTypes,
  productTypes
} = require('./subscriptionsTypes');

const Subscriptions = {
  // BankAccount
  bankAccountAdded: {
    subscribe: () => pubsub.asyncIterator([bankAccountTypes.ADD])
  },
  // Warehouse
  warehouseAdded: {
    subscribe: () => pubsub.asyncIterator([warehouseTypes.ADD])
  },
  // Product
  productAdded: {
    subscribe: () => pubsub.asyncIterator([productTypes.ADD])
  }
};

module.exports = { Subscriptions, pubsub };
