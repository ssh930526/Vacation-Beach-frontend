const BASE_URL = 'http://localhost:3001/api/beaches';



function fetchBeaches() {
    return fetch(BASE_URL).then(res => res.json());
}

function updateBeach({ beach, rating, _id}) {
    return fetch(`${BASE_URL}/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify({ beach, rating })
      }).then(res => res.json());
}

function createBeach(data) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
}


function deleteBeach(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}


export {
    fetchBeaches,
    updateBeach,
    createBeach,
    deleteBeach
} 