export default async function handler(req, res) {
 
    try {
    
       const response = await fetch('https://api.hgbrasil.com/finance?key=ba7128c5');

      
       const data = await response.json();
       const stocks = Object.entries(data.results.stocks)

         .map(([key, value]) => [key, value])
         .flat()
         .filter(item => typeof item === 'object')
         .slice(0, 6);
    
       const currencies = Object.entries(data.results.currencies)
         .map(([key, value]) => [key, value])
         .flat()
         .filter(item => typeof item === 'object')
         .slice(0, 6);
    
      
       const bitcoin = Object.entries(data.results.bitcoin)
         .map(([key, value]) => [key, value])
         .flat()
         .filter(item => typeof item === 'object')
         .slice(0, 6);
    
      
       res.status(200).json({ stocks, currencies, bitcoin });
     } catch (error) {
      
       console.error('Error fetching data:', error);
       res.status(500).json({ error: 'Failed to fetch data' });
     }
    }