import Select from 'react-select'

function SelectDifficulty() {
  const options = [
    { value: 'easy', label: 'Легко' },
    { value: 'medium', label: 'Средне' },
    { value: 'hard', label: 'Тяжело' }
  ]

  return <Select options={options} placeholder="Выберите сложность" />
}

export default SelectDifficulty
