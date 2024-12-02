import { useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Checkbox,
  Typography,
  Button,
  IconButton,
  Tooltip,
  TextField,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { styles } from "./styles";

const CheckoutGiftCard = ({ onSubmit }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [cardParts, setCardParts] = useState({
    cardPart1: "",
    cardPart2: "",
    cardPart3: "",
    cardPart4: "",
  });

  const cardPart1Ref = useRef(null);
  const cardPart2Ref = useRef(null);
  const cardPart3Ref = useRef(null);
  const cardPart4Ref = useRef(null);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleInputChange = (event, partName, nextRef) => {
    const value = event.target.value;

    if (value.length <= 4) {
      setCardParts({
        ...cardParts,
        [partName]: value,
      });
    }

    if (value.length === 4 && nextRef) {
      nextRef.current.focus();
    }
  };

  const handleSubmit = () => {
    const { cardPart1, cardPart2, cardPart3, cardPart4 } = cardParts;
    if (cardPart1 && cardPart2 && cardPart3 && cardPart4) {
      const giftCardCode = `${cardPart1}${cardPart2}${cardPart3}${cardPart4}`;
      onSubmit(giftCardCode);
    }
  };

  const totalDigits =
    cardParts.cardPart1.length +
    cardParts.cardPart2.length +
    cardParts.cardPart3.length +
    cardParts.cardPart4.length;

  return (
    <Box>
      <Box sx={styles.container}>
        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          sx={styles.checkbox}
        />
        <Typography sx={styles.text}>У мене є подарункова карта</Typography>
        <Tooltip title="Введіть код вашої подарункової карти тут">
          <IconButton sx={styles.infoIcon}>
            <HelpOutlineIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      {isChecked && (
        <Box sx={styles.expandedContainer}>
          <Typography sx={styles.formLabel}>
            Заповніть дані Вашої карти
          </Typography>
          <Box sx={styles.input}>
            <Box sx={styles.inputField}>
              <TextField
                value={cardParts.cardPart1}
                onChange={(e) =>
                  handleInputChange(e, "cardPart1", cardPart2Ref)
                }
                placeholder="XXXX"
                variant="outlined"
                size="small"
                inputProps={{ maxLength: 4 }}
                inputRef={cardPart1Ref}
              />
            </Box>
            <Box sx={styles.inputField}>
              <TextField
                value={cardParts.cardPart2}
                onChange={(e) =>
                  handleInputChange(e, "cardPart2", cardPart3Ref)
                }
                placeholder="XXXX"
                variant="outlined"
                size="small"
                inputProps={{ maxLength: 4 }}
                inputRef={cardPart2Ref}
              />
            </Box>
            <Box sx={styles.inputField}>
              <TextField
                value={cardParts.cardPart3}
                onChange={(e) =>
                  handleInputChange(e, "cardPart3", cardPart4Ref)
                }
                placeholder="XXXX"
                variant="outlined"
                size="small"
                inputProps={{ maxLength: 4 }}
                inputRef={cardPart3Ref}
              />
            </Box>
            <Box sx={styles.inputField}>
              <TextField
                value={cardParts.cardPart4}
                onChange={(e) => handleInputChange(e, "cardPart4", null)}
                placeholder="XXXX"
                variant="outlined"
                size="small"
                inputProps={{ maxLength: 4 }}
                inputRef={cardPart4Ref}
              />
            </Box>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={totalDigits < 16}
              sx={styles.balanceButton}
            >
              Дізнатись баланс
            </Button>
          </Box>
          <Typography sx={styles.warningText}>
            При оплаті подарунковою картою не можна списати бонуси з Вашої
            бонусної карти
          </Typography>
        </Box>
      )}
    </Box>
  );
};

CheckoutGiftCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CheckoutGiftCard;
