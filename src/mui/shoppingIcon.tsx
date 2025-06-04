import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function IconButtonWithBadge({itemCount = 0}) {
  return (
    <IconButton className="bg-white">
      <ShoppingCartIcon fontSize="small" />
      <CartBadge badgeContent={itemCount} className=""  overlap="circular" />
    </IconButton>
  );
}
