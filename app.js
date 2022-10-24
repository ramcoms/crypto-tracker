// bitcoin
const btc_usd = document.getElementById('btc-usd');
const btc_mkt_cap = document.getElementById('btc-mkt-cap');
const btc_vol = document.getElementById('btc-vol');
const btc_chg = document.getElementById('btc-chg');
const btc_php = document.getElementById('btc-php');

// ethereum
const eth_usd = document.getElementById('eth-usd');
const eth_mkt_cap = document.getElementById('eth-mkt-cap');
const eth_vol = document.getElementById('eth-vol');
const eth_chg = document.getElementById('eth-chg');
const eth_php = document.getElementById('eth-php');

// ethereum
const sol_usd = document.getElementById('sol-usd');
const sol_mkt_cap = document.getElementById('sol-mkt-cap');
const sol_vol = document.getElementById('sol-vol');
const sol_chg = document.getElementById('sol-chg');
const sol_php = document.getElementById('sol-php');

// APIs
const API_USD =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Csolana&order=market_cap_desc';

const API_PHP =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=bitcoin%2Cethereum%2Csolana&order=market_cap_desc';

//   vs PHP
let php_btc = 0;
let php_eth = 0;
let php_sol = 0;

async function getUsd() {
  const res = await fetch(API_USD);
  const data = await res.json();
  const [btc, eth, sol] = data;

  btc_usd.innerText = `$${btc.current_price}`;
  btc_mkt_cap.innerText = btc.market_cap.toLocaleString();
  btc_vol.innerText = btc.total_volume.toLocaleString();
  btc_chg.innerText = btc.price_change_percentage_24h;
  btc_php.innerText = php_btc;

  eth_usd.innerText = `$${eth.current_price}`;
  eth_mkt_cap.innerText = eth.market_cap.toLocaleString();
  eth_vol.innerText = eth.total_volume.toLocaleString();
  eth_chg.innerText = eth.price_change_percentage_24h;
  eth_php.innerText = php_eth;

  sol_usd.innerText = `$${sol.current_price}`;
  sol_mkt_cap.innerText = sol.market_cap.toLocaleString();
  sol_vol.innerText = sol.total_volume.toLocaleString();
  sol_chg.innerText = sol.price_change_percentage_24h;
  sol_php.innerText = php_sol;

  changeColor(btc.price_change_percentage_24h, btc_chg);
  changeColor(eth.price_change_percentage_24h, eth_chg);
  changeColor(sol.price_change_percentage_24h, sol_chg);
}

async function getPhp() {
  const res = await fetch(API_PHP);
  const data = await res.json();
  const [btc, eth, sol] = data;

  php_btc = btc.current_price.toLocaleString();
  php_eth = eth.current_price.toLocaleString();
  php_sol = sol.current_price.toLocaleString();
}

getUsd();
getPhp();

function changeColor(chg, obj) {
  if (chg > 0) {
    obj.classList.add('gain');
  } else {
    obj.classList.remove('gain');
    obj.classList.add('loss');
  }
}
