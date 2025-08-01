// features/productFilter/ui/Category.tsx
type Props = {
  category: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?:string
}

export function Category({ category, checked, onChange, className }: Props) {
  return (
    <label className={className}>
      <input
        type="checkbox"
        value={category}
        checked={checked}
        onChange={onChange}
      />
      {category}
    </label>
  )
}
