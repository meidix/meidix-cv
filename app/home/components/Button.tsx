type ButtonProps = {
  label: string
  style: string
  disabled: boolean
}

export default function button({
  label,
  style,
  disabled = false,
}: ButtonProps) {
  return <button disabled={disabled}>{label}</button>
}
