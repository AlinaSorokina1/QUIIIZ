const React = require("react");
const Layout = require('./Layout')


function Registration({title}){
    return(
<Layout title={title}>
    <form action="/api/registration" method="POST">
<input type="text" name="name" placeholder="name"/>
<input type="text" name="email" placeholder="email"/>
<input type="password" name="password" placeholder="password"/>
<button type='submit'>Ok</button>
    </form>
</Layout>
    )
}

module.exports = Registration