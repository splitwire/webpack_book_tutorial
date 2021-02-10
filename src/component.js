export default (text = "Hello World2") => {
  const element = document.createElement("div");
  element.innerHTML = text;
  return element;
}