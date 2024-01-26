import Box from '../../atoms/Box/Box';
import style from './financelayout.module.scss';

const FinanceLayout = ({financeData, isLoading}) => {

    const handleNegative = (variation) => variation < 0 ? true : false

    console.log(Object.keys(financeData)[2])

    return (
        <>
            <Box flexDirection='row'>
                <h2 style={{width: '100%'}}>{Object.keys(financeData)[0].toUpperCase()}:</h2>
                {!isLoading && financeData.stocks.map((stockItem, index) => (
                    <div key={index} className={style.card_stock}>
                        <h2 style={{color: handleNegative(stockItem.variation) ? 'red' : '#D2FF3A' }}>{stockItem.variation}</h2>
                        <strong>{stockItem.name}</strong>
                        <p>{stockItem.location}</p>
                    </div> 
                ))}
            </Box>
            <Box flexDirection='row'>
            <h2 style={{width: '100%'}}>{Object.keys(financeData)[1].toUpperCase()}:</h2>
                {!isLoading && financeData.bitcoin.map((bitcoinItem, index) => (
                    <div key={index} className={style.card_default}>
                        <h2 style={{color: handleNegative(bitcoinItem.variation) ? 'red' : '#D2FF3A' }}>{bitcoinItem.variation}</h2>
                        <strong>{bitcoinItem.name}</strong>
                        <p>{bitcoinItem.location}</p>
                    </div>
                ))}
            </Box>
            <Box flexDirection='row'>
            <h2 style={{width: '100%'}}>{Object.keys(financeData)[2].toUpperCase()}:</h2>
                {!isLoading && financeData.currencies.map((currencyItem, index) => (
                    <div key={index}className={style.card_default}>
                        <h2 style={{color: handleNegative(currencyItem.variation) ? 'red' : '#D2FF3A' }}>{currencyItem.variation}</h2>
                        <strong>{currencyItem.name}</strong>
                        <p>{currencyItem.location}</p>
                    </div>
                ))}
             </Box>
        </>
    )
}

export default FinanceLayout;