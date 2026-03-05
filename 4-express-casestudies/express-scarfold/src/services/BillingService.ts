// BillingService abstract class - defines the contract for billing operations
export abstract class BillingService {
  abstract charge(patient: string, amount: number): Promise<void>;
}
