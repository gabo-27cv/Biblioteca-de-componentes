const Badge = () =>{
    return (
        <div className="mt-4 d-flex flex-wrap gap-3">
            <span className="badge bg-primary">Primary</span>
            <span className="badge bg-secondary">Secondary</span>
            <span className="badge bg-success">Success</span>
            <span className="badge bg-danger">Danger</span>
            <span className="badge bg-warning text-dark">Warning</span>
            <span className="badge bg-info text-dark">Info</span>
            <span className="badge bg-dark">Dark</span>
        </div>
    )
}

export default Badge;