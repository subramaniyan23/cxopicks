import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export function ToastAlert(icon, title) {
  return Toast.fire({
    target: document.getElementById("form-modal"),
    icon: `${icon}`,
    title: `${title}`,
  });
}