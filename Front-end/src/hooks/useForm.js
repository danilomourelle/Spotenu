import React, { useState } from 'react'

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues)

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  const resetForm = () => {
    setForm(initialValues)
  }

  return [form, onChange, resetForm]
}


const Example = () => {
  const [form, setForm] = useForm({ nome: 'Maria', idade: 30 })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setForm(name, value)
  }

  return (
    <form>
      <input name='nome' onChange={handleInputChange} />
      <input name='idade' onChange={handleInputChange} />
    </form>
  )
}