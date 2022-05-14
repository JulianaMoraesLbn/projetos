export const goToHome = (navigate) => {
    navigate('/')
}

export const goToDetails = (navigate, pokeName) =>{
    navigate(`/pokemon/${pokeName}`)
}