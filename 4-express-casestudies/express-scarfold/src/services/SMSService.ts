import { Service } from "typedi";
import { NotificationService } from "./NotificationService";

@Service()
export class SMSService extends NotificationService {
  async send(to: string, message: string): Promise<void> {
    console.log(`SMS sent to ${to}: ${message}`);
  }
}
