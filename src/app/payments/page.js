import Payments from "@/features/payments/Payments";
import Can from "@/components/Can";

export default function Page() {
  return (
    <Can permission="PAYMENT_READ">
      <Payments />
    </Can>
  );
}
