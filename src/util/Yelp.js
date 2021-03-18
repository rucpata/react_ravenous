const apiKey = `KgFWoMC9NSZKvsNco-I91x2wcMmtsUa7nsoRKP81DpuHkCJYpmbrVqBZtvwx9n6V61EfnGp2__7YMmkQugcbb_sGXMuav_p9frgQG1kGDNQas0PpG8-EwFHoiUhTYHYx`;

const yelp = {
    searchYelp(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term={term}&location={location}&sort_by={sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    
                });
            }
        })
    }
}

