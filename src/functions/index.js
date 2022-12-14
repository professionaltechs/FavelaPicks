import { axiosAuthInstance, axiosInstance } from "../axios";

export const stripImgHtml = (html) => {
    var temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = html;
    return temporalDivElement.getElementsByTagName("img")[0].src
}

export const stripHtml = (html) => {
    var temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = html;
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

export const stripeCheckOutFunction = async (id) => {
    console.log(id)
    axiosAuthInstance({
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

setTimeout(function() {
    console.log("waiting");
}, 1000);

export const check = (str) => {
    const y = localStorage.getItem(str)
    if (y != "") {
        console.log(y);
        return "complete"
    } else {
        setTimeout(check, 0);
    }
}