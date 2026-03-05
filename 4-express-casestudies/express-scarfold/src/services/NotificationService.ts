// NotificationService abstract class - defines the contract for notification operations
export abstract class NotificationService {
  abstract send(to: string, message: string): Promise<void>;
}
