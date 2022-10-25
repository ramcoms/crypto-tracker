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

// ripple
const xrp_usd = document.getElementById('xrp-usd');
const xrp_mkt_cap = document.getElementById('xrp-mkt-cap');
const xrp_vol = document.getElementById('xrp-vol');
const xrp_chg = document.getElementById('xrp-chg');
const xrp_php = document.getElementById('xrp-php');

// solana
const sol_usd = document.getElementById('sol-usd');
const sol_mkt_cap = document.getElementById('sol-mkt-cap');
const sol_vol = document.getElementById('sol-vol');
const sol_chg = document.getElementById('sol-chg');
const sol_php = document.getElementById('sol-php');

// APIs
const API_USD =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Csolana%2Cripple&order=market_cap_desc';

const API_PHP =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&ids=bitcoin%2Cethereum%2Cripple%2Csolana&order=market_cap_desc';

//   vs PHP
let php_btc = 0;
let php_eth = 0;
let php_xrp = 0;
let php_sol = 0;

async function getUsd() {
  const res = await fetch(API_USD);
  const data = await res.json();
  const [btc, eth, xrp, sol] = data;

  btc_usd.innerText = `$${btc.current_price.toLocaleString()}`;
  btc_mkt_cap.innerText = btc.market_cap.toLocaleString();
  btc_vol.innerText = btc.total_volume.toLocaleString();
  btc_chg.innerText = `${btc.price_change_percentage_24h.toFixed(2)}%`;
  btc_php.innerText = php_btc;

  eth_usd.innerText = `$${eth.current_price.toLocaleString()}`;
  eth_mkt_cap.innerText = eth.market_cap.toLocaleString();
  eth_vol.innerText = eth.total_volume.toLocaleString();
  eth_chg.innerText = `${eth.price_change_percentage_24h.toFixed(2)}%`;
  eth_php.innerText = php_eth;

  xrp_usd.innerText = `$${xrp.current_price.toLocaleString()}`;
  xrp_mkt_cap.innerText = xrp.market_cap.toLocaleString();
  xrp_vol.innerText = xrp.total_volume.toLocaleString();
  xrp_chg.innerText = `${xrp.price_change_percentage_24h.toFixed(2)}%`;
  xrp_php.innerText = php_xrp;

  sol_usd.innerText = `$${sol.current_price.toLocaleString()}`;
  sol_mkt_cap.innerText = sol.market_cap.toLocaleString();
  sol_vol.innerText = sol.total_volume.toLocaleString();
  sol_chg.innerText = `${sol.price_change_percentage_24h.toFixed(2)}%`;
  sol_php.innerText = php_sol;

  changeColor(btc.price_change_percentage_24h, btc_chg);
  changeColor(eth.price_change_percentage_24h, eth_chg);
  changeColor(xrp.price_change_percentage_24h, xrp_chg);
  changeColor(sol.price_change_percentage_24h, sol_chg);
}

async function getPhp() {
  const res = await fetch(API_PHP);
  const data = await res.json();
  const [btc, eth, xrp, sol] = data;

  php_btc = btc.current_price.toLocaleString();
  php_eth = eth.current_price.toLocaleString();
  php_xrp = xrp.current_price.toLocaleString();
  php_sol = sol.current_price.toLocaleString();
}

function changeColor(chg, obj) {
  if (chg > 0) {
    obj.classList.add('gain');
  } else {
    obj.classList.remove('gain');
    obj.classList.add('loss');
  }
}

getUsd();
getPhp();
