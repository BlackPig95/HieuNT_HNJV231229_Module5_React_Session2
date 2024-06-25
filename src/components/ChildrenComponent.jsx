function ChildrenComponent(props)
{
    console.log(props);
    return (
        <div>Children Component { props.company }</div>
    );
}

export default ChildrenComponent;