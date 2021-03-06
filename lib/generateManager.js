function generateManager(manager) {
    return `<!-- Manager Template with literals -->

    <div class="col-md-4 card-fluid bg-light">
        <div class="bs-component">
            <div class="card text-white bg-danger mb-3" style="max-width:20rem;">
                <div class="card-body">
                    <h2 class="card-title" data="">${manager.name}</h1>
                        <span class="ion-ios-plus-outline">
                <h3 class="card-text"> <ion-icon name="rocket-outline">
                </ion-icon> ${manager.getRole()}</h2>
            </span>
                </div>
            </div>
            <div class="card-fluid-center mb-3" style="max-width:20rem;max-height:20 rem;">
                <div class="bs-component">
                    <ul class="list-group">
    
                        <li class="list-group-item d-flex justify-content-between align-items-center">ID:
                            <span class="badge badge-primary badge-pill">${manager.id}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Email:
                            <span class="badge badge-primary badge-pill">${manager.email}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Office Number:
                            <span class="badge badge-primary badge-pill">${manager.officeNumber}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`

}

module.exports = generateManager;