import orderStyles from '../../styles/Order.module.css';
import Image from 'next/image';

import React from 'react'

const Order = () => {
    const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return orderStyles.done;
    if (index - status === 1) return orderStyles.inProgress;
    if (index - status > 1) return orderStyles.undone;
  };
  return (
        <div className={orderStyles.container}>
      <div className={orderStyles.left}>
        <div className={orderStyles.row}>
          <table className={orderStyles.table}>
            <tr className={orderStyles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total</th>
            </tr>
            <tr className={orderStyles.tr}>
              <td>
                <div className={orderStyles.id}>129837819237</div>
              </td>
              <td>
                <div className={orderStyles.name}>John Doe</div>
              </td>
              <td>
                <div className={orderStyles.total}>$79.80</div>
              </td>
            </tr>
          </table>
        </div>
        <div className={orderStyles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/payment.png" width={30} height={30} alt="" />
            <div>Payment</div>
            <div className={orderStyles.checkedIcon}>
              <Image
                className={orderStyles.checkedIcon}
                src="/img/check.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/cooking.png" width={30} height={30} alt="" />
            <div>Preparing</div>
            <div className={orderStyles.checkedIcon}>
              <Image
                className={orderStyles.checkedIcon}
                src="/img/check.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/ready.png" width={30} height={30} alt="" />
            <div>Ready</div>
            <div className={orderStyles.checkedIcon}>
              <Image
                className={orderStyles.checkedIcon}
                src="/img/check.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={orderStyles.right}>
        <div className={orderStyles.wrapper}>
          <h2 className={orderStyles.title}>CART TOTAL</h2>
          <div className={orderStyles.totalText}>
            <b className={orderStyles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={orderStyles.totalText}>
            <b className={orderStyles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={orderStyles.totalText}>
            <b className={orderStyles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={orderStyles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order