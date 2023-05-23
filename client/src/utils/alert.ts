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
  let color: string = colors.primary;
  switch (icon) {
    case "info":
      color = colors.secondary;
      break;
    case "warning":
      color = colors.error;
      break;
    case "error":
      color = colors.error;
      break;
    default:
      color = colors.primary;
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
    color: colors.dark,
    iconColor: color,
    confirmButtonColor: colors.primary,
    cancelButtonColor: colors.light,
    timer: timer
  });
};
