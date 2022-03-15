const Route = ({ path, children }) => {
    console.log({ path, children })
    return window.location.pathname === path ? children : null
}

export default Route