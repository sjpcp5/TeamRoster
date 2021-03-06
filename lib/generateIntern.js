function generateIntern(intern) {
    return `<!-- Intern Template with template literals -->

    <div class="col-md-4 card-fluid bg-light">
        <div class="bs-component">
            <div class="card text-white bg-success mb-3" style="max-width:20rem;">
                <div class="card-body">
                    <h2 class="card-title" data="">${intern.name}</h1>
                        <span class="ion-ios-plus-outline">
                <h3 class="card-text"> <ion-icon name="bulb-outline">
                </ion-icon>${intern.getRole()}</h2>
            </span>
                </div>
            </div>
            <div class="card-fluid-center mb-3" style="max-width:20rem;max-height:20 rem;">
                <div class="bs-component">
                    <ul class="list-group">
    
                        <li class="list-group-item d-flex justify-content-between align-items-center">ID:
                            <span class="badge badge-primary badge-pill">${intern.id}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">Email:
                            <span class="badge badge-primary badge-pill">${intern.email}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">School:
                            <span class="badge badge-primary badge-pill">${intern.school}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
}

module.exports = generateIntern;