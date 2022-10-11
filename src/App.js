import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectCoin, setSelectCoin] = useState(0);
  const [money, setMoney] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const selectChange = event => {
    setSelectCoin(event.target.value);
  };
  const moneyText = event => {
    setMoney(event.target.value);
  };
  const onSubmit = event => {
    event.preventDefault();
    if (money === '') {
      return;
    }
    setQuantity(money / selectCoin);
  };

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      <h2>My Money : {money}$</h2>
      <h3>Quantity : {quantity}</h3>
      <form onSubmit={onSubmit}>
        <input type="number" onChange={moneyText} placeholder="money..." />
        <button>calculate</button>
      </form>
      <hr />
      <div>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <select onChange={selectChange}>
            <option hidden>select coin</option>
            {coins.map(coin => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}

export default App;
