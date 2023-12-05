interface MenuItem {
  key?: string,
  subItems?: MenuItem[]
}

let menuItems: MenuItem[] = [
  {key: 'home'},
  {key: 'products',
   subItems: [
    {key: 'phones'},
    {key: 'android', subItems: [
      {key: 'and1'},
      {key: 'and2'}
    ]}
  ] }
]


//* in this method we depend on passing the data structure `allObservables` and `allKeys`
//* by refrence so i don't return anything from the nested function it access the 
//* the data structure directly and assign data to it
//* so inside `getMenuObservablesAndKeys` function we just call it recursively and 
//* push the data to the `shared` data structures
function getAllObservables(menuItems: MenuItem[]) {
  let allObservables: any[] = [];
  let allKeys: any[] = []

  getMenuObservablesAndKeys(menuItems, allObservables, allKeys);
  return { allObservables, allKeys };
}

function getMenuObservablesAndKeys(items: MenuItem[], allObservables: any[], allKeys: any[]) {
  debugger
  for (const item of items) {
    const key = item.key;
    if (key) {
      allKeys.push(key)
      allObservables.push(`${key}-Observable`);
    }

    const subItems = item.subItems;
    if (subItems && subItems.length > 0) {
       getMenuObservablesAndKeys(subItems, allObservables, allKeys);
    }
  }
}
getAllObservables(menuItems)


//* Solution that depends on adding the return of the recursive functions calls
//* to the data structure that responsibe for saving all data 
//* so we get the return function of {allKeys, allObservables} 
//* but call them with another name and append them to the data structure in 
//* the previouse call of function

// function getMenuObservablesAndKeys(items: MenuItem[]) {
//   debugger
//   let allObservables: any[] = [];
//   let allKeys: any[] = []
//   for (const item of items) {
//     const key = item.key;
//     if (key) {
//       allKeys.push(key)
//       allObservables.push(`${key}-Observable`);
//     }

//     const subItems = item.subItems;
//     if (subItems && subItems.length > 0) {
//       const {allKeys: subKeys, allObservables: subObservables} = getMenuObservablesAndKeys(subItems);
//       allObservables = [...allObservables, ...subObservables]
//       allKeys = [...allKeys, ...subKeys]
//     }
//   }

//   return {allKeys, allObservables}
// }

// getMenuObservablesAndKeys(menuItems)
