const alertas = () =>{
    return(
        <div className="mt-4">
            <div className="alert alert-success" role="alert">
            Operación realizada correctamente.
            </div>
            <div className="alert alert-info" role="alert">
            Recuerda guardar los cambios antes de salir.
            </div>
            <div className="alert alert-warning" role="alert">
            Algunos campos están incompletos.
            </div>
        </div>
    )
}

export default alertas;