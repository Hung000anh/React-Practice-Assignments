function List({items = [], category = "Category"}) 
{

    // const itenmList = props.item;
    // const category = props.category;
    // const fruits = [
    //     {id : "1", name : "apple", calories: 95},
    //     {id : "2", name : "banana", calories: 105}, 
    //     {id : "3", name : "cherry", calories: 50}, 
    //     {id : "4", name : "coconut", calories: 283}, 
    //     {id : "5", name : "pineapple", calories: 452},
    // ];
    // fruits.sort((a,b) => a.name.localeCompare(b.name));
    // fruits.sort((a,b) => b.name.localeCompare(a.name));
    // fruits.sort((a,b) => a.calories - b.calories);
    // fruits.sort((a,b) => b.calories - a.calories);
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    const listItems = items.map(item => <li key={item.id}>{item.name}: &nbsp;<b>{item.calories}</b>  </li>);
    
    
    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className = "list-items">
                {listItems}
            </ol>
        </>

    ) 


}
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),
    category: PropTypes.string, 
}
export default List