
export function FormularioGasto() {
    return (
        <>
            <section className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-8">
                        <h3>Registro de cliente: </h3>
                        <form className="p-5 border rounded">

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i class="bi bi-person-circle"></i>
                                    </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i class="bi bi-calendar-date"></i></span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Edad"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i class="bi bi-telephone"></i></span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Teléfono"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i class="bi bi-envelope"></i></span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i class="bi bi-ban"></i></span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i class="bi bi-calendar"></i></span>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="dd/mm/aa"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i class="bi bi-shop"></i></span>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Ciudad"
                                />
                            </div>
                            

                            <button className="btn btn-outline-primary">Registrar</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
