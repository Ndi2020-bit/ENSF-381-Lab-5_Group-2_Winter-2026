function Delete() {
    return (
        <div>
            <input type="text" placeholder="Enter item to delete" />
            <button>Delete</button>
        </div>
    );
}


function Controls() {
    return (
        <div className="Controls">
            <Delete />
            <button>Sort by Group</button>
            <button>Sort by ID</button>
            <button>Grid / List</button>
        </div>
    );
}

export default Controls;