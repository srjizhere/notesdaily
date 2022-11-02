const sidebar = ()=>{
    return ` <h2>Countries</h3>
    <h3 id="in" onclick="cSearch(this.id)">India</h3>
    <h3 id="ch" onclick="cSearch(this.id)">China</h3>
    <h3 id="us" onclick="cSearch(this.id)">Usa</h3>
    <h3 id="uk" onclick="cSearch(this.id)">United kingdom</h3>
    <h3 id="nz" onclick="cSearch(this.id)">new Zealand</h3>`
}

export {sidebar};