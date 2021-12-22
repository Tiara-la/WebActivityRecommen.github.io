import 'regenerator-runtime'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import '../component/navbar.js'
import '../component/hasil.js'
import '../component/input.js'
import '/src/styles/style.css'
import '/src/assets'

const main = () => {
    const inputBiodata = (activity) => {
        fetch(`${baseUrl}/edit/${activity.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Auth-Token": "12345"
            },
            body: JSON.stringify(activity)
        })
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                showResponseMessage(responseJson.message);
                getActivity();
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };
}

export default main