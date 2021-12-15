class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    // get value() {
    //     return this.querySelector("#brand").value;
    // }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-style">
            <div class="container fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Daily.Activity</a>
                </div>
                <div class="collapse navbar-collapse" id="brand">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </nav>`;
        // this.querySelector("#brand").addEventListener("click", this._clickEvent);
    }
}

customElements.define("nav-bar", NavBar);
