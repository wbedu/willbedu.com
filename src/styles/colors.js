
export default {
    primary: window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-color"),
    secondary: window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--secondary-color"),
    tertiary: window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--tertiary-color"),
    quaternary: window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--quaternary-color"),

}