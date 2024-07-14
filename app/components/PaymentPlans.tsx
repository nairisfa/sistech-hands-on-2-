import React from 'react';
import { PaymentPlan } from '../utils/data';

interface PaymentPlansProps {
  paymentPlans: PaymentPlan[];
}

const PaymentPlans: React.FC<PaymentPlansProps> = ({ paymentPlans }) => {
  return (
    <section id="payment-plans">
      <h2>Payment Plans</h2>
      <div className="plans-container">
        {paymentPlans.map((plan) => (
          <div key={plan.id} className="plan">
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button>Join Membership</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaymentPlans;
