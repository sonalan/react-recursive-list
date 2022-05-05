import ListItem from '../ListItem';
const DataList = ({data,level=0}) => {
    return (
        <ul>
          {data.lenght&& data.map(((item,index)=><ListItem item={item} level={level} key={`item-${level}-${index}`} />))}  
        </ul>
    )
};

export default DataList;