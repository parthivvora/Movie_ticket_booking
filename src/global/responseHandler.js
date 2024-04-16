import { Bounce, toast } from "react-toastify";

export const successHandler = (response) => {
    console.log("🚀 ~ successHandler ~ response:", response)
    toast.success(response, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        transition: Bounce,
    });
}

export const errorHandler = (response) => {
    console.log("🚀 ~ errorHandler ~ response:", response)
    toast.error(response, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        transition: Bounce,
    });
}