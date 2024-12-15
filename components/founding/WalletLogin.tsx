import { useState } from "react";

const WalletCard = () => {
  // Datos simulados de la wallet
  const [walletData] = useState({
    walletAddress: "0xF3bJb9e3f09230a9030c0f9c2F6E06Cbd1EabF84",
    balance: 4500.75, // Fondos en "CryptoCoins"
    currency: "CryptoCoins",
  });

  return (
    <div className="flex justify-center items-center p-8">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full sm:w-96 max-w-xs">
        <h2 className="text-center text-darkGoldColor text-2xl font-semibold mb-4">
          Wallet Overview
        </h2>

        {/* Wallet address */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-500">
            Wallet Address
          </h3>
          <p className="text-lg font-medium text-gray-700 truncate">
            {walletData.walletAddress}
          </p>
        </div>

        {/* Wallet balance */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500">Balance</h3>
          <p className="text-2xl font-bold text-darkBlue">
            {walletData.balance} {walletData.currency}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full mr-2 transition-colors duration-300">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
