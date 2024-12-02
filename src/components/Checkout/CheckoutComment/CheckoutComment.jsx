import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Link,
  Typography,
  TextField,
  IconButton,
  Checkbox,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { InsertCommentSharp } from "@mui/icons-material";
import { setComment, setNoCall } from "../../../store/slices/orderSlice";
import { styles } from "./styles";

const CheckoutComment = () => {
  const dispatch = useDispatch();
  const { comment, noCall } = useSelector((state) => state.order);
  const [isCommentOpen, setIsCommentOpen] = useState(comment !== "");
  const [localComment, setLocalComment] = useState(comment);
  const [localNoCall, setLocalNoCall] = useState(noCall);

  const handleLinkClick = () => {
    setIsCommentOpen(true);
  };

  const handleCommentChange = (event) => {
    setLocalComment(event.target.value);
  };

  const handleClearComment = () => {
    setLocalComment("");
    setIsCommentOpen(false);
    dispatch(setComment(""));
  };

  const handleCheckboxChange = (event) => {
    setLocalNoCall(event.target.checked);
    dispatch(setNoCall(event.target.checked));
  };

  React.useEffect(() => {
    dispatch(setComment(localComment));
  }, [localComment, dispatch]);

  React.useEffect(() => {
    dispatch(setNoCall(localNoCall));
  }, [localNoCall, dispatch]);

  return (
    <Box sx={styles.container}>
      {!isCommentOpen ? (
        <Box sx={styles.linkContainer}>
          <InsertCommentSharp sx={styles.icon} onClick={handleLinkClick} />
          <Link component="button" onClick={handleLinkClick} sx={styles.link}>
            Додати коментар до замовлення
          </Link>
        </Box>
      ) : (
        <Box sx={styles.commentBox}>
          <Box sx={styles.commentContainer}>
            <TextField
              value={localComment}
              onChange={handleCommentChange}
              placeholder="Коментар до замовлення"
              variant="outlined"
              multiline
              rows={2}
              fullWidth
              sx={styles.commentField}
            />
          </Box>
          <IconButton onClick={handleClearComment}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
      <Box sx={styles.noCallContainer}>
        <Checkbox
          checked={localNoCall}
          onChange={handleCheckboxChange}
          sx={styles.noCallCheckbox}
        />
        <Typography sx={styles.noCallText}>
          Не дзвонити для підтвердження замовлення
        </Typography>
      </Box>
    </Box>
  );
};

CheckoutComment.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};

export default CheckoutComment;
