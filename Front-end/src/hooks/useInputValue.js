const { useState } = require("react")

export const useInputValue = initialValue => {
  const [inputValue, setInputValue] = useState(initialValue)

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  return [inputValue, handleInputChange]
}

