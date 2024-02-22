const React = require("react");
const Layout = require('./Layout')


function Registration({title}){
    return(
<Layout title={title}>
    <form action="/api/auth/registration" method="POST">
<input type="text" name="name" placeholder="name"/>
<input type="text" name="email" placeholder="email"/>
<input type="password" name="password" placeholder="password"/>
<button>Ok</button>
    </form>
</Layout>
    )
}

module.exports = Registration