import client from './contentful';

export const retrieveWineList = async () => {
  try {
    const response = await client.getEntries({ content_type: 'sitoVini' }); // 'vino' è il tuo tipo di contenuto
    const wineList = response.items.map(item => item.fields);
    console.log("Wine List", wineList);
    return wineList;
  } catch (error) {
    console.error('Error retrieving wine list:', error);
    return [];
  }
};

export const retrieveWineListCarreaMarco = async () => {
  try {
    const response = await client.getEntries({ content_type: 'viniCarreaMarco' }); // 'vino' è il tuo tipo di contenuto
    const wineList = response.items.map(item => item.fields);
    console.log("Wine List", wineList);
    return wineList;
  } catch (error) {
    console.error('Error retrieving wine list:', error);
    return [];
  }
};

export const retrieveBeerListCarreaMarco = async () => {
  try {
    const response = await client.getEntries({ content_type: 'birreMarcoCarrea' }); // 'vino' è il tuo tipo di contenuto
    const beerList = response.items.map(item => item.fields);
    console.log("Beer List", beerList);
    return beerList;
  } catch (error) {
    console.error('Error retrieving beer list:', error);
    return [];
  }
};
