"use client";
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';
import { DISCORD_URL, TWITTER_URL, GITHUB_URL } from "~/const";
import { ConnectWalletButton } from "./connect-wallet-button";
const SocialLinks = () => {
    return(
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <FaDiscord className="text-xl" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaGithub className="text-xl" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter className="text-xl" />
          </a>
        </div>
    );
}




export const NavBar = ()=> {
    return(
        <nav className="bg-transparent w-full z-10 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <SocialLinks />
            <ConnectWalletButton />
          </div>
        </nav>
    );
}