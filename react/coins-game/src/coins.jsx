import React, { useState } from "react";


function Coins() {
  const [coin, setCoin] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [upgradeEnabled, setUpgradeEnabled] = useState(true);
  const [upgradeEnabled1, setUpgradeEnabled1] = useState(true);
  const [upgradeEnabled2, setUpgradeEnabled2] = useState(true);
  const [upgradeEnabled3, setUpgradeEnabled3] = useState(true);
  const [upgradeEnabled4, setUpgradeEnabled4] = useState(true);
  

  function handleEnergyChange() {
    if (upgradeEnabled) {
      setEnergy(energy + 1);
    } else {
      setEnergy(energy + 5);
    }
  }

  function handleCoinChange() {
    if (energy >= 1 && upgradeEnabled1) {
      setEnergy(energy - 1);
      setCoin(coin + 0.1);
    } else if (energy >= 1 && !upgradeEnabled1) {
      setEnergy(energy - 1);
      setCoin(coin + 0.5);
    } else if (energy >= 5 && !upgradeEnabled3){
      setEnergy(energy - 5);
      setCoin(coin + 1.5);
    }else {
      alert("Not enough energy");
    }
  }

  function handleUpgrade() {
    if (coin >= 100 && upgradeEnabled) {
      setCoin(coin - 100);
      setUpgradeEnabled(false);
    } else if (!upgradeEnabled) {
      alert("Upgrade already purchased");
    } else {
      alert("Not enough coins to upgrade (need 100)");
    }
  }

  function handleUpgrade1() {
    if (coin >= 10 && upgradeEnabled1) {
      setCoin(coin - 10);
      setUpgradeEnabled1(false);
    } else if (!upgradeEnabled1) {
      alert("Upgrade already purchased");
    } else {
      alert("Not enough coins to upgrade (need 100)");
    }
  }

  function handleUpgrade2(){
    if (coin >= 1000 && upgradeEnabled2){
      setCoin(coin - 1000)
      setUpgradeEnabled2(false);
    } else if (!upgradeEnabled2){
      alert("Upgrade already purchased")
    } else {
      alert("Not enough coins to upgrade (need 1000)")
    }
  }

  function infinityMoney() {
    if (coin >= 10000 && upgradeEnabled2) {
      setCoin(99999);
      setEnergy(99999);
      setUpgradeEnabled2(false)
    }else if (!upgradeEnabled2){
        alert("Gamepass purshed")
    }else {
      alert("Poor guy its cost 10000 coins");
    }
  }
  function chad() {
    if (coin >= 100000) {
      setCoin(coin - 100000);
      alert("You Are Giga Chad Now");
    } else {
      alert("Collect Money, you need More:" + " " + (100000 - coin));
    }
  }

  return (
    <div className="container">
      <h2>Energy: {energy}</h2>
      <button onClick={handleEnergyChange}>Click for Energy</button>
      <button onClick={handleUpgrade} disabled={!upgradeEnabled}>
        Upgrade (100)
      </button>
      <h2>Coins: {coin.toFixed(1)}</h2>
      <button onClick={handleCoinChange}>Click for Money</button>
      <button onClick={handleUpgrade1} disabled={!upgradeEnabled1}>
        Upgrade (100)
      </button>
      <button onClick={handleUpgrade2} disabled={!upgradeEnabled3}>
        Upgrade (1000)
      </button>
      <h2>Gamepass</h2>
      <button onClick={infinityMoney}>99999 money & energy (10000 coin)</button>
      <h1>The End</h1>
      <button onClick={chad}>Become Chad</button>
    </div>
  );
}

export default Coins;
