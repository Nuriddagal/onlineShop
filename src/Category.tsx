import type { CategoryProps } from "./Types";

export function Category ({category, prefix}: CategoryProps) {
    const uniqueId = `${prefix}_${category}`
    return (
        <>
        <div className="category-item" id={category}>
            <input type="checkbox" name={category} id={uniqueId} className="category-checkbox" value={category}/>
            <label htmlFor={uniqueId} className="category">{category}</label>
        </div>
        </>
    )
}