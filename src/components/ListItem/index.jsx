import DataList from "../DataList";

const ListItem = ({item,level}) => {
    return (
        <li>
            <span>{item.name}</span> <span>{item.age}</span>
            {item.children&&<DataList data={item.children} level={level + 1} />} 
        </li>
    )
};

export default ListItem;