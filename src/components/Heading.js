import React from 'react'

const Heading = ()=> {
    return (
        <div class="heading">
            <h1>Flickr Photo Search</h1>
                <form>
                    <label for="search">Search for anything</label>
                    <input type="search" name="search" id="search" />
                    <input type="submit" value="Search" id="submit" />
                </form>
            
          </div>
            
            
        
    )
}


export default Heading;
