class inputBiodata extends HTMLElement {
    set activity(activity) {
        this._activity = activity
        this.render()
    }

    get value() {
        return this.querySelector("#brand").value;
    }

    render() {
        this.classList.add('col')
        this.innerHTML = `
        <div class="row form-input">
            <div class="col-6">
                <div class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="inputNama" class="label-input">Nama</label>
                            <input id="inputNama" type="text" class="form-control" placeholder="Nama Lengkap">
                        </div>
                        <div class="form-group">
                            <label for="inputUsia" class="label-input">Usia</label>
                            <input id="inputUsia" type="number" class="form-control" placeholder="Usia">
                        </div>
                        <!-- <div class="form-group">
                            <label for="inputBookAuthor" class="label-input">Gender</label>
                            <input id="inputBookAuthor" type="text" class="form-control" placeholder="Gender">
                        </div> -->
                        <div class="form-group">
                            <label for="inputGender" class="label-input">Gender</label>
                            <select class="form-control" id="inputGender" placeholder="Gender">
                                <option>Laki-laki</option>
                                <option>Perempuan</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="inputPekerjaan" class="label-input">Pekerjaan</label>
                            <input id="inputPekerjaan" type="text" class="form-control" placeholder="Pekerjaan">
                        </div>
                        <div class="form-group">
                            <label for="inputHobi" class="label-input">Hobi</label>
                            <input id="inputHobi" type="text" class="form-control" placeholder="Hobi">
                        </div>
                        <div class="form-group">
                            <button id="buttonSave" class="btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define('meal-card', Mealcard)