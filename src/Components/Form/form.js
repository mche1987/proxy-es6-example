import "./form.css";
import form from "./form.html";
import { proxiedArray } from "./form-proxy.js";


class CustomForm {
    constructor(proxiedObject) {
        this.el = document.createRange().createContextualFragment(form);
        proxiedArray.forEach(p => {
            this.setTargetValue(p);
            this.inputChange(p);
        })
        return this.el;
    }
    setTargetValue(myObject) {
        if (!myObject || !myObject.id) return;
        this.el.getElementById(myObject.id).value = myObject.name;
    }
    inputChange(myObject) { // binding input change
        if (!myObject || !myObject.id) return;
        var input = this.el.getElementById(myObject.id);
        input.addEventListener("input", e => {
            myObject.name = input.value;
        })
    }
}

export default function (proxyObj) {
    return new CustomForm(proxyObj);
}