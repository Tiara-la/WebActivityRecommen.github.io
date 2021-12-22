class inputBiodata extends HTMLElement {
    set activity(activity) {
        this._activity = activity
        this.render()
    }

    // get value() {
    //     return this.querySelector("#brand").value;
    // }

    render() {
        this.classList.add('col')
        this.innerHTML = `
        <div class="container contact">
        <div class="card-body">
            <h5 class=" card-title contact-judul">Contact</h5>
            <p class="card-text contact-text">
            <div class="row form-input">
                <div class="col-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="inputNamaFaq" class="label-input">Nama</label>
                                <input id="inputNamaFaq" type="text" class="form-control" placeholder="Nama Lengkap">
                            </div>
                            <div class="form-group">
                                <label for="inputBookAuthor" class="label-input">Pesan</label>
                                <input id="inputBookAuthor" type="text" class="form-control" placeholder="Gender">
                            </div>
                            <div class="form-group">
                                <button id="buttonSave" class="btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                </p>
            </div>
        </div>`;
    }
}

customElements.define('meal-card', Mealcard)