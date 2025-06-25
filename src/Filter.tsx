import { Category } from "./Category";
import type { FilterProps } from "./Types";

export function Filter({categorys, setChosenFilter, isFilterOpen, chosenFilter}: FilterProps){
    const menCategory = categorys.filter((category) => category.startsWith("men"))
    const womenCategory = categorys.filter((category) => category.startsWith("women"))
    const handleCheckbox = (e: React.MouseEvent): void => {
        // Проверяем, был ли клик непосредственно по чекбоксу
        const target = e.target as HTMLElement;
        const input = target.closest('.category-item')?.querySelector('input');
        
        if (!input) return;
        
        if (input.checked) {
            // Добавляем значение, если его нет в chosenFilter и это не "all"
            if (!chosenFilter.includes(input.value)) {
                setChosenFilter(prev => [...prev, input.value]);
            }
        } else {
            // Удаляем значение, если оно есть в chosenFilter
            setChosenFilter(prev => prev.filter(item => item !== input.value));
        }
    }
    let classForFilter:string = '' 
    if(isFilterOpen){
        classForFilter = 'open-filter'
    }else{
        classForFilter = ''
    }
    return (
        <>
        <div className={`filter-menu ${classForFilter}`}>
                <input type="radio" name="category-group" id="all-category" defaultChecked/>
                <label htmlFor="all-category" className="forAll">
                    All
                </label>
                <div className="all-category" onClick={handleCheckbox}>
                    {categorys.filter((category) => !category.startsWith('men') && !category.startsWith('women')).map((category) => <Category key={category} category={category} prefix="all"/>)}
                </div>
                <input type="radio" name="category-group" id="men-category"/>
                <label htmlFor="men-category"  className="forMen">
                    For Men
                </label>
                <div className="men-category" onClick={handleCheckbox}>
                    {menCategory.map((category) => <Category key={`men_${category}`} category={category} prefix="men"/>)}
                </div>
                <input type="radio" name="category-group" id="women-category" />
                <label htmlFor="women-category" className="forWomen">
                    For Women
                </label>
                <div className="women-category" onClick={handleCheckbox}>
                    {womenCategory.map((category) => <Category key={`women_${category}`} category={category} prefix="women"/>)}
                </div>
        </div>
        </>
    )
}