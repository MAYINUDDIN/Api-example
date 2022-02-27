loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(Response => Response.json())
        .then(data => displayBuddies(data));

}

loadBuddies();

const displayBuddies = data => {
    const buddies = data.results;
    // console.log(buddies);
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {

        const p = document.createElement('p');
        p.innerText = `name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`;
        buddiesDiv.appendChild(p);

    }


}