import React from 'react';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-96 space-y-5">
      <span className="text-5xl">Botomir</span>
      <span className="text-xl">Your friendly neighbourhood Discord bot</span>
      <div className="flex flex-col space-y-2">
        <a href="https://discord.com/api/oauth2/authorize?client_id=782053704227487754%20%20%20%20%20%20%20%20&permissions=469887088&scope=bot" target="_blank" rel="noreferrer" className="btn btn-primary w-96 normal-case">Add to Server</a>
        <a href="https://paypal.me/soorajmodi" target="_blank" rel="noreferrer" className="btn btn-primary w-96 normal-case">Donate</a>
      </div>
    </div>
  );
}

export default Home;
