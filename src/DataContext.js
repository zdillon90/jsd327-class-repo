import React from 'react'

export const data = {
    default: ["#000000"]
}

export const dataContext = React.createContext({
    colorListData: data.default,
    handleAdd: () => {},
})

