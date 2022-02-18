/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "./utils/interact.js";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SvgIcon from "@mui/material/SvgIcon";
import { IconButton, Toolbar, Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Minter = (props) => {
  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [url, setURL] = useState("");

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      console.log(status);
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://metamask.io/download.html`}
          >
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  async function getStatus() {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);

    addWalletListener();
  }

  useEffect(() => {
    getStatus();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const disconnectWalletPressed = async () => {
    setWallet("");
  };

  // const onMintPressed = async () => {
  //   //TODO: implement
  // };

  return (
    <div>
      <div className="Toolbar">
        <Toolbar className="Toolbar">
          <img alt="lolpops-nft" src="logo2.png" className="WebLogo" />
          <Box>
            <Button>
              <a href="#About">ABOUT</a>
            </Button>
            <Button>
              <a href="#Roadmap">ROADMAP</a>
            </Button>
            <Button>
              <a href="#Team">TEAM</a>
            </Button>
            <Button>
              <a href="#Artists">ARTISTS</a>
            </Button>
            <Button>
              <a href="#Popkarts">POPKARTS</a>
            </Button>
            <Button>
              <a href="#FAQ">FAQ</a>
            </Button>
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
            {walletAddress.length > 0 ? (
              <Button
                id="walletButton"
                variant="text"
                onClick={disconnectWalletPressed}
              >
                <span>Disconnect Wallet</span>
              </Button>
            ) : (
              <Button
                id="walletButton"
                variant="text"
                onClick={connectWalletPressed}
              >
                <span>Connect Wallet</span>
              </Button>
            )}
          </Box>
        </Toolbar>
      </div>
      <div className="LogoContainer">
        <div class="fade-in">
          <img className="Banner" src="pop_hero.png" alt="nft"></img>
        </div>
      </div>
      <div class="slide-up">
        <div className="BannerText">
          <h2 id="About">
            LOLPOPs is a collection of 10,000 randomly-generated photorealistic
            NFTs living on the Ethereum Blockchain.
          </h2>
        </div>
      </div>
      <div className="Minter">
        {/* <div className="NavContainer">
          <Button>
            <a href="#FAQ">FAQ</a>
          </Button>
          <Button>
            <a href="#Roadmap">ROADMAP</a>
          </Button>
          <Button>
            <a href="#Team">TEAM</a>
          </Button>
          <Button>
            <a href="#Artists">ARTISTS</a>
          </Button>
          <Button>
            <a href="#Popkarts">POPKARTS</a>
          </Button>
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
          {walletAddress.length > 0 ? (
            <Button
              id="walletButton"
              variant="text"
              onClick={disconnectWalletPressed}
            >
              <span>Disconnect Wallet</span>
            </Button>
          ) : (
            <Button
              id="walletButton"
              variant="text"
              onClick={connectWalletPressed}
            >
              <span>Connect Wallet</span>
            </Button>
          )}
        </div> */}
        {/* <div className="LogoContainer">
          <img className="Logo" alt="nft " src="logo2.png"></img>
        </div> */}
        {/* <div className="Hero">
        <MinterImage src="lolpop1.png" alt="nft"></MinterImage>
        <MinterImage src="lolpop2.png" alt="nft"></MinterImage>
        <MinterImage src="lolpop3.png" alt="nft"></MinterImage>
      </div> */}
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
        {/* <h3>
          We set out to make an NFT collection created with an innovative
          process, and share our artistic ability and experience in design.
          LOLPOPs are not just another pfp project, they are your playable
          characters in POPKARTS, a P2E web3 racing game being developed in
          Unreal Engine.
        </h3> */}
        <br />
        <h2 className="SectionTitle">ABOUT</h2>
        <h3>
          We set out to make an NFT collection created with an innovative
          process, to share our artistic ability and experience in design, and
          create a community where we can appreciate the sweeter things in the
          metaverse. LOLPOPs are more than PFPs - they’re your ticket into the
          upcoming POPVERSE. In our search for the best way to accomplish these
          goals, we have chosen to use a renowned tool in VFX, SideFX Houdini,
          to create pops. We used a process called Procedural Dependency Graph
          (PDG). PDG is a procedural architecture designed to distribute tasks
          and manage dependencies to scale, automate, and analyze content
          pipelines for Film, TV, Games, Advertising and VR. PDG is also able to
          automate, iterate, and vary, which is how we get our randomization.
          The "wedging workflow" utilized in PDG lets you create multiple
          iterations of a design. We first create the main subject-character, in
          all it’s aspects, then move on and create a set of accessories and
          items. Once done it's all done, we automate creation of combinations
          and render the final LOLPOPs for all to see!
        </h3>
        <br id="Roadmap" />
        <hr className="Divider" />
        <br />
        <h2 className="SectionTitle">ROADMAP ACTIVATIONS</h2>
        <h3>
          We have lots of information, donations, and prizes to reveal as we
          proceed through our sale targets. For more detialed information on our
          roadmap and giveaways, visit our discord!
        </h3>
        <Grid container spacing={1}>
          <Grid item xs={6} md={1}>
            <h3 className="SaleTarget">0%</h3>
          </Grid>
          <Grid item xs={6} md={11}>
            <h3>LOLPOPs Released for Mint!</h3>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} md={1}>
            <h3 className="SaleTarget">10%</h3>
          </Grid>
          <Grid item xs={6} md={11}>
            <h3>Buy food that is not Top Ramen</h3>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} md={1}>
            <h3 className="SaleTarget">25%</h3>
          </Grid>
          <Grid item xs={6} md={11}>
            <h3>POPSQUAD goes looking for New Driver-Teams (Collabs)</h3>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} md={1}>
            <h3 className="SaleTarget">40%</h3>
          </Grid>
          <Grid item xs={6} md={11}>
            <h3>Layer 2 for PopKarts Revealed</h3>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} md={1}>
            <h3 className="SaleTarget">50%</h3>
          </Grid>
          <Grid item xs={6} md={11}>
            <h3>Post-Mintout Charity Revealed</h3>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} md={1}>
            <h3 className="SaleTarget">65%</h3>
          </Grid>
          <Grid item xs={6} md={11}>
            <h3>Merch-Shop Developed and Special Merch Giveaways</h3>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} md={1}>
            <h3 className="SaleTarget">80%</h3>
          </Grid>
          <Grid item xs={6} md={11}>
            <h3>ETH Giveways</h3>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} md={1}>
            <h3 className="SaleTarget">90%</h3>
          </Grid>
          <Grid item xs={6} md={11}>
            <h3>Airdrop Reveal for all LOLPOPs Holders</h3>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} md={1}>
            <h3 className="SaleTarget">100%+</h3>
          </Grid>
          <Grid item xs={6} md={11}>
            <h3>
              PopKarts Release, Italy-Trip Giveaway, Seasons Revealed, Airdrop
              Initiated
            </h3>
          </Grid>
        </Grid>
        <br id="Team" />
        <hr className="Divider" />
        <br />
        <h2 className="SectionTitle">THE TEAM</h2>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <h3>
              LOLPOPs was created to bring community together through our love
              of gaming, and allow players to earn value for their
              participation.
            </h3>
            <h3>Clat (Pancake): Co-Founder and Visual Artist</h3>
            <h3>CryptoPaco: Co-Founder and 3D Technical Developer</h3>
            <h3>Yz: Project Manager</h3>
            <h3>Tech: Web Developer</h3>
            <h3>Valed: Solidity Developer</h3>
          </Grid>
          <Grid item xs={6} md={1} />
          <Grid item xs={6} md={5}>
            <div className="TeamImageContainer">
              <img src="teampop1.png" alt="nft" className="TeamImage"></img>
              <img src="teampop2.png" alt="nft" className="TeamImage"></img>
            </div>
            <div className="TeamImageContainer">
              <img src="teampop3.png" alt="nft" className="TeamImage"></img>
              <img src="teampop4.png" alt="nft" className="TeamImage"></img>
            </div>
          </Grid>
        </Grid>
        <br />
        <br id="Artists" />
        <hr className="Divider" />
        <br />
        <h2 className="SectionTitle">MORE ABOUT OUR ARTISTS</h2>
        <h2>Clat (Pancake)</h2>
        <h3>
          Co-Founder and Visual Artist of LOLPOPs, I’ve been working as a
          Digital Artist in the advertising industry since 2013 for a variety of
          clients, such as Youtube, WWF, Skoda, Dazn, Barilla, Discovery, and
          many more! I was published in 200 Best Digital Artists Worldwide
          2021/2022 by Lürzer's Archive.
        </h3>
        <h2>CryptoPaco</h2>
        <h3>
          Co-Founder and 3D Technical Developer of LOLPOPs I've been working for
          almost 29 years in the visual effects field and contributing to
          develop FX and pipelines for known shows such as Watchmen, Captain
          Marvel, Geostorm, Thor: Ragnarok, King Arthur: Legend of the Sword,
          Doctor Strange, The Legend of Tarzan, Thor: The Dark World, Total
          Recall, John Carter, Captain America: The First Avenger, Harry Potter
          and the Deathly Hallows: Part 2, The Chronicles of Narnia: The Voyage
          of the Dawn Treader. Using a process combining physics and
          mathematics, with use of Python, C, MEL and VEX I've developed
          different production tools and solutions. For many years my role has
          been Effects Technical Director, specifically managing and simulating
          rigid body dynamics, particles systems, fluid dynamics, explosions,
          dust, debris, and tearing metals.
        </h3>
        <br id="Popkarts" />
        <hr className="Divider" />
        <br />
        <h2 className="SectionTitle">POPKARTS</h2>
        <h3>
          We're working to be able to release an early-access form of POPKARTS
          as soon after the mint as possible - we're exploring all sorts of
          possibilities. You will use your LOLPOP as a playable character to
          race, for scorekeeping, and more! Building is underway! We plan to
          continue ideating and upgrading POPKARTS as we go, and that means
          post-mint, too! We're incredibly excited for this. Our team is working
          hard to develop environment, characters, in-game systems, hosting
          solutions and interoperability for POPKARTS. The game will be
          web-hosted for all to play! Your LOLPOP NFT will be your ticket into
          POPKARTS!
        </h3>
        <h3>
          Our goal is to create and integrate a Play-to-Earn (P2E) Structure
          within the POPKARTS world; racing to earn! This will be completed with
          $POPTOKEN (POPT) when we are able to come to completion on Game
          Development and start rolling out new features down the line.
        </h3>
        <br />
        <br id="FAQ" />
        <hr className="Divider" />
        <br />
        <h2 className="SectionTitle">FAQ</h2>

        <div>
          <Accordion className="AccordionBorder">
            <div className="AccordionTitle">
              <MuiAccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h2>WHAT IS AN NFT?</h2>
              </MuiAccordionSummary>
            </div>
            <AccordionDetails className="AccordionTab">
              <h3>
                A non-fungible token is a non-interchangeable unit of data
                stored on a blockchain, a form of digital ledger, that can be
                sold and traded. Types of NFT data units may be associated with
                digital files such as photos, videos, and audio.
              </h3>
            </AccordionDetails>
          </Accordion>
          <Accordion className="AccordionBorder">
            <div className="AccordionTitle">
              <MuiAccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h2>WHAT IS METAMASK?</h2>
              </MuiAccordionSummary>
            </div>
            <AccordionDetails className="AccordionTab">
              <h3>
                MetaMask is a software cryptocurrency wallet used to interact
                with the Ethereum blockchain. It allows users to access their
                Ethereum wallet through a browser extension or mobile app, which
                can then be used to interact with decentralized applications.
              </h3>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <div className="AccordionTitle">
              <MuiAccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h2>HOW DO I MINT?</h2>
              </MuiAccordionSummary>
            </div>
            <AccordionDetails className="AccordionTab">
              <h3>
                On Minting-Day, head to our website (you're here!) to mint your
                LOLPOPs using your MetaMask! We are finalizing system scheduling
                to ensure we avoid "Gas Wars" by allowing users extended periods
                of time to mint after their wallet address is verified/connected
                for Whitelist and Public Mint alike - we will gather addresses
                for Golden Tickets and Whitelist in the two weeks prior to
                Minting and add them to our Contracts for access, and reveal the
                precise Mint Schedule as we get nearer to Mint Day, currently
                3/4!
              </h3>
            </AccordionDetails>
          </Accordion>
          <Accordion className="AccordionBorder">
            <div className="AccordionTitle">
              <MuiAccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h2>HOW MUCH DOES IT COST TO MINT A LOLPOP?</h2>
              </MuiAccordionSummary>
            </div>
            <AccordionDetails className="AccordionTab">
              <h3>0.08 ETH</h3>
            </AccordionDetails>
          </Accordion>
          <Accordion className="AccordionBorder">
            <div className="AccordionTitle">
              <MuiAccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h2>WHEN WILL LOLPOPS REVEAL?</h2>
              </MuiAccordionSummary>
            </div>
            <AccordionDetails className="AccordionTab">
              <h3>Right After Mint!</h3>
            </AccordionDetails>
          </Accordion>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Minter;
