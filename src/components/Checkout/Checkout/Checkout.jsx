// import { useSelector, useDispatch } from 'react-redux';
// import { Box, Link, Typography } from '@mui/material';
// import { KeyboardBackspace } from "@mui/icons-material";
// import { useNavigate } from 'react-router-dom';
// import CheckoutProductsList from '../CheckoutProductsList';
// import CheckoutContactInfo from '../CheckoutContactInfo';
// import CheckoutDeliverySelection from '../CheckoutDeliverySelection';
// import CheckoutPaymentMethod from '../CheckoutPaymentMethod';
// import CheckoutGiftCard from '../CheckoutGiftCard';
// import CheckoutComment from '../CheckoutComment';
// import CheckoutSummary from '../CheckoutSummary';
// import {
//     setCity,
//     setDeliveryMethod,
//     setPaymentMethod,
//     setComment,
//     setContactInfo,
//     placeOrderSuccess
// } from '../../../store/slices/orderSlice.js';
// import { styles } from './styles';
//
// const Checkout = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//
//     const {
//         totalAmount,
//         totalDiscount,
//         finalAmount,
//         cartCount,
//         items
//     } = useSelector(state => state.cart);
//
//     const {
//         city,
//         paymentMethod,
//         deliveryMethod
//     } = useSelector(state => state.order);
//
//     const deliveryMethods = [
//         { id: '1', name: 'Самовивіз з магазину', price: 0, additionalInfo: true, image: 'src/assets/svg/in-shop.svg' },
//         { id: '2', name: 'До відділення Нова пошта', price: 1, additionalInfo: false, image: 'src/assets/png/novaposhta.png', subLabel: 'Сьогодні'  },
//         { id: '3', name: 'Кур\'єр COMFY', price: 119, additionalInfo: false, image: 'src/assets/svg/delivery-comfy.svg', subLabel: '19 жовтня'  },
//         { id: '4', name: 'Кур\'єр Нова Пошта', price: 179, additionalInfo: false, image: 'src/assets/png/novaposhta.png', subLabel: 'Сьогодні'  },
//     ];
//
//     const paymentMethods = [
//         { id: '1', name: 'Оплата при отриманні', image: 'src/assets/svg/cash-on-delivery.svg' },
//         { id: '2', name: 'Оплата частинами або кредит', image: 'src/assets/png/installment.png', subLabel: 'До 18 платежів' },
//         { id: '3', name: 'Онлайн оплата', image: 'src/assets/svg/visa-mastercard.svg', subLabel: 'Visa/MasterCard' },
//         { id: '4', name: 'Онлайн-оплата PrivatPay', image: 'src/assets/png/privatpay.png', subLabel: 'Онлайн-оплата' },
//         { id: '5', name: 'Apple Pay', image: 'src/assets/svg/apple-pay.svg', subLabel: 'Онлайн-оплата' },
//         { id: '6', name: 'Google Pay', image: 'src/assets/svg/google-pay.svg', subLabel: 'Онлайн-оплата' },
//     ];
//
//     const cities = ['Київ', 'Львів', 'Одеса', 'Харків'];
//
//     const handleCityChange = (newCity) => {
//         dispatch(setCity(newCity));
//     };
//
//     const handleDeliveryMethodChange = (method) => {
//         dispatch(setDeliveryMethod(method));
//     };
//
//     const handlePaymentMethodChange = (method) => {
//         dispatch(setPaymentMethod(method));
//     };
//
//     const handleContactInfoSubmit = (values) => {
//         dispatch(setContactInfo(values));
//     };
//
//     const handleGiftCardSubmit = (code) => {
//         console.log('Gift Card Code Submitted:', code);
//     };
//
//     const handleCommentSubmit = (comment) => {
//         dispatch(setComment(comment));
//     };
//
//     const handleConfirmOrder = () => {
//         dispatch(placeOrderSuccess({
//             // order details
//         }));
//         navigate('/confirmation');
//     };
//
//     const handleBackToShopping = () => {
//         navigate('/');
//     };
//
//     const deliveryCost = deliveryMethod ? deliveryMethod.price : 0;
//
//     return (
//         <Box>
//             <Box sx={styles.headerLink}>
//                 <Typography variant="h4" gutterBottom sx={styles.text}>Оформити замовлення</Typography>
//                 <Link onClick={handleBackToShopping} sx={styles.headerLinkText}>
//                     <KeyboardBackspace />
//                     Повернутися до покупок
//                 </Link>
//             </Box>
//             <Box sx={styles.container}>
//                 <Box sx={styles.itemsList}>
//                     <Box>
//                         <CheckoutProductsList items={items} />
//                     </Box>
//                     <Box>
//                         <CheckoutContactInfo onSubmit={handleContactInfoSubmit} />
//                     </Box>
//                     <Box>
//                         <CheckoutDeliverySelection
//                             deliveryMethods={deliveryMethods}
//                             city={city}
//                             onCityChange={handleCityChange}
//                             onDeliveryMethodChange={handleDeliveryMethodChange}
//                             cities={cities}
//                         />
//                     </Box>
//                     <Box>
//                         <CheckoutPaymentMethod
//                             paymentMethods={paymentMethods}
//                             selectedMethod={paymentMethod}
//                             onPaymentMethodChange={handlePaymentMethodChange}
//                         />
//                     </Box>
//                     <Box>
//                         <CheckoutGiftCard onSubmit={handleGiftCardSubmit} />
//                     </Box>
//                     <Box>
//                         <CheckoutComment onCommentSubmit={handleCommentSubmit} />
//                     </Box>
//                 </Box>
//                 <Box>
//                     <CheckoutSummary
//                         cartCount={cartCount}
//                         totalAmount={totalAmount}
//                         discountCode=""
//                         bonusCardNumber=""
//                         totalDiscount={totalDiscount}
//                         finalAmount={finalAmount}
//                         deliveryCost={deliveryCost}
//                         onDiscountApply={() => {}}
//                         onBonusCardChange={() => {}}
//                         onConfirmOrder={handleConfirmOrder}
//                     />
//                 </Box>
//             </Box>
//         </Box>
//     );
// };
//
// export default Checkout;
import { useSelector, useDispatch } from "react-redux";
import { Box, Link, Typography } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CheckoutProductsList from "../CheckoutProductsList";
import CheckoutContactInfo from "../CheckoutContactInfo";
import CheckoutDeliverySelection from "../CheckoutDeliverySelection";
import CheckoutPaymentMethod from "../CheckoutPaymentMethod";
import CheckoutGiftCard from "../CheckoutGiftCard";
import CheckoutComment from "../CheckoutComment";
import CheckoutSummary from "../CheckoutSummary";
import {
  setCity,
  setDeliveryMethod,
  setPaymentMethod,
  setComment,
  setContactInfo,
  placeOrderSuccess,
} from "../../../store/slices/orderSlice.js";
import { styles } from "./styles";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { totalAmount, totalDiscount, finalAmount, cartCount, items } =
    useSelector((state) => state.cart);

  const { city, paymentMethod, deliveryMethod } = useSelector(
    (state) => state.order,
  );

  const deliveryMethods = [
    {
      id: "1",
      name: "Самовивіз з магазину",
      price: 0,
      additionalInfo: true,
      image: "src/assets/svg/in-shop.svg",
    },
    {
      id: "2",
      name: "До відділення Нова пошта",
      price: 1,
      additionalInfo: false,
      image: "src/assets/png/novaposhta.png",
      subLabel: "Сьогодні",
    },
    {
      id: "3",
      name: "Кур'єр COMFY",
      price: 119,
      additionalInfo: false,
      image: "src/assets/svg/delivery-comfy.svg",
      subLabel: "19 жовтня",
    },
    {
      id: "4",
      name: "Кур'єр Нова Пошта",
      price: 179,
      additionalInfo: false,
      image: "src/assets/png/novaposhta.png",
      subLabel: "Сьогодні",
    },
  ];

  const paymentMethods = [
    {
      id: "1",
      name: "Оплата при отриманні",
      image: "src/assets/svg/cash-on-delivery.svg",
    },
    {
      id: "2",
      name: "Оплата частинами або кредит",
      image: "src/assets/png/installment.png",
      subLabel: "До 18 платежів",
    },
    {
      id: "3",
      name: "Онлайн оплата",
      image: "src/assets/svg/visa-mastercard.svg",
      subLabel: "Visa/MasterCard",
    },
    {
      id: "4",
      name: "Онлайн-оплата PrivatPay",
      image: "src/assets/png/privatpay.png",
      subLabel: "Онлайн-оплата",
    },
    {
      id: "5",
      name: "Apple Pay",
      image: "src/assets/svg/apple-pay.svg",
      subLabel: "Онлайн-оплата",
    },
    {
      id: "6",
      name: "Google Pay",
      image: "src/assets/svg/google-pay.svg",
      subLabel: "Онлайн-оплата",
    },
  ];

  const cities = ["Київ", "Львів", "Одеса", "Харків"];

  const handleCityChange = (newCity) => {
    dispatch(setCity(newCity));
  };

  const handleDeliveryMethodChange = (method) => {
    dispatch(setDeliveryMethod(method));
  };

  const handlePaymentMethodChange = (method) => {
    dispatch(setPaymentMethod(method));
  };

  const handleContactInfoSubmit = (values) => {
    dispatch(setContactInfo(values));
  };

  const handleGiftCardSubmit = (code) => {
    console.log("Gift Card Code Submitted:", code);
  };

  const handleCommentSubmit = (comment) => {
    dispatch(setComment(comment));
  };

  const handleConfirmOrder = () => {
    dispatch(
      placeOrderSuccess({
        // order details
      }),
    );
    navigate("/confirmation");
  };

  const handleBackToShopping = () => {
    navigate("/");
  };

  const deliveryCost = deliveryMethod ? deliveryMethod.price : 0;

  return (
    <Box>
      <Box sx={styles.headerLink}>
        <Typography variant="h4" gutterBottom sx={styles.text}>
          Оформити замовлення
        </Typography>
        <Link onClick={handleBackToShopping} sx={styles.headerLinkText}>
          <KeyboardBackspace />
          Повернутися до покупок
        </Link>
      </Box>
      <Box sx={styles.container}>
        <Box sx={styles.itemsList}>
          <Box>
            <CheckoutProductsList items={items} />
          </Box>
          <Box>
            <CheckoutContactInfo onSubmit={handleContactInfoSubmit} />
          </Box>
          <Box>
            <CheckoutDeliverySelection
              deliveryMethods={deliveryMethods}
              city={city}
              onCityChange={handleCityChange}
              onDeliveryMethodChange={handleDeliveryMethodChange}
              cities={cities}
            />
          </Box>
          <Box>
            <CheckoutPaymentMethod
              paymentMethods={paymentMethods}
              selectedMethod={paymentMethod}
              onPaymentMethodChange={handlePaymentMethodChange}
            />
          </Box>
          <Box>
            <CheckoutGiftCard onSubmit={handleGiftCardSubmit} />
          </Box>
          <Box>
            <CheckoutComment onCommentSubmit={handleCommentSubmit} />
          </Box>
        </Box>
        <Box>
          <CheckoutSummary
            cartCount={cartCount}
            totalAmount={totalAmount}
            discountCode=""
            bonusCardNumber=""
            totalDiscount={totalDiscount}
            finalAmount={finalAmount}
            deliveryCost={deliveryCost}
            onDiscountApply={() => {}}
            onBonusCardChange={() => {}}
            onConfirmOrder={handleConfirmOrder}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
