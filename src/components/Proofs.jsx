const Proofs = () => {
    return (
        <>
            <div class="card">
                <div class="card-header">
                    <h5 className="card-title">Proof Set 1</h5>
                </div>
                <div class="card-body">
                    <div class='row'>
                        <div class='col-2'>
                            <ul class="list-group">
                                <li class="list-group-item active" aria-current="true">Question 1</li>
                                <li class="list-group-item">Question 2</li>
                                <li class="list-group-item">Question 3</li>
                                <li class="list-group-item">Question 4</li>
                                <li class="list-group-item">Question 5</li>
                            </ul>
                        </div>
                        <div class='col'>
                            <div class="card">
                                <div class="card-header">
                                    <p>Some instructions</p>
                                </div>
                                <div class="card-body">
                                    <p>Some Content</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Proofs;