export function row(content, styles="") {
  return `<div class="row" style="margin: 0; ${styles}">${content}</div>`
}
export function col(content) {
  return `<div class="col-sm">${content}</div>`
}

export const css = (styles={}) => {
  const toString = key => `${key}: ${styles[key]}`

  return Object.keys(styles).map(toString).join(";");
}
