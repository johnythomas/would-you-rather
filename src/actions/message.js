export const SHOW_MESSAGE = "SHOW_MESSAGE"
export const HIDE_MESSAGE = "HIDE_MESSAGE"

export const showMessage = text => ({
  type: SHOW_MESSAGE,
  text
})

export const hideMessage = () => ({
  type: HIDE_MESSAGE
})
