const hasil = (activity) => {
    fetch(`${baseUrl}/add`, {
        method: "POST",
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