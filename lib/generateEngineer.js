function generateEngineer(engineer) {
    return `<!-- Engineer Template with template literals -->

    <div class="col-md-4 card-fluid bg-light">
        <div class="bs-component">
            <div class="card text-white bg-primary mb-3" style="max-width:20rem;">
                <div class="card-body">
                    <h2 class="card-title" data="">${engineer.name}</h1>
                        <span class="ion-ios-plus-outline">
                                            <h3 class="card-text"> <ion-icon name="settings-outline">
                                            </ion-icon> ${engineer.getRole()}</h2>
                                        </span>
                </div>
            </div>
            <div class="card-fluid-center mb-3" style="max-width:20rem;max-height:20 rem;">
                <div class="bs-component">
                    <ul class="list-group">
    
                        <li class="list-group-item d-flex justify-content-between align-items-center">ID:
                            <span class="badge badge-primary badge-pill">${engineer.id}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Email:
                            <span class="badge badge-primary badge-pill">${engineer.email}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Github:
                            <span class="badge badge-primary badge-pill">${engineer.github}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
}

module.exports = generateEngineer;