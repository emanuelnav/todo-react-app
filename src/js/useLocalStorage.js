import React from 'react';

function useLocalStorage(itemName) {
    const localStoreItems = localStorage.getItem(itemName);
    let parsedItems;
    if (!localStoreItems) {
      localStorage.setItem(itemName, JSON.stringify([]))
      parsedItems = [];
    } else {
      parsedItems = JSON.parse(localStoreItems);
    }

    const [itemsList, setItemsList] = React.useState(parsedItems);

    const saveItemsList = (itemsList) => {
      localStorage.setItem(itemName, JSON.stringify(itemsList))
      setItemsList(itemsList)
    };

    return [itemsList, saveItemsList];

};

export { useLocalStorage };