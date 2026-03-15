import { Service, Inject, Token } from "typedi";
import { NotificationService } from "./NotificationService";
import { BillingService } from "./BillingService";
import { SMSService } from "./SMSService";
import { StripeBillingService } from "./StripeBillingService";

// Create tokens for interface-based injection
export const NOTIFIER_TOKEN = new Token<NotificationService>("notifier");
export const BILLING_TOKEN = new Token<BillingService>("billing");

@Service()
export class AppointmentService {
  constructor(
    @Inject(NOTIFIER_TOKEN) private notifier: NotificationService,
    @Inject(BILLING_TOKEN) private billing: BillingService
  ) {}

  async bookAppointment(patient: string, time: string, amount: number) {
    await this.billing.charge(patient, amount);
    await this.notifier.send(patient, `Your appointment is booked for ${time}`);
    return { status: "confirmed" };
  }
}
