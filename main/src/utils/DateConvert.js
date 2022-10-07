function formatDate(isoDate){
    return isoDate.toJSON().substr(9, 20);
}

export const formatDate = (isoDate) => {
    let rawDate = isoDate.toJSON().substr(9, 20);
    let sliceDate = rawDate.split("-").reverse()
    let month = sliceDate.setMonth()

    return 
}

2020-04-24