import ChildrenComponent from "./ChildrenComponent";

function ParentComponent()
{
    const company = "Rikkei";
    return (
        <div>
            <h2>Parent Component</h2>
            <ChildrenComponent company={ company } userName="s" />
        </div>
    );
}

export default ParentComponent;