/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import SvgIcon from "@mui/material/SvgIcon";
import { IconButton } from "@mui/material";

const MobileMinter = (props) => {
  //State variables
  // const [walletAddress, setWallet] = useState("");
  // const [status, setStatus] = useState("");
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [url, setURL] = useState("");

  // function addWalletListener() {
  //   if (window.ethereum) {
  //     window.ethereum.on("accountsChanged", (accounts) => {
  //       if (accounts.length > 0) {
  //         setWallet(accounts[0]);
  //         setStatus("👆🏽 Write a message in the text-field above.");
  //       } else {
  //         setWallet("");
  //         setStatus("🦊 Connect to Metamask using the top right button.");
  //       }
  //     });
  //   } else {
  //     console.log(status);
  //     setStatus(
  //       <p>
  //         {" "}
  //         🦊{" "}
  //         <a
  //           target="_blank"
  //           rel="noreferrer"
  //           href={`https://metamask.io/download.html`}
  //         >
  //           You must install Metamask, a virtual Ethereum wallet, in your
  //           browser.
  //         </a>
  //       </p>
  //     );
  //   }
  // }

  // async function getStatus() {
  //   const { address, status } = await getCurrentWalletConnected();
  //   setWallet(address);
  //   setStatus(status);

  //   addWalletListener();
  // }

  // useEffect(() => {
  //   getStatus();
  // }, []);

  // const connectWalletPressed = async () => {
  //   const walletResponse = await connectWallet();
  //   setStatus(walletResponse.status);
  //   setWallet(walletResponse.address);
  // };

  // const disconnectWalletPressed = async () => {
  //   setWallet("");
  // };

  // const onMintPressed = async () => {
  //   //TODO: implement
  // };

  return (
    <div className="MobileMinter">
      {/* <Toolbar>
        <div className="Navbar">
          <a href="#FAQ">
            <Button>FAQ</Button>
          </a>
          <a href="#Roadmap">
            <Button>ROADMAP</Button>
          </a>
          <a href="#Team">
            <Button>TEAM</Button>
          </a>
          <a href="#Artists">
            <Button>ARTISTS</Button>
          </a>
          <a href="#Popkarts">
            <Button>POPKARTS</Button>
          </a>
        </div>
        <Button
          id="walletButton"
          variant="outlined"
          onClick={connectWalletPressed}
        >
          {walletAddress.length > 0 ? (
            "Connected: " +
            String(walletAddress).substring(0, 6) +
            "..." +
            String(walletAddress).substring(38)
          ) : (
            <span>Connect Wallet</span>
          )}
        </Button>
      </Toolbar>
      <br /> */}
      <div className="Pizzaz">
        <img
          src="lolpop-mobile-banner6.png"
          className="MobileBannerImage"
          alt="nft"
        ></img>
        <h1 className="MobileTitle">LOLPOPs NFT</h1>
        <img
          src="lolpop-mobile-banner1.png"
          className="MobileBannerImage"
          alt="nft"
        ></img>
      </div>
      {/* <p id="status">{status}</p> */}
      <h3>
        LOLPOPs is a collection of 10,000 randomly-generated photorealistic NFTs
        living on the Ethereum Blockchain.
      </h3>
      <ImageContainer>
        <MinterImage src="lolpop3.png" alt="nft"></MinterImage>
      </ImageContainer>
      {/* <form>
        <input
          type="text"
          placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
          onChange={(event) => setURL(event.target.value)}
        />
        <h2>🤔 Name: </h2>
        <input
          type="text"
          placeholder="e.g. My first NFT!"
          onChange={(event) => setName(event.target.value)}
        />
        <h2>✍️ Description: </h2>
        <input
          type="text"
          placeholder="e.g. Even cooler than cryptokitties ;)"
          onChange={(event) => setDescription(event.target.value)}
        />
      </form> */}
      {/* <button id="mintButton" onClick={onMintPressed}>
        Mint NFT
      </button> */}
      <br />
      <h3>
        We set out to make an NFT collection created with an innovative process,
        and share our artistic ability and experience in design. In our search
        for the best way to accomplish this, we have chosen to use a renowned
        digital tool used specifically in the VFX field: SideFX Houdini. Using
        Procedural Dependency Graph (PDG), we utilized procedural architecture
        designed to distribute tasks and manage dependencies to better scale,
        automate, and analyze content pipelines.
      </h3>
      <h3>
        LOLPOPs are not just another pfp project, they are your playable
        characters in POPKARTS, a P2E web3 racing game being developed in Unreal
        Engine.
      </h3>
      <br />
      <hr className="Divider" id="FAQ" />
      <br />
      <h2 className="SectionTitle">FAQ</h2>
      <h2>HOW CAN WE MINT?</h2>
      <h3>
        On Minting-Day, head to our to confirm your mint window! We are
        finalizing systems to ensure we avoid "Gas Wars" by allowing users
        extended periods of time to mint after their wallet address is verified
        - we are looking into potential solutions, and will be sure to update
        everyone soon on how we'll handle our mint-reservations!
      </h3>
      <h2>HOW MUCH TO MINT A LOLPOP?</h2>
      <h3>0.08 ETH</h3>
      <h2>HOW MANY LOLPOPS CAN WE MINT?</h2>
      <h3>Maximum of 10 per Transaction</h3>
      <h2>WHEN WILL LOLPOPS REVEAL?</h2>
      <h3>Right After Mint!</h3>
      <br />
      <hr className="Divider" id="Roadmap" />
      <br />
      <h2 className="SectionTitle">ROADMAP ACTIVATIONS</h2>
      <h3>
        We have lots of information, donations, and prizes to reveal as we
        proceed through our sale targets. For more detialed information on our
        roadmap and giveaways, visit our discord!
      </h3>
      <br />
      <h3 className="SaleTarget">0%</h3>
      <h3>LOLPOPs Released for Mint!</h3>
      <br />
      <h3 className="SaleTarget">10%</h3>
      <h3>Buy food that is not Top Ramen</h3>
      <br />
      <h3 className="SaleTarget">25%</h3>
      <h3>POPSQUAD goes looking for New Driver-Teams (Collabs)</h3>
      <br />
      <h3 className="SaleTarget">40%</h3>
      <h3>Layer 2 for PopKarts Revealed</h3>
      <br />
      <h3 className="SaleTarget">50%</h3>
      <h3>Post-Mintout Charity Revealed</h3>
      <br />
      <h3 className="SaleTarget">65%</h3>
      <h3>Merch-Shop Developed and Special Merch Giveaways</h3>
      <br />
      <h3 className="SaleTarget">80%</h3>
      <h3>ETH Giveways</h3>
      <br />
      <h3 className="SaleTarget">90%</h3>
      <h3>Airdrop Reveal for all LOLPOPs Holders</h3>
      <br />
      <h3 className="SaleTarget">100%+</h3>
      <h3>
        PopKarts Release, Italy-Trip Giveaway, Seasons Revealed, Airdrop
        Initiated
      </h3>

      <br />
      <hr className="Divider" id="Team" />
      <br />
      <h2 className="SectionTitle">THE TEAM</h2>
      <h3>
        LOLPOPs was created to bring community together through our love of
        gaming, and allow players to earn value for their participation.
      </h3>
      <br />
      <h3>CryptoPaco</h3>
      <h3>Founder and 3D Technical Developer</h3>
      <br />
      <h3>Pancake</h3>
      <h3>Founder and Visual Artist</h3>
      <br />
      <h3>Yz</h3>
      <h3>Project Manager</h3>
      <br />
      <h3>Technologist</h3>
      <h3>Web/Solidity Engineer</h3>
      <br />
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <img src="teampop1.png" alt="nft" className="TeamImage"></img>
          <img src="teampop2.png" alt="nft" className="TeamImage"></img>
        </Grid>
        <Grid item xs={12} md={12}>
          <img src="teampop3.png" alt="nft" className="TeamImage"></img>
          <img src="teampop4.png" alt="nft" className="TeamImage"></img>
        </Grid>
      </Grid>
      <br />
      <br />
      <hr className="Divider" id="Artists" />
      <br />
      <h2 className="SectionTitle">MORE ABOUT OUR ARTISTS</h2>
      <h2>CryptoPaco</h2>
      <h3>
        Founder and 3D Technical Developer of LOLPOPs I've been working for
        almost 29 years in the visual effects field and contributing to develop
        FX and pipelines for known shows such as Watchmen, Captain Marvel,
        Geostorm, Thor: Ragnarok, King Arthur: Legend of the Sword, Doctor
        Strange, The Legend of Tarzan, Thor: The Dark World, Total Recall, John
        Carter, Captain America: The First Avenger, Harry Potter and the Deathly
        Hallows: Part 2, The Chronicles of Narnia: The Voyage of the Dawn
        Treader. Using a process combining physics and mathematics, with use of
        Python, C, MEL and VEX I've developed different production tools and
        solutions. For many years my role has been Effects Technical Director,
        specifically managing and simulating rigid body dynamics, particles
        systems, fluid dynamics, explosions, dust, debris, and tearing metals.
      </h3>
      <h2>Pancake</h2>
      <h3>
        Founder and Visual Artist of LOLPOPs, I’ve been working as a Digital
        Artist in the advertising industry since 2013 for a variety of clients,
        such as Youtube, WWF, Skoda, Dazn, Barilla, Discovery, and many more! I
        was published in 200 Best Digital Artists Worldwide 2021/2022 by
        Lürzer's Archive.
      </h3>
      <br />
      <hr className="Divider" id="Popkarts" />
      <br />
      <h2 className="SectionTitle">POPKARTS</h2>
      <h3>
        We're working to be able to release an early-access form of POPKARTS as
        soon after the mint as possible - we're exploring all sorts of
        possibilities. You will use your LOLPOP as a playable character to race,
        for scorekeeping, and more! Building is underway! We plan to continue
        ideating and upgrading POPKARTS as we go, and that means post-mint, too!
        We're incredibly excited for this. Our team is working hard to develop
        environment, characters, in-game systems, hosting solutions and
        interoperability for POPKARTS. The game will be web-hosted for all to
        play! Your LOLPOP NFT will be your ticket into POPKARTS!
      </h3>
      <br />
      <div className="Socialbar">
        <IconButton href="https://twitter.com/lolpopsnft">
          <SvgIcon color="primary">
            <path d="M21.634,4.031c-0.815,0.385-2.202,1.107-2.899,1.245c-0.027,0.007-0.049,0.016-0.075,0.023 c-0.813-0.802-1.927-1.299-3.16-1.299c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.218,0-5.568-1.679-7.327-3.837 C3.438,4.873,3.188,5.024,3.136,5.23C3.019,5.696,2.979,6.475,2.979,7.031c0,1.401,1.095,2.777,2.8,3.63 c-0.314,0.081-0.66,0.139-1.02,0.139c-0.424,0-0.912-0.111-1.339-0.335c-0.158-0.083-0.499-0.06-0.398,0.344 c0.405,1.619,2.253,2.756,3.904,3.087c-0.375,0.221-1.175,0.176-1.543,0.176c-0.136,0-0.609-0.032-0.915-0.07 c-0.279-0.034-0.708,0.038-0.349,0.582c0.771,1.167,2.515,1.9,4.016,1.928c-1.382,1.084-3.642,1.48-5.807,1.48 c-0.438-0.01-0.416,0.489-0.063,0.674C3.862,19.504,6.478,20,8.347,20C15.777,20,20,14.337,20,8.999 c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.589-0.425,1.491-1.163,1.947-1.728c0.155-0.192,0.03-0.425-0.181-0.352 c-0.543,0.189-1.482,0.555-2.07,0.625c1.177-0.779,1.759-1.457,2.259-2.21C22.109,4.168,21.895,3.907,21.634,4.031z"></path>
          </SvgIcon>
        </IconButton>
        <IconButton href="https://discord.gg/eF6Ewk6ysQ">
          <SvgIcon color="primary">
            <path d="M18.942 5.556a16.299 16.299 0 0 0-4.126-1.297c-.178.321-.385.754-.529 1.097a15.175 15.175 0 0 0-4.573 0 11.583 11.583 0 0 0-.535-1.097 16.274 16.274 0 0 0-4.129 1.3c-2.611 3.946-3.319 7.794-2.965 11.587a16.494 16.494 0 0 0 5.061 2.593 12.65 12.65 0 0 0 1.084-1.785 10.689 10.689 0 0 1-1.707-.831c.143-.106.283-.217.418-.331 3.291 1.539 6.866 1.539 10.118 0 .137.114.277.225.418.331-.541.326-1.114.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595c.415-4.396-.709-8.209-2.973-11.589zM8.678 14.813c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c.001 1.123-.793 2.045-1.798 2.045zm6.644 0c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c0 1.123-.793 2.045-1.798 2.045z" />
          </SvgIcon>
        </IconButton>
      </div>
      <br />
    </div>
  );
};

export default MobileMinter;

const ImageContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  rowGap: "10px",
  columnGap: "10px",
});

const MinterImage = styled("img")({
  width: "300px",
  height: "300px",
  borderRadius: "5%",
  border: "2px solid #242424",
});
