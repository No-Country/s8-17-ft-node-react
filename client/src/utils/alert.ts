import Swal from "sweetalert2";
import { type SweetAlertOptions } from "sweetalert2";
import { colors } from "./constants";

export const alerts = ({
  title,
  text,
  icon,
  html,
  toast = false,
  showConfirmButton = true,
  confirmButtonText = "Ok",
  showCloseButton = true,
  confirmButtonAriaLabel = "Thumbs up, great!",
  timer
}: SweetAlertOptions) => {
  // TODO: fix colors.
  let color: string = colors.americanOrange;
  switch (icon) {
    case "info":
      color = colors.brightPink;
      break;
    case "warning":
      color = colors.error;
      break;
    case "error":
      color = colors.error;
      break;
    default:
      color = colors.americanOrange;
      break;
  }

  return Swal.fire({
    icon: icon,
    title: title,
    text: text,
    toast: toast,
    showConfirmButton: showConfirmButton,
    showCloseButton: showCloseButton,
    html: html,
    confirmButtonText: confirmButtonText,
    confirmButtonAriaLabel: confirmButtonAriaLabel,
    color: colors.eerieBlack,
    iconColor: color,
    confirmButtonColor: colors.americanOrange,
    cancelButtonColor: colors.taupeGray,
    timer: timer
  });
};
