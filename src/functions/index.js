import { axiosInstance } from "../axios";

export const stripImgHtml = (html) => {
    // Create a new div element
    var temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    return temporalDivElement.getElementsByTagName("img")[0].src
}

export const stripHtml = (html) => {
    // Create a new div element
    var temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

export const stripeCheckOutFunction = async (id) => {
    console.log("herree")
    axiosInstance({
        method: "post",
        url: "api/membership/create-checkout-session",
        data: {
            id: id
        }
    }).then(res => {
        window.location.href = res.data.url;
    }).catch(err => {
        console.error(err)
    })
}