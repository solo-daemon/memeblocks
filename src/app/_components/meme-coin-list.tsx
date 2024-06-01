"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface MemeCoinCardProps {
    imageUrl: string;
    creator: string;
    value: string;
    name: string;
    description: string;
  }
  

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
const [searchQuery, setSearchQuery] = useState('');

const handleSearch = () => {
    onSearch(searchQuery);
};

const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
    handleSearch();
    }
};

return (
    <div className="flex justify-center">
        <div className="relative w-3/5 pr-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-white">
        <input
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent py-3 px-4"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
    />
    <button
        className="absolute right-5 top-0 bottom-0 text-white px-4 py-3 rounded-full focus:outline-none"
        onClick={handleSearch}
      >
        <FaSearch />
    </button>
        </div>
    </div>
);
};

const MemeCoinCard: React.FC<MemeCoinCardProps> = ({ imageUrl, creator, value, name, description }) =>{

    const truncateText = (text: string, maxLength: number): string => {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + '...'; // Truncate text if it exceeds maxLength
        }
        return text;
      };

    const formatValue = (value: string): string => {
        const parsedValue = parseFloat(value);
      
        if (!isNaN(parsedValue)) {
          if (parsedValue >= 1000) {
            return `${(parsedValue / 1000).toFixed(1)}k$`; // Convert to k$ if value is 1000 or more
          }
          return `$${parsedValue.toFixed(2)}`; // Otherwise, format as dollars with two decimal places
        }
      
        return value; // Return the original value if parsing fails
      };

      const generateBadgeColor = (userName: string = 'helloworld'): string => {
        const colors = ['#FF5733', '#33FFB8', '#3333FF', '#FF33FB', '#A5FF33', '#FF3333']; // Predefined set of colors
        const index = Math.floor(Math.abs(userName.charCodeAt(5)) % colors.length); // Select color based on user name
        return colors[index];
      };

    const badgeColor = generateBadgeColor(creator);

    return(
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 flex hover:border-blue-500 transition-all duration-300">
            <img 
                src={imageUrl} 
                alt={name}
                className="className=w-24 h-24 object-cover rounded-lg mr-4" 
                loading="lazy"
            />
            <div className="flex flex-col justify-between">
                <div className="flex items-center">
                    <span className="text-yellow-400 font-bold ">created by</span>
                    <span style={{ backgroundColor: badgeColor }} className="text-black text-xs font-semibold py-1 px-2 rounded-full ml-1">{truncateText(creator, 15)}</span>
                </div>
                <p className="text-teal-500 text-sm font-bold mb-1">Net Value: {formatValue(value)}</p>
                <span className="font-bold inline-block mr-1">{name}:</span>
                <p className="text-gray-400 inline-block">{truncateText(description, 100)}</p>
            </div>
        </div>
    );
}

export const MemeCoinList = () => {
    const onSearch = (query:string): void =>{

    }
    return(
        <div className="md:container md:mx-auto">
            <div className="my-4">
                <SearchBar onSearch={onSearch}/>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <MemeCoinCard imageUrl="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716854400&semt=ais_user" creator="0xCA67D84A967053CA4d6F45cCF706Db85CD651538" value="142.4" name="shiba-inu" description="this is coin for all the bitches out there"/>
                <MemeCoinCard imageUrl="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716854400&semt=ais_user" creator="0x923456980" value="142.4" name="shiba-inu" description="this is coin for all the bitches out there"/>
                <MemeCoinCard imageUrl="https://contenthub-static.crypto.com/wp_media/2023/08/TOP-10-NFT-TOKENS-TO-KNOW-IN-2023-.jpg" creator="0x923456980" value="142.4" name="shiba-inu" description="this is coin for all the bitches out there"/>
                <MemeCoinCard imageUrl="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716854400&semt=ais_user" creator="0xCA67D84A967053CA4d6F45cCF706Db85CD651538" value="142.4" name="shiba-inu" description="this is coin for all the bitches out there"/>
                <MemeCoinCard imageUrl="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716854400&semt=ais_user" creator="0x923456980" value="142.4" name="shiba-inu" description="this is coin for all the bitches out there"/>
                <MemeCoinCard imageUrl="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716854400&semt=ais_user" creator="0x923456980" value="142.4" name="shiba-inu" description="this is coin for all the bitches out there"/>
                <MemeCoinCard imageUrl="https://contenthub-static.crypto.com/wp_media/2023/08/TOP-10-NFT-TOKENS-TO-KNOW-IN-2023-.jpg" creator="0x923456980" value="142.4" name="shiba-inu" description="this is coin for all the bitches out there yo yo hellow there"/>

            </div>
        </div>
    )
}